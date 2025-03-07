//взять элл где вся корзина
const Cartt = document.querySelector(".shopping-cart--main-back")
const togle_visible_cart = (is_visible) => {
    if(is_visible){
        Cartt.classList.remove("visually-hidden")
    }else{
        Cartt.classList.add("visually-hidden")
    }
}

//открыть корзиеу
document.getElementById("open-cart").addEventListener("click", function(){
    togle_visible_cart(true)
})
document.getElementById("close-cart").addEventListener("click", function(){
    togle_visible_cart(false)
})

let products = [
    {img: "./imges/image 1.png", name: "coat", price: 149, id: 1},
    {img: "./imges/image 1.png", name: "coat2", price: 149, id: 2},
]

let products_in_cart = [

]

let catalog = document.querySelector(".staff-row")
let innit_catalog = (products) => {
    catalog.textContent = "";
    for(let product of products){
        catalog.insertAdjacentHTML(
            "beforeend", 
            `
                <div id="s-i-1" class="staff-iteam">
                    <img class="staff-img" src="${product.img}">
                    <p class="staff-name">${product.name}</p>
                    <p class>${product.price}$</p>
                    <div class="staff-moves">
                        <button data-id="${product.id}" class="staff-btn shopping-cart-btn"><img class="c-i-img" style="width: 20px;height: 20px;" src="./imges/shopping-cart-notification.svg"></button>
                        <button class="staff-btn"><img class="c-i-img" style="width: 20px;height: 20px;" src="./imges/search.svg"></button>
                        <button class="staff-btn"><img class="c-i-img" style="width: 20px;height: 20px;" src="./imges/heart.svg"></button>
                    </div>
                </div>
            `
        )
    }
}

document.querySelectorAll(".shopping-cart-btn").forEach((x)=>{
    x.addEventListener("click", function(){
        let product_id = +this.dataset.id
        let product_in_cart = products_in_cart.find((product)=>product.product_id == product_id)
        if(product_in_cart == null){
            products_in_cart.push({
                product_id: product_id, count: 1
            })
        }else{
            product_in_cart.count++
        }
        innit_catalog()
    })
})

let innit_cart = ()=> {
    if(products_in_cart.length>0){
        let shopping_cart = document.querySelector(".shopping-cart--main")
        shopping_cart.textContent= ""
        for(let product_in_cart of products_in_cart){
            let product = products.find(p => p.id == product_in_cart.product_id)
            shopping_cart.insertAdjacentHTML(
                "beforeend",
                `   <div class="shopping-cart-iteam">
                        <div class="shopping-cart-iteam-radio-btn">
                            <input type="checkbox" id="huey" name="drone" value="on" checked="true">
                        </div>
                        <img class="shopping-cart-iteam-img" src="${product.img}">
                        <p class="shopping-cart--iteam-name">${product.name}</p>
                        <p class="shopping-cart--iteam-price">${product.price}$</p>
                        <div class="shopping-cart-iteam-Quantity">
                            <button data-id="${product.id}" class="shopping-cart-iteam-Quantity less"><img class="c-i-img" style="width: 40px;height: 40px;" src="./imges/angle-small-left.svg"></button>
                            <div class="shopping-cart-iteam-Quantity-count"><p>${product_in_cart.count}</p></div>
                            <button data-id="${product.id}" class="shopping-cart-iteam-Quantity more"><img class="c-i-img" style="width: 40px;height: 40px;" src="./imges/angle-small-right.svg"></button>
                        </div>
                    </div>`
            )
        }
    }
}