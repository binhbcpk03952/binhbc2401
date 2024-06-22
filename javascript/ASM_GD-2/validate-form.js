class Account {
    constructor(username,fullName, email, cccd, telPhone, addres, password) {
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.cccd = cccd;
        this.telPhone = telPhone;
        this.addres = addres
        this.password = password;
    }
}
function clearInput() {
    document.getElementsByClassName('form-control').value = ''
    document.getElementById('checkbox') = ''
}

function signIn() {
    // event.preventDefault();
    let username = document.getElementById("username").value
    let fullName = document.getElementById('fullname').value;
    let telPhone = document.getElementById('telphone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('password-confirm').value;
    let cccd = document.getElementById('cccd').value
    let addres = document.getElementById('address').value
    let check = document.getElementById('checkbox');

    let bool = true
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    // validate
    for(let i = 0; i < username.length; i++) {
        if (username[i] === ' ') {
            document.querySelector('div.username p').innerHTML = 'Username phải được viết liền không cách.'
            bool = false
        }
    }
    if(username.trim() === '') {
        document.querySelector('div.username p').innerHTML = 'Chưa nhập username.'
        bool = false
    }
    else if(username.length > 15) {
        document.querySelector('div.username p').innerHTML = 'Username không quá 15 kí tự.'
        bool = false
    }

    if(cccd.trim() === '') {
        document.querySelector('div.number-cccd p').innerHTML = 'Chưa nhập số căn cước công dân.'
        bool = false
    } else if (cccd.length !== 12) {
        document.querySelector('div.number-cccd p').innerHTML = 'Số căn cước công dân không hợp lệ.'
        bool = false
    }


    if(addres.trim() === '') {
        document.querySelector('div.address p').innerHTML = 'Chưa nhập địa chỉ.'
        bool = false
    }

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
        let usersLocal = localStorage.getItem('qlusers')
        
        if (!usersLocal) {
            let newUser = new Account(username, fullName, email, cccd, telPhone, addres, password)
            dsAcount.push(newUser)
            localStorage.setItem('qlusers', JSON.stringify(dsAcount))
            alert("Đăng kí tài khoản thành công")
            location.href = 'login-asm.html'
            return true;
            
        }
        else {
            dsAcount = JSON.parse(usersLocal)
            const found = dsAcount.find((user) => user.email === email || user.username === username)
            if (found) {
                // document.querySelector('div.email p').innerHTML = "Email đã được sử dụng.";
                // return false;
                alert("Tài khoản đã tồn tại")
                clearInput()
                return false;
            }
            else {
                let newUser = new Account(username, fullName, email, cccd, telPhone, addres, password)
                dsAcount.push(newUser)
                localStorage.setItem('qlusers', JSON.stringify(dsAcount))
                alert("Đăng kí tài khoản thành công")
                location.href = 'login-asm.html'
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
        document.querySelector('div.email p').innerHTML = "Chưa nhập username hoặc email."
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
    const usersLocal = localStorage.getItem('qlusers')
    const isSaveLogin = localStorage.getItem('SaveLogin')

    if (rememberCheckbox.checked && usersLocal) {
        // Lưu thông tin người dùng vào Local Storage
        let savedUsers = JSON.parse(usersLocal);
        let userIndex = savedUsers.findIndex(user => (user.email === email || user.username === email) && user.password === password);
        if (userIndex !== -1) {
            localStorage.setItem('savedUser-asm', JSON.stringify(savedUsers[userIndex]));
        }
    }
    if(usersLocal) {
        const dsAccount = JSON.parse(usersLocal);
        const foundIndex = dsAccount.findIndex(user => (user.email === email || user.username === email) && user.password === password);
    
        if (foundIndex !== -1) {
            const loggedInAccount = dsAccount[foundIndex];
            localStorage.setItem('SaveLogin', JSON.stringify(loggedInAccount));
            alert('Đăng nhập thành công');
            localStorage.setItem('isLogin', 'true');
            location.href = 'index-asm.html';
        } else {
            document.getElementById('not-succesful').innerText = "Tài khoản không tồn tại";
        }
    }

}

function getLoggedInAccount() {
    const loggedInAccount = localStorage.getItem('qluers');
    return loggedInAccount ? JSON.parse(loggedInAccount) : null;
  }
  
  // Sử dụng thông tin tài khoản đăng nhập
  const loggedInAccount = getLoggedInAccount();
  if (loggedInAccount) {
    console.log('Thông tin về tài khoản đang đăng nhập:', loggedInAccount);
    // Sử dụng thông tin tài khoản đã đăng nhập ở đây
  } else {
    console.log('Không có tài khoản đang đăng nhập!');
  }