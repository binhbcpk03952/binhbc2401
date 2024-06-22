// let inputField1 = document.getElementById

function tinhTong() {
    // let so1 = Number(document.getElementById("inputValue1").value)
    // let so2 = Number(document.getElementById("inputValue2").value)
    // let tong = so1 + so2

    
    let tong = 0
    let input = document.querySelectorAll("div#tong input")

    for (let so of input) {
        tong += Number(so.value)
    }

    let KQ = document.getElementById("ketQua")
    KQ.innerHTML = tong
}

function clicks(image) {
    let srcImage = image.getAttribute("src")
    document.getElementById("display").innerHTML = '<img src="' + srcImage + '" alt="" class="hinhLon">'
}