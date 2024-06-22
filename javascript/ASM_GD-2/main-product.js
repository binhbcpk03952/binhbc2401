class Product {
    constructor(id, urlPic, nameProduct, price, quantity, describe, sizes, colors) {
        this.id = id;
        this.urlPic = urlPic;
        this.nameProduct = nameProduct;
        this.price = price;
        this.quantity = quantity;
        this.describe = describe;
        this.sizes = sizes;
        this.colors = colors;
    }
}

class CartProduct {
    constructor(id, urlPic, nameProduct, price, quantity, size, color, totalPrice) {
        this.id = id;
        this.urlPic = urlPic 
        this.nameProduct = nameProduct
        this.price = price
        this.quantity = quantity
        this.size = size
        this.color = color
        this.totalPrice = totalPrice
    }
}

function clearInput() {
    document.getElementById('link-product').value = ""
    document.getElementById('name-product').value = ""
    document.getElementById('price-product').value = ""
    document.getElementById('quantity').value = ""
    document.getElementById('describe').value = ""
    document.getElementById('size-product').value = ""
    document.getElementById('color-product').value = ""
   
}
function add() {
    document.querySelector('form.add-product').style.display = 'block'
}

function addProduct() {
    let boonlean = true
    let urlPic = document.getElementById('link-product').value;
    let nameProduct = document.getElementById('name-product').value;
    let price = document.getElementById('price-product').value;
    let quantity = document.getElementById('quantity').value;
    let describe = document.getElementById('describe').value;
    let size = document.getElementById('size-product');
    let valueSize = size.value;
    let color = document.getElementById('color-product');
    let valueColor = color.value;
    
    // validate data
    // let sizes = [];
    // for (let option of size.options) {
    //     if (option.selected) {
    //         sizes.push(option.text);
    //     }
    // }
    // let colors = [];
    // for (let option of color.selected) {
    //     if (option.selected) {
    //         colors.push(option.text);
    //     }
    // }
    let sizes = [];
    for (let option of size.options) {
        sizes.push(option.text);
    }
    let colors = [];
    for (let option of color.options) {
        colors.push(option.text);
    }
    
    if(urlPic.trim() === "" ) {
        document.querySelector('div.url-product p').innerHTML = 'Vui lòng nhập link hình ảnh';
        boonlean = false
    }
    if(nameProduct.trim() === "" ) {
        document.querySelector('div.name-product p').innerHTML = 'Vui lòng nhập tên sản phẩm';
        boonlean = false
    }
    if(price.trim() === "" ) {
        document.querySelector('div.price-product p').innerHTML = 'Vui lòng nhập giá sản phẩm';
        boonlean = false
    }
    if(quantity.trim() === "" ) {
        document.querySelector('div.quantity p').innerHTML = 'Vui lòng nhập số lượng tồn kho';
        boonlean = false
    }
    
    if(!valueSize) {
        document.querySelector('div.size p').innerHTML = 'Vui lòng nhập size';
        boonlean = false
    }
    if(!valueColor) {
        document.querySelector('div.color p').innerHTML = 'Vui lòng nhập color';
        boonlean = false
    }
    if(!boonlean) {
        return false
    }


    let listProduct = localStorage.getItem('listProduct')
    let id;
    
    let arrProduct = []
    
    if (!listProduct) {
        id = 1
    }
    else {
        arrProduct = JSON.parse(listProduct)
        if (arrProduct.length === 0) {
            id = 1
        }
        else {
            id = arrProduct[arrProduct.length - 1].id + 1
        }
    }
    let newProduct = new Product(id, urlPic, nameProduct, price, quantity, describe, sizes, colors);
    arrProduct.push(newProduct);
    localStorage.setItem("listProduct", JSON.stringify(arrProduct));
    clearInput()
    alert("Lưu sản phẩm thành công");
    // Cập nhật bảng sản phẩm
    updateTableProduct();
    return true;
}

