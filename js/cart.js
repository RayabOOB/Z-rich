document.addEventListener("DOMContentLoaded", function(){
    console.log("корзина загружается")
        //взять элл где вся корзина
    const Cartt = document.querySelector(".shopping-cart--main-back")
    const togle_visible_cart = (is_visible) => {
        if(is_visible){
            Cartt.classList.remove("visually-hidden")
        }else{
            Cartt.classList.add("visually-hidden")
        }
    }

    if(!Cartt){
        console.warn("эллемент shopping-cart--main-back не найден")
    }

    //открыть корзиеу
    document.getElementById("open-cart").addEventListener("click", function(){
        togle_visible_cart(true)
    })
    document.getElementById("close-cart").addEventListener("click", function(){
        togle_visible_cart(false)
    })

    let init_cart = ()=> {

        let shopping_cart = document.querySelector(".shopping-cart--main")
        if(!shopping_cart){
            console.error("эллемент shopping-cart--main не найден")
            return
        }
        shopping_cart.innerHTML= ""
        let products_in_cart = document.cookie.split("; ").find(row => row.startsWith("cart="))
        products_in_cart = products_in_cart?products_in_cart.split("=")[1].split(","):[]
        if(products_in_cart.length === 0){
            shopping_cart.innerHTML = "<p>Корзина пустая</p>"
            return
        }
        for(let iteam of products_in_cart){
            let product = products.find(p => p.id == iteam.product_id)
            if(!product)continue

            shopping_cart.insertAdjacentHTML(
                "beforeend",
                `   <div class="shopping-cart-iteam">
                        <div class="shopping-cart-iteam-radio-btn">
                            <input type="checkbox" id="huey" name="drone" value="on" checked="true">
                        </div>
                        <img class="shopping-cart-iteam-img" src="${product.img}">
                        <p class="shopping-cart--iteam-name">товар№${product.id}</p>
                        <p class="shopping-cart--iteam-price">${product.price}$</p>
                    </div>`
            )
        
    }
    
    }
    
    init_catalog()
})



