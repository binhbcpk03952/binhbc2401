// "use strict"
let products = []
let windowProduct = document.getElementById("window-product")
let bool = false
let soLuongBan

class product {
    constructor(id, tenSP, giaBan, soLuong) {
        this.id = id
        this.tenSP = tenSP
        this.giaBan = giaBan
        this.soLuong = soLuong
    }
}

function themSanPham() {
    while(true) {
        let id = prompt("Nhập ID của sản phẩm")
        let tenSP = prompt("Nhập tên của sản phẩm")
        let giaBan = Number(prompt("Nhập giá bán của sản phẩm"))
        let soLuong = Number(prompt("Nhập số lượng của sản phẩm"))
        
        if (id.length === 0 || tenSP.length === 0) {
            alert("Dữ liệu nhập vào không hợp lệ, Vui lòng nhập lại")
            continue
        }
        if (isNaN(giaBan) || isNaN(soLuong) || giaBan < 0 || soLuong < 0){
            alert("Dữ liệu nhập vào không hợp lệ, Vui lòng nhập lại")
            continue
        }
        else{
            let newProduct = new product(id, tenSP, giaBan, soLuong)
            products.push(newProduct);
            alert("Thêm sản phẩm thành công")
            break
        }
    }
}

function xemDS() {
    if(products.length === 0){
        alert("Chưa có sản phẩm trong danh sách")
    }
    else {
        windowProduct.innerHTML = ""
        windowProduct.innerHTML += '<h2>Danh sách sản phẩm</h2>'
        for (SP of products) {
            windowProduct.innerHTML += '<p>Tên sản phẩm: ' + SP.tenSP + '</p>'
        }
    }
}


function timKiemSP() {
    let timSP = prompt("Nhập ID sản phẩm cần tìm")
    windowProduct.innerHTML = ""
    for (SP of products) {
        if (SP.id === timSP) {
            bool = true
            
            windowProduct.innerHTML += "<h2>Thông tin sản phẩm cần tìm</h2>"
            windowProduct.innerHTML += "<p>ID: " + SP.id + "</p>"
            windowProduct.innerHTML += "<p>Tên sản phẩm: " + SP.tenSP + "</p>"
            windowProduct.innerHTML += "<p>Giá: " + SP.giaBan + "</p>"
            windowProduct.innerHTML += "<p>Số lượng: " + SP.soLuong + "</p>"
            break   
        }
        if(!bool) {
            alert("Không có sản phẩm trong danh sách")
        }
    }
}
function xoaSP() {
    let xoa = prompt("Nhập ID sản phẩm bạn muốn xóa")
    for(let i = 0; i < products.length; i++) {
        if (products[i].id === xoa) {
            bool = true
            products.splice(i, 1)
        }
    }
    if(bool) {
        alert("Đã xóa sản phẩm thành công")
    }
    else {
        alert("Không có sản phẩm trong danh sách")
    }
}
function banSP() {
    let idBan = prompt("Nhập ID sản phẩm muốn bán")
    for (SP of products) {
        if (SP.id === idBan) {
            bool = true
            soLuongBan = parseInt(prompt("Nhập số lượng sản phẩm muốn bán"))
            if (soLuongBan <= SP.soLuong && soLuongBan > 0) {
                SP.soLuong -= soLuongBan 
                alert("Bán sản phẩm thành công")
            }
            else {
                alert("Số lượng bán lớn hơn số lượng trong kho hoặc giá trị không xác đinh")
            }
        }
        break
    }
    if (!bool) {
        alert("Không có sản phẩm trong danh sách")
    }
}
function nhapSP() {
    let idNhap = prompt("Nhập ID sản phẩm muốn nhập thêm")
    let soLuongNhap
    for (SP of products) {
        if (SP.id === idNhap) {
            bool = true
            soLuongNhap = parseInt(prompt("Nhập số lượng sản phẩm muốn nhập thêm"))
            if (soLuongNhap > 0) {
                SP.soLuong += soLuongNhap 
                alert("Nhập sản phẩm thành công")
            }
            else {
                alert("giá trị nhập vào không xác đinh")
            }
        }
        break
    }
    if (!bool) {
        alert("Không có sản phẩm trong danh sách")
    }
}
function tonKho() {
    
        let idKiemTra = prompt("Nhập ID sản phẩm muốn kiểm tra")
        for (SP of products) {
            if (SP.id === idKiemTra) {
                bool = true
                if (SP.soLuong === 0) {
                    alert("Hết hàng")
                }
                else {
                    alert("Còn hàng")
                }
            }
        }
        if (!bool) {
            alert("Không có sản phẩm trong danh sách")
        }
    }