function updateTableProduct() {
    let divSP = document.getElementById("hien-thi-sp");
    divSP.innerHTML = "";
    let listProduct = JSON.parse(localStorage.getItem('listProduct'));
    let viTri = 0;
    for (let sp of listProduct) {
        let sizeOptions = "";
        if (Array.isArray(sp.sizes)) {
            for (let size of sp.sizes) {
                sizeOptions += `<option>${size}</option>`;
            }
        }

        let colorOptions = "";
        if (Array.isArray(sp.colors)) {
            for (let color of sp.colors) {
                colorOptions += `<option>${color}</option>`;
            }
        }
        divSP.innerHTML += `
        <div class="card">
            <div class="sp-img" style="background-image: url('${sp.urlPic}');"></div>
            <h1>${sp.nameProduct}</h1>
            <p class="price">$${sp.price}</p>
            <label><span class="bold-text">Kho:</span> ${sp.quantity}</label>
            
            <div class="btn-edit">
                <button class="btn-sp" onclick="editProduct(${viTri})">Sửa SP</button>
                <button class="btn-sp" onclick="xoaSP(${viTri})">Xóa SP</button>
            </div>
            
            <p class="bold-text">Mua ngay</p>
            <div>
                <button class="qty-btn" onclick="plussQuantity(${viTri},-1)">-</button>
                <input type="text" name="quantity" class="quantity"  value="1" min="1"
                id="quantity${viTri}" oninput="updateQuantityValue(${viTri},this.value)">
                <button class="qty-btn" onclick="plussQuantity(${viTri},1)">+</button>
            </div>
            <div class="btn-edit">
                <label for="">Size: </label>    
                <select class="size-product">${sizeOptions}</select>
            </div>
            <div>
                <label for="">Color: </label>
                <select class="color-product">${colorOptions}</select>
            </div>

            <div><button class="buy-button" onclick="addShoppingCart(${viTri})">Thêm vào giỏ hàng</button></div>
            </div>
        `;
        viTri++;
    }
}
function refresh() {
    //lấy danh sách sản phẩm trong storage
    let arrProduct = JSON.parse(localStorage.getItem("listProduct"))
    if (arrProduct) {
        updateTableProduct(arrProduct);
        // updateGioHan g();
    }
}

function xoaSP(viTri) {
    //lấy danh sách sản phẩm trong storage
    let arrProduct = JSON.parse(localStorage.getItem("listProduct"))
    //xóa thành phần ở index viTri
    arrProduct.splice(viTri, 1)
    //lưu danh sách đã cập nhật vào storage
    localStorage.setItem("listProduct", JSON.stringify(arrProduct))
    //update bảng sản phẩm
    refresh();
}
function editProduct(viTri) {
    let arrProduct = JSON.parse(localStorage.getItem("listProduct"));
    let product = arrProduct[viTri];
    document.getElementById('link-product').value = product.urlPic;
    document.getElementById('name-product').value = product.nameProduct;
    document.getElementById('price-product').value = product.price;
    document.getElementById('quantity').value = product.quantity;
    document.getElementById('describe').value = product.describe;
    
    // Set selected size and color options
    let sizeSelect = document.getElementById('size-product');
    let colorSelect = document.getElementById('color-product');
    sizeSelect.value = product.sizes[0]; // Assuming sizes is an array
    colorSelect.value = product.colors[0]; // Assuming colors is an array

    // Show the add product form
    document.querySelector('form.add-product').style.display = 'block';

    // Remove the product from the list to avoid duplication
    arrProduct.splice(viTri, 1);
    localStorage.setItem("listProduct", JSON.stringify(arrProduct));

    // Update the product table
    updateTableProduct();
}



function showAddSize() {
    document.querySelector('form.form-addsize').style.display = 'block';    
}
function showAddColor() {
    document.querySelector('form.form-addcolor').style.display = 'block';
}

let nextValueSize = 1
let nextValueColor = 1
function addSize() {
    let addSize = document.getElementById('add-size');
    let size = document.getElementById('size-product');

    if(addSize.value.trim() === "") {
        return false;
    }

    let newOption = document.createElement('option')
    newOption.text = addSize.value
    newOption.value = nextValueSize
    nextValueSize++
    size.add(newOption)
    addSize.value = "";
    return true

}
function addColor() {
    let addColor = document.getElementById('add-color');
    let color = document.getElementById('color-product');

    if(addColor.value.trim() === "") {
        return false;
    }

    let newOption = document.createElement('option')
    newOption.text = addColor.value
    newOption.value = nextValueColor
    nextValueColor++
    color.add(newOption)
    addColor.value = " "
    return true

}

let soLuong = [];

