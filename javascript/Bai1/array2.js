"use strict"
let array = [3, "Binh", 9.9, 2, 3, 10];

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
// vòng lặp for each
/*
for(let giaTri of array){
    console.log(giaTri)
}
let bienDem = 0;
for(let giaTri of array){
    if(giaTri == 3){
        ++bienDem
    }
}
console.log(bienDem)
*/

//  let diem = 5
//  let hanhKiem = "tốt"
// if(diem >= 5 && hanhKiem == 'tốt'){
//     console.log("bạn đủ điều kiện tốt nghiệp")
// }
// else{
//     console.log("bạn không đủ điều kiện để tốt nghiệp")
// }

// function
// function myFuncion(a, b){
//     return a ** b;
// }
// let deMo = myFuncion(2, 3);
// document.getElementById("demo").innerHTML = "đáp án của bài toán " + deMo

// object
// const person = {
//     firstName: "Bui",
//     lastName : "Binh",
//     age: 19,
//     fullName : function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
// document.getElementById("demo1").innerHTML = `Tuổi của Chí Bình ${person.age}`



// var inputValue = prompt("Nhập giá trị:");

// // In giá trị nhập vào console
console.log("Giá trị bạn đã nhập là: " + inputValue);

document.addEventListener("keydown", function(event) {
    // Kiểm tra xem phím nào đã được nhấn
    if (event.key === "Enter") {
      // Lấy giá trị từ trường input có id là "inputField"
      var inputValue = document.getElementById("inputField").value;
      
    // let soNgay = inputValue
    // let soTuan = Math.floor(soNgay / 7)
    // let soNgayLe = soNgay % 7

    // document.getElementById('demo').innerHTML = ("số tuần: " + soTuan)
    // document.getElementById('demo1').innerHTML = ("số ngày lẻ: " + soNgayLe)




      // In giá trị đã nhập vào console
    document.getElementById('demo2').innerHTML = ("Giá trị bạn đã nhập là: " + inputValue);
    }
  });








