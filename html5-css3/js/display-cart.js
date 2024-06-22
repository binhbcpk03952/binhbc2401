document.addEventListener('DOMContentLoaded', function() {
    updateShoppingCart();
});

function prev(n, num) {
    const quantityCart = document.getElementById(`cart-quantity-${num}`)
    let quantitys = parseInt(quantityCart.value)
    quantitys += n;
    if (quantitys < 1) {
        quantitys  = 1
    }
    quantityCart.value = quantitys;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.idCart == num);
    if (product && product.quantity > 1) {
        product.quantity = quantitys;
        product.totalPrice = product.quantity * product.price;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateShoppingCart();
    }
}

function pluss(number, num) {
    const quantityCart = document.getElementById(`cart-quantity-${num}`);
    let quantitys = parseInt(quantityCart.value);
    quantitys += number;
    quantityCart.value = quantitys;
    console.log();

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.idCart == num);
    if (product) {
        product.quantity = quantitys;
        product.totalPrice = product.quantity * product.price;
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateShoppingCart();
    }
}

function removeCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.idCart != id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateShoppingCart();
    alert('Sản phẩm đã được xóa khỏi giỏ hàng');
}

let carts = document.getElementById('add-cart');
function updateShoppingCart() {
    let listCarts = JSON.parse(localStorage.getItem('cart'));
    carts.innerHTML = "";

    for (let cart of listCarts) {
        carts.innerHTML += 
        `
        <tr>
            <td class="py-4 align-middle">
                <div class="cart-info d-md-flex flex-wrap align-items-center">
                    <div class="col-lg-3">
                        <div class="cart-image">
                            <img src="${cart.image}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="cart-detail">
                            <h5 class="cart-title">
                                <a href="#" class="text-decoration-none">${cart.nameProduct}</a>
                            </h5>
                        </div>
                    </div>
                </div>
            </td>
            <td class="py-4 align-middle">
                <div class="cart-quantity d-md-flex align-items-center">
                    <button onclick="prev(-1, ${cart.idCart} )">-</button>
                    <input type="text" name="" class="quantityCart" id="cart-quantity-${cart.idCart}" value="1">
                    <button  onclick="pluss(1, ${cart.idCart})">+</button>
                </div>
            </td>
            <td class="py-4 align-middle replace-font">
                $${cart.totalPrice}
            </td>
            <td class="py-4 align-middle">
                <button class="cart-remove" onclick=removeCart(${cart.idCart})>
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        </tr>
        `
    }

}

document.addEventListener('DOMContentLoaded', function() {
    updateShoppingCart();
});
// let quantity = 0






