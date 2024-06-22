class Cart {
    constructor(idCart, image, nameProduct, quantity, price, totalPrice) {
        this.idCart = idCart;
        this.image = image;
        this.nameProduct = nameProduct;
        this.quantity = quantity
        this.price = price;
        this.totalPrice = totalPrice;
    }
}


let listProduct = JSON.parse(localStorage.getItem('products'));
// console.log(listProduct);
// for (let prd of listProduct) {
//     console.log(prd.id);
//     console.log(prd.image);
//     console.log(prd.nameProduct);
//     console.log(prd.price);
//     console.log('--------');
// }
let showProducts = document.querySelector('div#list-products');
showProducts.innerHTML = ""
document.addEventListener('DOMContentLoaded', function updateTableProduct() {
    let showProducts = document.querySelector('div#list-products');
    let listProduct = JSON.parse(localStorage.getItem('products'));

    // showProducts = "";
    showProducts.innerHTML = '';
    for (let prd of listProduct) {
        showProducts.innerHTML +=
            `
            <div class="col-md-4">
                <div class="card_image">
                    <a href="#">
                        <img
                            src="${prd.image}" alt>
                    </a>
                </div>
                <div class="card-content">
                    <a href="#">
                        <h3>${prd.nameProduct}</h3>
                    </a>
                    <div class="card_content--text">
                        <span>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            5.0
                        </span>
                        <h3>$${prd.price}</h3>
                        <div class="d-flex align-items-center">
                            <button class="add-tocart" onclick="addToCart(${prd.id})">ADD TO CART</button>
                            <button class="add-favourites" onclick="addToFavourite(${prd.id})">
                                <i class="fa-solid fa-heart"></i>
                            </button>                                    
                        </div>
                    </div>
                </div>
            </div>
        `
    }
});
let datas = JSON.parse(localStorage.getItem('cart'))
console.log(datas);
for (let dat of datas) {
    console.log(dat.idCart);

    // console.log(bool);
}
// console.log(data.length);

function addToCart(id) {
    let product = listProduct.filter(prd => prd.id == id)[0];
    let idCart = id;
    let image = product.image;
    let nameProduct = product.nameProduct;
    let price = parseFloat(product.price);
    let data = localStorage.getItem('cart');
    let arrCart = data ? JSON.parse(data) : [];

    // Check if the product is already in the cart
    let findProduct = arrCart.find(item => item.idCart == id);

    if (findProduct) {
        // Increment the quantity and update the total price
        findProduct.quantity += 1;
        findProduct.totalPrice = findProduct.quantity * findProduct.price;
    } else {
        // Add the new product to the cart
        let quantity = 1;
        let totalPrice = price * quantity;
        let newCartProduct = new Cart(idCart, image, nameProduct, quantity, price, totalPrice);
        arrCart.push(newCartProduct);
    }
    
    localStorage.setItem('cart', JSON.stringify(arrCart));
    alert('Đã thêm sản phẩm vào giỏ hàng');
    updateShoppingCart();
    location.href = "cart.html"
}


carts.innerHTML = "";
document.addEventListener('DOMContentLoaded', function updateShoppingCart() {
    let carts = document.getElementById('add-cart');
    let listCarts = JSON.parse(localStorage.getItem('cart'));
    if (carts) {
        carts.innerHTML = "";
        for (let cart of listCarts) {
            carts.innerHTML =
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
                /div>
            </td>
            <td class="py-4 align-middle">
                <div class="cart-quantity d-md-flex align-items-center">
                    <button onclick="prev()">-</button>
                    <input type="text" name="" id="cart-quantity-${cart.id}" value="1">
                    <button  onclick="pluss()">+</button>
                </div>
            </td>
            <td class="py-4 align-middle replace-font">
                $${cart.totalPrice}
            </td>
            <td class="py-4 align-middle">
                <button class="cart-remove" onclick=removeCart(${cart.id})>
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        </tr>
        `
        }
    }

});

document.addEventListener('DOMContentLoaded', function() {
    updateShoppingCart();
});