function updateQuantityValue(viTri ,value) {
    // Kiểm tra giá trị nhập vào và gán vào biến soLuong
    soLuong[viTri] = parseInt(value);
    // Đảm bảo số lượng không nhỏ hơn 1
    if (soLuong[viTri] < 1 || isNaN(soLuong[viTri])) {
        soLuong[viTri] = 1;
    }
    // console.log("Giá trị số lượng mới: ", soLuong);
}


function plussQuantity(viTri, n) {
    let listProduct = JSON.parse(localStorage.getItem('listProduct'));
    let slKho = listProduct[viTri].quantity
    // console.log(slKho)
    if (soLuong[viTri] === undefined) {
        soLuong[viTri] = 0; // Initialize to 0 if undefined
    }
    soLuong[viTri] += n;
    if (soLuong[viTri] < 1) {
        soLuong[viTri] = 1;
    }
    if (soLuong[viTri] > slKho) {
        soLuong[viTri] = slKho;
    }

    document.getElementById(`quantity${viTri}`).value = soLuong[viTri];
}

function addShoppingCart(viTri) {
    let arrProduct = JSON.parse(localStorage.getItem("listProduct"))

    let id = arrProduct[viTri].id
    let urlImage = arrProduct[viTri].urlPic
    let nameSP = arrProduct[viTri].nameProduct
    let priceSP = arrProduct[viTri].price
    let quantitys = parseInt(document.getElementById(`quantity${viTri}`).value) 
    let sizeSP = document.querySelector('select.size-product').value
    let colorSP = document.querySelector('select.color-product').value
    let totalPrice = parseInt(priceSP) * parseInt(quantitys)

    let boughtProduct = new CartProduct(id, urlImage, nameSP, priceSP, quantitys, sizeSP, colorSP, totalPrice)

    let shoppingList = []
    
    let data = localStorage.getItem('shoppingCart')
    if(data) {
        shoppingList = JSON.parse(data)
    }
    shoppingList.push(boughtProduct)

    localStorage.setItem('shoppingCart', JSON.stringify(shoppingList))
    alert('Đã thêm sản phẩm vào giỏ hàng')
    updateShoppingCart()


}
function updateShoppingCart() {
    let listCarts = JSON.parse(localStorage.getItem('shoppingCart'))
    let carts = document.getElementById('sp-gio-hang')
    carts.innerHTML = ""
    viTriXoa = 0
    let totalPriceAll = 0

    for (let sp of listCarts) {
        totalPriceAll += sp.totalPrice
        carts.innerHTML += `
        <div class=carts-shop>
        <div class="cart-item cart-column">
            <img class="cart-item-image"
                src="${sp.urlPic}">
            <span class="cart-item-title">${sp.nameProduct}</span>
        </div>
        <span class="cart-price cart-column">$${sp.price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" min="1" max="" value="${sp.quantity}"
                onchange="thayDoiSoLuong(${viTriXoa}, this.value)">
        </div>
        <span class="cart-quantity cart-column size">${sp.size}</span>
        <span class="cart-quantity cart-column color">${sp.color}</span>
        <span class="cart-price-tong cart-column">$${sp.totalPrice}</span>
        <div class="cart-column-xoa">
            <button class="btn btn-danger cart-column-xoa" onclick="deleteProductBuy(${viTriXoa})">Xóa <i
                        class="fa-solid fa-trash-can"></i></a></button>
        </div>
    </div>
    `
    viTriXoa++;     
    }
    document.getElementById('Tong-tien').innerText = `$${totalPriceAll.toFixed(2)}`
}
updateShoppingCart()
 
function deleteProductBuy(viTri) {
    //lấy danh sách sản phẩm trong storage
    let shoppingList = JSON.parse(localStorage.getItem("shoppingCart"))
    //xóa thành phần ở index viTri
    shoppingList.splice(viTri, 1)
    //Lưu mảng dsMua vào localStorage với key "dsGioHang"
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingList))

    //Cập nhật giỏ hàng
    updateShoppingCart()
}
function thayDoiSoLuong(viTriXoa, value) {
    let listCarts = JSON.parse(localStorage.getItem('shoppingCart'));

    // Lấy sản phẩm cần cập nhật theo viTri
    let sp = listCarts[viTriXoa];
    sp.quantity = parseInt(value);
    sp.totalPrice = sp.price * sp.quantity;

    // Cập nhật lại sản phẩm trong giỏ hàng
    listCarts[viTriXoa] = sp;

    localStorage.setItem('shoppingCart', JSON.stringify(listCarts));
    updateShoppingCart();

}