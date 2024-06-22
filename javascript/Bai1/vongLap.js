"use strict"
let fullName = "Bui Chi Binh";
let kiTu = 0;
for( let i of fullName){
    if(i === " "){
        continue;
    }
    console.log(i)
    ++kiTu;
}

console.log(kiTu)

let name1 = fullName.toLowerCase();
console.log(name1)

