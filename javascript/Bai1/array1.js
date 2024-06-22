"use strict"
let array = [1, 3, 5, 6];

// create and delete array

// thêm xóa cuối mảng 
array.push(10);
array.push(8)
array.pop()
console.log(array)

// thêm xóa đầu mảng
array.unshift(12)
console.log(array)
array.shift()
console.log(array)

//thêm xóa giữa mảng
// splice(vị trí cần thêm/xóa; số lượng; các giá trị cần thêm ỏ xóa)
// Thêm
array.splice(2, 0, 8)
console.log(array)
array.splice(4, 0, 21,1,2)
console.log(array)


array.splice(3, 1)
console.log(array)

array.splice(4, 2)
console.log(array)

// vừa thêm vừa xóa
array.splice(1, 1, 9, 35)
console.log(array)