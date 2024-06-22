let taoGiaTri = ''
let a = null, b = null, o = null
function toan_hang(value) {
    taoGiaTri += value
    document.getElementById("display").value = taoGiaTri
   
}
function lam_lai() {
    a = null;
    b = null;
    o = null;
    taoGiaTri = ""
    document.getElementById("display").value = taoGiaTri
}
function toan_tu(opera) {
    o = opera
    taoGiaTri += opera
    document.getElementById("display").value = taoGiaTri
}
function thuc_hien() {
    // taoGia Tri = ""
    let ketQ = eval(taoGiaTri)
    taoGiaTri = ketQ.toString()
    document.getElementById("display").value = taoGiaTri
}