function hienThiAnh() {
    let divHinh = document.getElementById("divHinh")
    divHinh.innerHTML = "<img src='Pic/sanPhamjfif' alt=''></img>"
    //tạo node mơi
    let nodeP = document.createElement("p")
    nodeP.innerHTML = "Sản phẩm mới"
    divHinh.appendChild(nodeP)
}
function dinhDangHinh() {
   let nodeClass = document.createAttribute("class")
   nodeClass.nodeValue = "anh_san--pham"

   let nodeHinh = document.querySelector("div#divHinh img")
   nodeHinh.setAttributeNode(nodeClass)
}
function themGioHang() {
    let gioHang = document.getElementById("gio-hang")
    gioHang.innerHTML = '<p>Tên sản phẩm</p>' 
                        + '<img src="Pic/sanPhamjfif" alt="">'
                        + '<button onclick = "xoaSanPham()" >Xóa sản phẩm</button>'
}
function xoaSanPham() {
    let nodeGioHang = document.getElementById("gio-h(ang")

    // nodeGioHang.innerHTML = ''
    while(nodeGioHang.hasChildNodes()) {
        nodeGioHang.removeChild(nodeGioHang.firstChild)
    }
}