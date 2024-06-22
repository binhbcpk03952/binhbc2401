"use strict"

let meo = {
    nameCat: "mun",
    weight: 2,
    color: "black",
    age: 3,
    keu: function(){
        return "meo meo"
    }
}

meo.age = 1
console.log("Tuổi của mèo đen là: " + meo.age)
console.log("mèo đen kêu: " + meo.keu())

