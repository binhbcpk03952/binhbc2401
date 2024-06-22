"use strict"
// bai 1
function tinhCanhHuyen() {
    let a = parseFloat(prompt("Nhập cạnh a: "));
    let b = parseFloat(prompt("Nhập cạnh b: "));
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    alert("gia tri của canh huyen: " + c);
}

// bai 2
function doiDatDai(){
    let m = parseInt(prompt("Nhập số mét vuông: "));;; 
    let sao = (m * 10) / 3600;
    let mau = m / 3600;
    let ha = m / 10000;
    alert( m + " met vuong bang: " +  sao + " sao, " + mau + " mẫu, " + ha + " hecta");
}


// bai 3 
function chuyenDoiTuan(){

    let soTuan = parseInt(prompt("Nhập số tuần:"));
    let soThang = Math.floor(soTuan / 4);
    let soTuanLe = soTuan % 4;
    alert("Số tháng: " + soThang + " Và số tuần lẻ: " + soTuanLe);
}


// bai 4
function BMI(){
  
    let chieuCao = parseFloat(prompt("Nhập chiều cao của bạn (đơn vị là m): "));
    let canNang = parseFloat(prompt("Nhập cân nặng của bạn: "));
        
    let BMI = canNang / Math.pow(chieuCao, 2);
    alert("Chỉ số BMI của bạn là: " + BMI)
    
    if(BMI < 18.5){
        alert("Bạn đang thiếu cân");
    }
    else if(BMI < 25){
        alert("Bạn đang bình thường");
    }
    else if(BMI < 30){
        alert("Bạn đang thừa cân")
    }
    else{
        alert("Bạn đang béo phì")
    }
}

// bai 5
const theList = ['Lauren', 'Kevin', true, 35, null, undefined, ['one', 'two']];
console.log(theList)
theList.shift();
console.log(theList)
theList.pop();
console.log(theList)
theList.unshift('FIRST');
console.log(theList)
theList.splice(4, 0, 'hello world');
console.log(theList)
theList.splice(3, 0, 'middle');
console.log(theList)
theList.push('LAST');
console.log(theList)

// bài 6
function gameLap(){
    let min = 1;
    let max = 20
    let x = Math.floor(Math.random() * (max - min + 1)) + min
    let luotChoi = 3;
    while(true){
        let a = parseInt(prompt("Nhập số mà bạn muốn đoán"))
        if(a <= 20 && a >= 0) {
                      
            if(a === x){
                alert("Chúc mừng, bạn đã đoán đúng rồi")
                break
            }
            else if(a > x){
                alert("Giá trị của bạn lớn hơn số bí mật")
                luotChoi --;
            }
            else if( a < x){
                alert("Giá trị của bạn nhỏ hơn số bí mật")
                luotChoi -= 1;
            }
            if(luotChoi === 0){
                alert("Bạn đã hết lượt chơi")
                break
            }
            parseInt(prompt("Bạn còn " + luotChoi + " lượt chơi"))
        }
        else{
            alert("Số không hợp lệ, vui lòng nhập lại")
            // return 1;

        }
    }
}

