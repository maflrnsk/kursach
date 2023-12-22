let Product1 = 0
let Product2 = 0
let Product3 = 0
let Product4 = 0
const Cart1 = document.getElementById("cart-1")
const Cart2 = document.getElementById("cart-2")
const Cart3 = document.getElementById("cart-3")
const Cart4 = document.getElementById("cart-4")
function ChangeCount (prod, count) {
    switch (prod) {
        case (1): {
            if (!(Product1 === 0 && count < 0)) Product1 += count
            Cart1.innerText = "В корзину (" + Product1 + " часов)"
            break
        }
        case (2): {
            if (!(Product2 === 0 && count < 0)) Product2 += count
            Cart2.innerText = "В корзину (" + Product2 + " часов)"
            break
        }
        case (3): {
            if (!(Product3 === 0 && count < 0)) Product3 += count
            Cart3.innerText = "В корзину (" + Product3 + " часов)"
            break
        }
        case (4): {
            if (!(Product4 === 0 && count < 0)) Product4 += count
            Cart4.innerText = "В корзину (" + Product4 + " часов)"
        }
    }
}
const ToCart = document.getElementById("reservation-container")
function OpenCart() {
    let CartProductName = document.createElement("div")
    let CartProduct1 = document.createElement("div")
    let CartProduct2 = document.createElement("div")
    let CartProduct3 = document.createElement("div")
    let CartProduct4 = document.createElement("div")
    let CartProductFinal = document.createElement("div")
    CartProductName.className = "js-element"
    CartProduct1.className = "js-element"
    CartProduct2.className = "js-element"
    CartProduct3.className = "js-element"
    CartProduct4.className = "js-element"
    CartProductFinal.className = "js-element"
    CartProductName.innerText = "Корзина"
    CartProduct1.innerText = "Карта звездного неба (" + Product1 + " часов): " + Product1 * 100 + " руб"
    CartProduct2.innerText = "Фонарик (" + Product2 + " часов): " + Product2 * 200 + " руб"
    CartProduct3.innerText = "Бинокль (" + Product3 + " часов): " + Product3 * 400 + " руб"
    CartProduct4.innerText = "Телескоп (" + Product4 + " часов): " + Product4 * 1200 + " руб"
    CartProductFinal.innerText = "Итого: " + (Product1 * 100 + Product2 * 200 + Product3 * 400 + Product4 * 1200) + " руб"
    let Back = document.createElement("div")
    Back.className = "js-back"
    ToCart.appendChild(Back)
    let Cart = document.createElement("div")
    Cart.className = "js-cart"
    Cart.appendChild(CartProductName)
    Cart.appendChild(CartProduct1)
    Cart.appendChild(CartProduct2)
    Cart.appendChild(CartProduct3)
    Cart.appendChild(CartProduct4)
    Cart.appendChild(CartProductFinal)
    ToCart.appendChild(Cart)
    Back.addEventListener("click", function () {
        Cart.remove()
        Back.remove()
    })
}