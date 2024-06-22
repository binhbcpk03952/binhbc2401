//Xử lý Đăng Ký
class account {
    constructor(userN, email, pass){
        this.userN = userN
        this.email = email
        this.pass = pass
    }
}
// khai báo mảng chứa thông tin ư


function xuLyDangKy(){
    //Lấy dữ liệu người dùng nhập
    let userN = document.getElementById("username").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    //kiểm tra hợp lệ (validation)
    if(userN.trim()===""){
        alert("Chưa nhập tên đăng nhập")
        return;
    }
    if(userN.length <5){
        alert("Tên đăng nhập phải nhiều hơn 5 kí tự")
        return;
    }
    if(email.trim()===""){
        alert("Chưa nhập email")
        return;
    }
    if(pass.trim()===""){
        alert("Chưa nhập pass")
        return;
    }

    let regex =  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!regex.test(pass)){
        alert("Mật khẩu chưa hợp lệ")
        return;
    }
    let dsAcount = [];
    
    let usersLocal = localStorage.getItem('users')
    // chưa có tk
    if(!usersLocal) {
        let newUser = new account(userN, email, pass)
        dsAcount.push(newUser)
        localStorage.setItem("users", JSON.stringify(dsAcount))
        alert("Đăng kí tài khoản thành công")
    }
    // dã có tk
    else {
        dsAcount = JSON.parse(usersLocal)
        const found = dsAcount.find((user) => user.username === userN)
        if(found) {
            alert("Tài khoản đã tồn tại")
            return
        }
                //lưu tk vô localstorange
        
    }
}

function xyLyDangNhap() {
    let userN = document.getElementById("username").value
    let pass = document.getElementById("password").value

    if(userN.trim() === "" || pass.trim() === "" ) {
        alert("Chưa nhập username | password")
    }
    // đối chiếu trong localStorange

    const usersLocal = localStorage.getItem('users')
    if(usersLocal) {
        const dsAcount = JSON.parse(usersLocal)
        const found = dsAcount.find((user) => user.username === userN &&
        user.password === pass)
        if(found) {
            alert("đăng nhập thành công")
            location.href = "index.html"
        }
        else {
            alert("Tài khoản không tồn tại")
        }
    }
}

