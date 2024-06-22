"use strict"

let ketQua;
function phepToan() {
    let a = Number(prompt("Nhập số thứ nhất"));
    let b = Number(prompt("Nhập số thứ hai"));
    let toantu = prompt("Phép toán cần thực hiện");
    
    if (typeof a === 'number' && typeof b === 'number') {
        switch(toantu) {
            case '+':
                ketQua = a + b;
                break;
            case '-':
                ketQua = a - b;
                break;
            case '*':
                ketQua = a * b; 
                break;
            case '/':
                ketQua = a / b;
                break;
            default:
                ketQua = 'Invalid operator';
        }
        alert(ketQua);
    } else {
        alert("Vui lòng nhập lại hai số");
    }
}


function buaBaoKeo() {

    alert (luaChon[x])

}
function suLuaChon(num) {
    let luaChon = ["Búa", "Bao", "Kéo"];
    let min = 0;
    let max = 2;
    let x = Math.floor(Math.random() * (max - min + 1)) + min
   switch (num) {
    case 0:
        if(luaChon[x] === "Búa") {
            alert("Máy ra " + luaChon[x] + ", Kết quả hòa")
        }
        else if(luaChon[x] === "Bao") {
            alert("Máy ra " + luaChon[x] + ", Bạn đã thua")
        }
        else{
            alert("Máy ra " + luaChon[x] + ", Bạn đã thắng")
        }
        break;
    case 1:
        if(luaChon[x] === "Búa") {
            alert("Máy ra " + luaChon[x] + ", Bạn đã thắng")
        }
        else if(luaChon[x] === "Bao") {
            alert("Máy ra " + luaChon[x] + ", Kết quả hòa")
        }
        else{
            alert("Máy ra " + luaChon[x] + ", Bạn đã thua")
        }
        break;
    case 2:
        if(luaChon[x] === "Búa") {
            alert("Máy ra " + luaChon[x] + ", Bạn đã thua")
        }
        else if(luaChon[x] === "Bao") {
            alert("Máy ra " + luaChon[x] + ", Bạn đã thắng")
        }
        else{
            alert("Máy ra " + luaChon[x] + ", Kết quả hòa")
        }
        break;
   }
}



// Bai 5
let danhsach = document.getElementById("openWindow")
let sinhVien = [];
let newWindow;
let hocLuc;
let bangKhen;   
let timDuoc = false

class sVien {
    constructor (masoSV, tenSV, diem, hocLuc) {
        this.masoSV = masoSV;
        this.tenSV = tenSV;
        this.diem = diem;
        this.hocLuc = hocLuc;
    }
}


function themSinhVien() {
    while (true) {
        let masoSV = prompt("Nhập mã số sinh viên ");
        let tenSV = prompt("Nhập tên sinh viên: ");
        let diem = parseFloat(prompt("Nhập điểm sinh viên: "));

        if ( isNaN(diem) || diem < 0 || diem > 10) {
            alert("Điểm sinh viên không hợp lệ vui lòng nhập lại")
            continue;
        }

        if (masoSV.length === 0 || tenSV.length === 0) {
            alert("Giá trị nhập vào không hợp lệ, Vui lòng nhập lại");
            continue;
        } 
        else {
            if (diem < 5) {
                hocLuc = "Yếu";
            } 
            else if (diem < 6) {
                hocLuc = "Trung Bình";
            } 
            else if (diem < 8) {
                hocLuc = "Khá";
            } 
            else {
                hocLuc = "Giỏi";
            }

            let sinhVienMoi = new sVien(masoSV, tenSV, diem, hocLuc);
            sinhVien.push(sinhVienMoi);
            alert("Đã thêm sinh viên thành công")
            break;
        }
    }

}

function openWindow(){ 
    newWindow = window.open("", "myWindow", "width=700px, height=500px");
}

function xemSV() {
    if (sinhVien.length === 0) {
        alert("Chưa có sinh viên trong danh sách");
    }
    else {
        danhsach.innerHTML = ""
        danhsach.innerHTML += "<h2>Danh sách sinh viên</h2>"
        for(let sV of sinhVien){
            danhsach.innerHTML += "<p>" + sV.masoSV + "</p>"
        }
    }
}

