let taoGiaTri = ''
let a = null, b = null, o = null
function toan_hang(value) {
    if (a == null) {
        a += value
    }
    else {
        b += value
    }
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
    let ketQ 
    switch(o) {
        case '+':
            ketQ = a + b;
            break;
        case '-':
            ketQ = a - b;
            break;
        case '*':
            ketQ = a * b;
            break;
        case '/':
            ketQ = a / b;
            break;
    }
    taoGiaTri = ketQ.toString()
    document.getElementById("display").value = taoGiaTri
}