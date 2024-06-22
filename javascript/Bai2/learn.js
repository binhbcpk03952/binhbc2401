"use strict"
let name1;

function chaoHoi(){
    alert("bây  giờ là: " + Date())
}
function lamQuen(){
    name1 = prompt("Bạn tên gì?")
    if(name1){
        alert("Hân hạnh được làm quen với " + name1)
    }
    else{
        alert("Vui lòng nhập tên !")
    }
}
function tinhTong(){
    let a = prompt("Nhập giá trị a:")
    let b = prompt("Nhập giá trị b:")
    alert("Tổng của a và b là: " +(Number(a) + Number(b)))
}

function xacNhan(){
    if(typeof name1 === "undefined"){
        alert("Bạn chưa nhập tên ở bước hai")
    }
    else{
        let ketQua = confirm("Bạn tên là " + name1 + " phải không" )
        if(ketQua){
            alert("cảm ơn " + name1 + " đã xác nhận")
        }
        else{
            while(true){
                name1 = prompt("xin nhập lại tên chính xác")
                if(name1.trim() === ""){
                    alert("tên chưa hợp lệ. Cần nhập ít nhất một giá trị.")
                }
                else{
                    alert("Tên vừa nhập là " + name1)
                    break
                }
            }
        }
    }
}

function keoHinh(){
    alert("hihahehe")
}
// 
let newWindow;
function openWindow(){ 
    newWindow = window.open("", "myWindow", "width=500px, height=300px");
}

function inThongTin(){
    openWindow();
    newWindow.document.write("<h2>Xác nhận đăng kí thành công</h2>")
    newWindow.document.write(" <p>Tên tìa khoản của bạn là: " + name1 + "</p>")

}
    class Meo{
        //hàm tạo
        constructor(ten,canNang,mau,namSinh,tiengKeu){
            //thuộc tính = giá trị tham số
            //tenMeo = ten; 
            this.ten = ten;
            this.canNang = canNang;
            this.mau = mau;
            this.namSinh = namSinh;
            this.tiengKeu = tiengKeu;
            this.quocTich = "Viet Nam";
        }
        //hàm chức năng
        keu(){
            return this.tiengKeu;
        }
    }



