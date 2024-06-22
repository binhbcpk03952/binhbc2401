// Khai báo biến 

/*var a = 10;
var b = 12;
var chuVi = (a + b) * 2;
console.log(chuVi)
if(chuVi % 2 == 0){
    console.log('ket qua la so chan');
}
else{
    console.log('ket qua la so le');
}*/

/*var firstName = 'Bui';
var lastName = 'Chi Binh';
var fullName = firstName + ' ' + lastName;
// console.log(fullName);
console.log('độ dài của tên là: ' + fullName.length);
console.log('Ki tự cuối cùng của chuỗi là: ' + fullName[fullName.length - 1]);
for(var i = 0; i < fullName.length; i++){
    console.log(fullName[i])
}
*/

let number = [3, 2, 3, 4, 5, 6];
// for(var i = 0; i < number.length; i++){
//     console.log(number[i])
// }
let bienDem = 0;
for(let i = 0; i < number.length; i++){
    if(number[i] == 3){
        ++bienDem
    }
}
console.log(bienDem)
