class Products {
    constructor(id, image, nameProduct, price) {
        this.id = id;
        this.image = image;
        this.nameProduct = nameProduct;
        this.price = price;
    }
}
function clearInput() {
    document.querySelectorAll('.inp-value').forEach(input => {
        input.value = "";
    });
}

document.querySelector('#add-products').addEventListener('submit', function (event) {
    event.preventDefault();
    let image = document.getElementById('image-product').value;
    let nameProduct = document.getElementById('name-product').value;
    let price = document.getElementById('price').value;
    let bool = true;

    if (image.trim() === "") {
        document.querySelector('.error-img').textContent = "Image is reqiued";
        bool = false;
    }
    if (nameProduct.trim() === "") {
        document.querySelector('.error-name').textContent = "Name is reqiued";
        bool = false;
    }
    if (price.trim() === "") {
        document.querySelector('.error-price').textContent = "price is reqiued";
        bool = false;
    }
    else if (parseFloat(isNaN(price))) {
        document.querySelector('.error-price').textContent = "Invalid price";
        bool = false;
    }
    if (bool) {
        let products = localStorage.getItem('products')
        let id;

        let arrProduct = []
        if (!products) {
            id = 1;
        }
        else {
            arrProduct = JSON.parse(products)
            if (arrProduct.length === 0) {
                id = 1;
            }
            else {
                id = arrProduct[arrProduct.length - 1].id + 1;
            }
        }
        let newProduct = new Products(id, image, nameProduct, price);
        arrProduct.push(newProduct);
        localStorage.setItem("products", JSON.stringify(arrProduct));
        clearInput()
        alert("Lưu sản phẩm thành công");
        // Cập nhật bảng sản phẩm
        updateTableProduct();
        // return true;
    }
});
// let showProducts = document.getElementById('list-products');
// showProducts.innerHTML =''
// function updateTableProduct() {
//     let showProducts = document.getElementById('list-products');
//     let listProduct = JSON.parse(localStorage.getItem('products'));
//     showProducts.innerHTML = "";

//     for (let prd of listProduct) {
//         showProducts.innerHTML += `
//         <div class="col-md-4">
//             <div class="card_image">
//                 <a href="#">
//                     <img src="${prd.image}" alt>
//                 </a>
//             </div>
//             <div class="card-content">
//                 <a href="#">
//                     <h3>${prd.nameProduct}</h3>
//                 </a>
//                 <div class="card_content--text">
//                     <span>
//                         <i class="fa-regular fa-star"></i>
//                         <i class="fa-regular fa-star"></i>
//                         <i class="fa-regular fa-star"></i>
//                         <i class="fa-regular fa-star"></i>
//                         <i class="fa-regular fa-star"></i>
//                         5.0
//                     </span>
//                     <h3>$${prd.price}</h3>
//                     <button class="add-tocart" onclick="addToCart(${prd.id})">ADD TO CART</button>
//                     <button class="add-favourites" onclick="addToFavourite(${prd.id})">
//                         <i class="fa-solid fa-heart"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//         `;
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
    
// });