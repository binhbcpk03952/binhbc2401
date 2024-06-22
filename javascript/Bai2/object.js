"use strict"
let danMeo = [];
let newWindow;

class meo{

    constructor(ten, canNang, mauLong, namSinh, gioiTinh){
        this.ten = ten
        this.canNang = canNang;
        this.mauLong = mauLong;
        this.namSinh = namSinh
        this.gioiTinh = gioiTinh
    }
    tinhTuoi(){
        let homNay = new Date();
        return homNay.getFullYear() -this.namSinh;
    }
}

function themMeo() {
    let ten = prompt("Nhập tên mèo: ")
    let canNang = prompt("Nhập cân nặng của mèo: ")
    let mauLong = prompt("Nhập màu lông: ")
    let namSinh = parseInt(prompt("Nhập năm sinh mèo: "))
    let gioiTinh = prompt("Nhập giới tính mèo: ")

    let meoMoi = new meo(ten, canNang, mauLong, namSinh, gioiTinh)
    danMeo.push(meoMoi)
}
function openWindow(){ 
    newWindow = window.open("", "myWindow", "width=700px, height=500px");
}
function xemMeo() {
    if(danMeo === 0) {
        alert("Chưa có mèo trong danh sách")
    } 
    else {
        openWindow();
        newWindow.document.write("<h2>Danh sách mèo</h2>")
        for(let meo of danMeo){
            newWindow.document.write("<p>" + meo.ten + "</p>")
        }
    }
}
let timDuoc = false
function thongTin() {
    let tencantim = prompt("Nhập tên mèo bạn cần tìm: ")
    for (let meo of danMeo) {
        if(meo.ten === tencantim) {
            timDuoc = true
            openWindow()
            newWindow.document.write("<h2>Thông tin mèo cần tìm</h2>")
            newWindow.document.write("<p>Tên: " + meo.ten + "</p>")
            newWindow.document.write("<p>Tên: " + meo.canNang + "</p>")
            newWindow.document.write("<p>Tên: " + meo.mauLong + "</p>")
            newWindow.document.write("<p>Tên: " + meo.namSinh + "</p>")
            newWindow.document.write("<p>Tên: " + meo.gioiTinh + "</p>")
            
        }
    }

}

















