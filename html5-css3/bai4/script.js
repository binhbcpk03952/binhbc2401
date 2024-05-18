class Account {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }
}

function addAccount() {
    let username = document.querySelector('#username')
    let email = document.querySelector('#username')
    let password = document.querySelector('#username')
    let error = document.querySelectorAll('error')
    let bool = true
    let regex1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (username.trim() === "") {
        error[0].innerHTML = "Ban chua nhap Username."
        bool = false
    }
    else if (username.length < 5) {
        error[0].innerHTML = "Tên đăng nhập có ít nhất 5 kí tự."
        bool = false
    }

    if (email.trim() === "") {
        error[1].innerHTML = "Ban chua nhap Email."
        bool = false
    }
    if(password.trim() === "") {
        error[1].innerHTML = "chưa nhập password."
        bool = false
    }
    if (regex1.test(password)) {
        error[1].innerHTML = "password không hợp lệ."
        bool = false
    }

    if (!bool) {
        // return
        return false;
    }
    let 
}