document.addEventListener('DOMContentLoaded', function(){
    console.log("загрузается католог")
    let products = [
        {img: "./imges/image1.png", name: "coat", price: 149, id: 1},
        {img: "./imges/image1.png", name: "coat2", price: 149, id: 2},
    ]
    
    let products_in_cart = [
    
    ]
    
    let catalog = document.querySelector(".staff-row")
    if(!catalog){
        console.warn("эллемент staff-row не найден")
        return
    }
    //
    let init_catalog = (products) => {
        catalog.innerHTML = "";
        for(let product of products){
            catalog.insertAdjacentHTML(
                "beforeend", 
                `
                    <div id="s-i-${product.id}" class="staff-iteam">
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
        add_to_cart()
    }
    
    //
    let add_to_cart = ()=>{ document.querySelectorAll(".shopping-cart-btn").forEach((x)=>{
        x.addEventListener("click", function(){
            let product_id = +this.dataset.id
            let products_in_cart =document.cookie.split("; ").find(row=>row.startsWith("cart="))
            products_in_cart = products_in_cart?products_in_cart.split("=")[1].split(","):[]
            products_in_cart.push(product_id)
            document.cookie = "cart="+ products_in_cart.join(",")+ ";path=/"
        })
    })
    }
    
   init_catalog(products) 
    
})


