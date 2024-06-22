//dùng phương thức getElementsByCLassName để
//truy cập các thành phần có class = "tieu-de"
let elementTieuDe = document.getElementsByClassName("tieu-de")

//truy cập thẻ h1 đầu tiên, lấy text
//Cách 1: truy cập bằng childNodes
let conTieuDe = elementTieuDe[0].childNodes
console.log(conTieuDe[0])
//truy cập name và value của node
console.log(conTieuDe[0].nodeName)
console.log(conTieuDe[0].nodeValue)

//Cách 2: innerHTML
console.log("InnerHTML: " + elementTieuDe[0].innerHTML)

//Cách 3: truy cập bằng tên node (tên text Node: textContent)
console.log("Tên node: " + elementTieuDe[0].textContent)

function suaTieuDe(){
    elementTieuDe[0].innerHTML = "Tiêu đề chính mới"
}

//Truy cập text của thẻ h1 thứ 2
//Cách 1:
console.log(elementTieuDe[1].innerHTML)
//Cách 2:
let nodeTieuDe2 = document.getElementById("tieu-de-phu")
console.log("Truy cập id: " + nodeTieuDe2.innerHTML)

//TRUY CẬP THUỘC TÍNH
//Ví dụ 1: truy cập thuộc tính của thẻ H1 thứ 2
let nodeThuocTinh = nodeTieuDe2.attributes  //trả về mảng
//in ra các name và value của các thuộc tính
//duyệt mảng
for (let thuocTinh of nodeThuocTinh){
    console.log(thuocTinh.nodeName)
    console.log(thuocTinh.nodeValue)
}

function suaIdTieuDe(){
    //truy cập bằng tên 
    nodeTieuDe2.id = "tieu-de-phu-moi"
}

let linkNode = document.querySelector("div#div-2 a")
console.log(linkNode.href)
