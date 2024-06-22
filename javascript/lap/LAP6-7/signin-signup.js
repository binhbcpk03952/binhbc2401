class Account {
    constructor(fullName, telPhone, email, password,) {
        this.fullName = fullName;
        this.telPhone = telPhone;
        this.email = email;
        this.password = password;
    }
}
function clearInput() {
    document.getElementsByClassName('form-control').value = ''
    document.getElementById('checkbox') = ''
}

function signIn() {
    // event.preventDefault();
    let fullName = document.getElementById('fullname').value;
    let telPhone = document.getElementById('telphone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('password-confirm').value;
    let check = document.getElementById('checkbox');

    let bool = true
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    // validate
    if (fullName.trim() === '') {
        document.querySelector('div.name p').innerHTML = 'Chưa nhập họ và tên.'
        bool = false
    }
    else if (fullName.length > 30) {
        document.querySelector('div.name p').innerHTML = 'Họ và tên không nhiều hơn 30 ký tự.'
        bool = false
    }

    if (telPhone.trim() === "") {
        document.querySelector('div.tel p').innerHTML = "Chưa nhập số điện thoại."
        bool = false
    }
    else if (telPhone.length !== 10 || telPhone[0] != "0") {
        document.querySelector('div.tel p').innerHTML = "Số điện thoại không hợp lệ."
        bool = false
    }

    if (email.trim() === "") {
        document.querySelector('div.email p').innerHTML = "Chưa nhập email."
        bool = false
    }
    else if (!regex.test(email)) {
        document.querySelector('div.email p').innerHTML = "Email không hợp lệ."
        bool = false
    }

    if (password.trim() === "") {
        document.querySelector('div.password p').innerHTML = "Chưa nhập mật khẩu."
        bool = false
    }
    else if (!regexPassword.test(password)) {
        document.querySelector('div.password p').innerHTML = "Mật khẩu chưa hợp lệ."
        bool = false
    }

    if (passwordConfirm.trim() === "") {
        document.querySelector('div.password-confirm p').innerHTML = "Chưa nhập mật khẩu xác nhận."
        bool = false
    }
    else if (password !== passwordConfirm) {
        document.querySelector('div.password-confirm p').innerHTML = "Mật khẩu và xác nhận mật khẩu không khớp."
        bool = false
    }
    if (!check.checked) {
        document.getElementById('checked').innerHTML = "Bạn phải đồng ý với điều khoản và điều kiện."
        bool = false
    }

    if (!bool) {
        // return
        return false;

    }
    
        let dsAcount = []
        let usersLocal = localStorage.getItem('users')
        
        if (!usersLocal) {
            let newUser = new Account(fullName, telPhone, email, password)
            dsAcount.push(newUser)
            localStorage.setItem('users', JSON.stringify(dsAcount))
            alert("Đăng kí tài khoản thành công")
            return true;
            
        }
        else {
            dsAcount = JSON.parse(usersLocal)
            const found = dsAcount.find((user) => user.email === email)
            if (found) {
                // document.querySelector('div.email p').innerHTML = "Email đã được sử dụng.";
                // return false;
                alert("Tài khoản đã tồn tại")
                clearInput()
                return false;
            }
            else {
                let newUser = new Account(fullName, telPhone, email, password)
                dsAcount.push(newUser)
                localStorage.setItem('users', JSON.stringify(dsAcount))
                alert("Đăng kí tài khoản thành công")
                return true;
            }
        }
}
document.addEventListener('DOMContentLoaded', function() {
    // Kiểm tra xem đã có thông tin người dùng được lưu từ trước hay không
    let savedUser = localStorage.getItem('savedUser');
    if (savedUser) {
        savedUser = JSON.parse(savedUser);
        // Điền thông tin người dùng vào các hộp input
        document.getElementById('email-login').value = savedUser.email;
        document.getElementById('password-login').value = savedUser.password;
        document.getElementById('checked-login').checked = true; // Đánh dấu checkbox "Lưu mật khẩu"
    }
});

function validateLogIn() {
    let bool = true
    let email = document.getElementById('email-login').value
    let password = document.getElementById('password-login').value

    if (email.trim() === "") {
        document.querySelector('div.email p').innerHTML = "Chưa nhập email."
        bool = false
    }

    if (password.trim() === "") {
        document.querySelector('div.password p').innerHTML = "Chưa nhập mật khẩu."
        bool = false
    }
    if (!bool) {
        return false;
    }

    const rememberCheckbox = document.getElementById('checkbox-login')
    const usersLocal = localStorage.getItem('users')

    if (rememberCheckbox.checked && usersLocal) {
        // Lưu thông tin người dùng vào Local Storage
        let savedUsers = JSON.parse(usersLocal);
        let userIndex = savedUsers.findIndex(user => user.email === email && user.password === password);
        if (userIndex !== -1) {
            localStorage.setItem('savedUser', JSON.stringify(savedUsers[userIndex]));
        }
    }

    if(usersLocal) {
        const dsAcount = JSON.parse(usersLocal)
        const found = dsAcount.find((user) => user.email === email && user.password === password ) 
        if (found) {
            // alert ('Đăng nhập thành công')
            location.href = 'index.html'
        }
        else {
            document.getElementById('not-succesful').innerText = "Tài khoản không tồn tại"
        }
    }

}