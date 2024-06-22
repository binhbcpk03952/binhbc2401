"use strict"
// class product

class product {
    constructor(id, urlPicture, nameProduct, price, quantity) {
        this.id = id
        this.urlPic = urlPicture
        this.nameP = nameProduct
        this.prices = price
        this.quantitys = quantity
    }
}

class sanPhamGioHang {
    constructor(id, urlHinh, tensp, giasp) {
        this.id = id
        this.url = urlHinh
        this.ten = tensp
        this.gia = giasp
    }
}
document.getElementById('btn-chucnang-themsp').addEventListener('click', function() {
    document.getElementById('them-sp').style.display = 'block'
})
// clear hop input
function clearInput() {
    let listInput = document.getElementsByClassName('themsp-input')
    for(let input of listInput) {
        input.value = ''
    }
}


document.getElementById('btn-themsp').addEventListener('click', function() {
   let urlPicture = document.getElementById('themsp-hinh').value
   let nameProduct = document.getElementById('themsp-ten').value
   let price = document.getElementById('themsp-gia').value
   let quantity = document.getElementById('themsp-soluong').value
    // luu thong tin vo localstorange

    let listLocal = localStorage.getItem('dssp')
    let id
    let categories = []
    // chua co sp trong storange
    if(!listLocal) {
        id = 1
    }
    else {
        categories = JSON.parse(listLocal)
        // TH mang rong
        if (categories.lenght === 0) {
            id = 1;
        } else {
            // dat iddua vao sp cuoi mang
            id = categories[categories.length - 1].id + 1
        }
    }

    // add object sp
    let newPro = new product(id, urlPicture, nameProduct, price, quantity)
    categories.push(newPro)
    // lu mang vo local storange voi key dssp
    localStorage.setItem('dssp', JSON.stringify(categories))
    clearInput()
    alert('Luu san pham thanh cong')

    updateBangSanPham(categories)
    //Ẩn form thêm sản phẩm
    document.getElementById("them-sp").style.display = "none"
})

function updateTableProduct(arrayProduct) {
    let divProduct = document.getElementById('hien-thi-sp') 
    divProduct.innerHTML = ''
    let i = 0
    for (let product of arrayProduct) {
        divProduct.innerHTML = divProduct.innerHTML + `
        <div class="card">
            <div class="sp-img"
                style="background-image: url('${product.urlPic}');">
            </div>
            <h1>${product.nameP}</h1>
            <p class="price">${product.prices}</p>
            <label><span class="bold-text">Kho:</span> ${product.quantitys}</label>
            <br>
            <br>
            <button class="btn-sp">Sửa SP</button>
            <button class="btn-sp" onclick="deleteProduct(${i})">Xóa SP</button>
            <br>
            <p class="bold-text">Mua ngay</p>
            <button class="qty-btn">-</button>
            <input type="text" name="quantity" value="1" min="1">
            <button class="qty-btn">+</button>
        <div><button class="buy-button" onclick="addToCart()">Thêm vào giỏ hàng</button></div>
        </div>
        `
        i++
    }

}

//hiển thị sản phẩm

function refresh() {
    //lấy danh sách sản phẩm trong storage
    let dsSanPham = JSON.parse(localStorage.getItem("dssp"))
    if (dsSanPham) {
        updateBangSanPham(dsSanPham);
        updateGioHang();
    }
}

//Xóa sản phẩm
function xoaSP(viTri) {
    //lấy danh sách sản phẩm trong storage
    let dsSanPham = JSON.parse(localStorage.getItem("dssp"))
    //xóa thành phần ở index viTri
    dsSanPham.splice(viTri, 1)
    //lưu danh sách đã cập nhật vào storage
    localStorage.setItem("dssp", JSON.stringify(dsSanPham))
    //update bảng sản phẩm
    refresh();
}

//Thêm giỏ hàng
function themGioHang(viTri) {
    //lấy danh sách sản phẩm trong storage
    let dsSanPham = JSON.parse(localStorage.getItem("dssp"))

    //Lấy thông tin của sản phẩm cần thêm vào giỏ hàng
    let id = dsSanPham[viTri].id
    let urlHinh = dsSanPham[viTri].url
    let tensp = dsSanPham[viTri].ten
    let giasp = dsSanPham[viTri].gia

    //Tạo đối tượng lưu thông tin sản phẩm
    let spMua = new sanPhamGioHang(id, urlHinh, tensp, giasp)
    let dsMua = []
    //Thử truy xuất key "dsGioHang"
    let duLieuTho = localStorage.getItem("dsGioHang")
    //trường hợp trong giỏ hàng đang có sản phẩm
    if (duLieuTho) {
        dsMua = JSON.parse(duLieuTho)
    }
    dsMua.push(spMua)
    //Lưu mảng dsMua vào localStorage với key "dsGioHang"
    localStorage.setItem("dsGioHang", JSON.stringify(dsMua))
    
    //Cập nhật giỏ hàng
    updateGioHang()
}

//hiển thị giỏ hàng
function updateGioHang() {
    //lấy danh sách sản phẩm trong storage
    let dsGioHang = JSON.parse(localStorage.getItem("dsGioHang"))

    let gioHang = document.getElementById("sp-gio-hang")
    gioHang.innerHTML =''
    //Hiển thị sản phẩm trong danh sách giỏ hàng
    for(let sp of dsGioHang){
        gioHang.innerHTML += `
        <div class=carts-shop>
            <div class="cart-item cart-column">
                <img class="cart-item-image"
                    src="${sp.url}">
                <span class="cart-item-title">${sp.ten}</span>
            </div>
            <span class="cart-price cart-column">$${sp.gia}$</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" min="1" value="1"
                    onchange="thayDoiSoLuong(viTriSua, this.value)">
            </div>
            <span class="cart-price-tong cart-column">$19.99</span>
            <div class="cart-column-xoa">
                <button class="btn btn-danger cart-column-xoa" onclick="xoaSPMua(viTriXoa)">Xóa <i
                            class="fa-solid fa-trash-can"></i></a></button>
            </div>
        </div>
        `
    }
}