function thongTin() {
    let timSV = prompt("Nhập mã số sinh viên cần tìm: ")
    danhsach.innerHTML = ""
    for (let sV of sinhVien) {
        if (sV.masoSV === timSV) {
            timDuoc = true
            
            danhsach.innerHTML += "<h2>Thông tin sinh viên cần tìm</h2>"
            danhsach.innerHTML += "<p>MSSV: " + sV.masoSV + "</p>"
            danhsach.innerHTML += "<p>Tên: " + sV.tenSV + "</p>"
            danhsach.innerHTML += "<p>Điểm: " + sV.diem + "</p>"
            danhsach.innerHTML += "<p>Học lực: " + sV.hocLuc + "</p>"
            break   
        }
       
    }
    if (!timDuoc) {
        alert("Không có sinh viên trong danh sách ")
    }
}

function xoaSinhVien() {
    let x = prompt("Nhập mã sinh viên muốn xóa");

    for(let i = 0; i < sinhVien.length; i++) {
        if(sinhVien[i].masoSV == x){
            timDuoc = true
            sinhVien.splice(i, 1);
        }
    }
    if (timDuoc) {
        alert("Đã xóa sinh viên thành công");
    } 
    else {
        alert("Không tìm thấy sinh viên có mã số " + x);
    }
}

// Sửa điểm
function suaDiem() {
    let sVsuadiem = prompt("Nhập mã số sinh viên cần sửa điểm")
    
    for(let i = 0; i < sinhVien.length; i++) {
        if(sinhVien[i].masoSV == sVsuadiem){
            timDuoc = true
            let soDiem = Number(prompt("Nhập số điểm cần sửa"))
            if(soDiem <= 10 && soDiem >= 0 ) {
                sinhVien[i].diem = soDiem
                    if(sinhVien[i].diem < 5) {
                        sinhVien[i].hocLuc = "Yếu"
                    }
                    else if (sinhVien[i].diem < 6) {
                        sinhVien[i].hocLuc = "Trung Bình"
                    }
                    else if (sinhVien[i].diem < 8) {
                        sinhVien[i].hocLuc = "Khá"
                    }
                    else {
                        sinhVien[i].hocLuc = "Giỏi"
                    }
            }
            else {
                alert("số điểm không hợp lệ")
            }
        }
        break
    }
    if(!timDuoc) {
        alert("Không tìm thấy sinh viên có mã số " + sVsuadiem);
    }
}
function traoBang() {
    for (let SV of sinhVien){
        if (SV.hocLuc === "Giỏi") {
            timDuoc = true;
            bangKhen = "Vàng";
        }
        else if (SV.hocLuc === "Khá") {
            timDuoc = true;
            bangKhen = "Bạc"
        }
        
        // break;
    }
    if(!timDuoc) {
        alert("Không co sinh viên nào đươc khen thưởng")
    }
    else{
        alert("Đã trao bằng khen cho sinh viên")
    }
}
function danhSach() {
    danhsach.innerHTML = ""
    for (let SV of sinhVien) {
        if (bangKhen === "Vàng" || bangKhen === "Bạc") {
            timDuoc = true;
            danhsach.innerHTML = '<button onclick="bangKhenVang()">Bằng khen Vàng</button>' 
                               + '<button onclick="bangKhenBac()">Bằng khen Bạc</button>'
                               + '<div id="openList"></div>'
        }
    }
    if(!timDuoc) {
        alert("Không có sinh viên nào được trao bằng khen")
    }  
} 
function bangKhenVang() {
    let openList = document.getElementById("openList")
    openList.innerHTML = ""
    openList.innerHTML += "<h3>Danh sách sinh viên có bằng khen Vàng</h3>"
    for (let SV of sinhVien) {
        if(bangKhen === "Vàng") {
            openList.innerHTML += `<p>Tên: ${SV.tenSV}</p>`
        }
    }
}
function bangKhenBac() {
    let openList = document.getElementById("openList")
    openList.innerHTML = ""
    openList.innerHTML += "<h3>Danh sách sinh viên có bằng khen Bạc</h3>"
    for (let SV of sinhVien) {
        if(bangKhen === "Bạc") {
            openList.innerHTML += `<p>Tên: ${SV.tenSV}</p>`
        }
    }
}












