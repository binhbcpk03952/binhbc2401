class Account {
    constructor(id, fullName, email, password) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
}

// let btnLogin = document.querySelector('#btn-login');
// let btnRegister = document.querySelector('#btn-register');

document.querySelector('#btn-login').addEventListener('click', function () {
    document.querySelector('.all-form-login').style.display = 'block';
    document.querySelector('.all-form-register').style.display = 'none';
    btnLogin.classList.add('color-in');
    btnRegister.classList.remove('color-in')
});
document.querySelector('#btn-register').addEventListener('click', function () {
    document.querySelector('.all-form-login').style.display = 'none'
    document.querySelector('.all-form-register').style.display = 'block'
    btnLogin.classList.remove('color-in');
    btnRegister.classList.add('color-in')
});

function clearInput() {
    document.querySelectorAll('.inp-value').forEach(input => input.value = "");
}

document.getElementById('formLogin').addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('inp-email').value;
    let password = document.getElementById('inp-pass').value;
    bool = true;
    if (email.trim() === "") {
        document.querySelector('.error5').textContent = "Email is requied.";
        bool = false;
    }
    if (password.trim() === "") {
        document.querySelector('.error6').textContent = "Password is requied.";
        bool = false;
    }
    if (bool) {
        let users = JSON.parse(localStorage.getItem('users'));
        if (users) {
            const found = users.find(user => user.email === email && user.password === password);
            if (found) {
                localStorage.setItem('currentUserId', found.id);
                alert('Login successful!');
                clearInput();
                location.href = "index.html"; // Redirect to a dashboard or home page after successful login
            } else {
                alert('Invalid email or password.');
            }
        } else {
            alert('No users found. Please register first.');
        }
    }
});

document.getElementById('formRegister').addEventListener('submit', function (event) {
    event.preventDefault();
    let fullName = document.getElementById('inp-name').value;
    let email = document.getElementById('inp-email-regis').value;
    let password = document.getElementById('inp-pass-regis').value;
    let passConfirm = document.getElementById('inp-passcofirm').value;

    bool = true;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (fullName.trim() === "") {
        document.querySelector('.error1').textContent = "Name is requied.";
        bool = false;
    }
    if (email.trim() === "") {
        document.querySelector('.error2').textContent = "Email is requied.";
        bool = false;
    }
    else if (!regex.test(email)) {
        document.querySelector('div.email p').innerHTML = "Invalid email."
        bool = false
    }

    if (password.trim() === "") {
        document.querySelector('.error3').textContent = "Password is requied.";
        bool = false;
    }
    else if (!regexPassword.test(password)) {
        document.querySelector('.error3').innerHTML = "Password is not valid."
        bool = false
    }
    if (passConfirm.trim() === "") {
        document.querySelector('.error4').textContent = "Password Confirm is requied.";
        bool = false;
    }
    else if (password !== passConfirm) {
        document.querySelector('.error4').innerHTML = "Password confirm not the same password."
        bool = false
    }


    let users = localStorage.getItem('users');
    let id;
    let arrUsers = [];
    if (!users) {
        id = 1;
        let newAccount = new Account(id, fullName, email, password);
        arrUsers.push(newAccount);
        localStorage.setItem('users', JSON.stringify(arrUsers));
        clearInput();
        alert('Them tai khoan thanh cong');
        clearInput();
        location.href = "account.html";
    }
    else {
        arrUsers = JSON.parse(users)
        const found = arrUsers.find((user) => user.email === email)
        if (found) {
            alert("Tài khoản đã tồn tại");
            clearInput()
            return false;
        }
        else {
            if (arrUsers.length === 0) {
                id = 1;
            }
            else {
                id = arrUsers[arrUsers.length - 1].id + 1;
            }
            let newAccount = new Account(id, fullName, email, password);
            arrUsers.push(newAccount);
            localStorage.setItem('users', JSON.stringify(arrUsers));
            alert('Them tai khoan thanh cong');
            clearInput()
            location.href = "account.html";
        }
    }
});

let isLogin = localStorage.getItem('currentUserId');
if (!isLogin) {
    document.getElementById('form-register').style.display = 'block';
    document.getElementById('show-users').style.display = 'none';
}
else {
    document.getElementById('form-register').style.display = 'none';
    document.getElementById('show-users').style.display = 'block';
    let showName = document.getElementById('show-name');
    let showEmail = document.getElementById('inp-email-show');
    let users = JSON.parse(localStorage.getItem('users'));
    let idUser = JSON.parse(localStorage.getItem('currentUserId'));
    // console.log(users[3].fullName); 
    users = users.filter(user => user.id == idUser);
    showEmail.value = users[0].email;
    showName.value = users[0].fullName;
}

document.querySelector('.update-account').addEventListener('click', function () {
    location.href = "edit-account.html";
});
let users = JSON.parse(localStorage.getItem('users'));
let isId = JSON.parse(localStorage.getItem('currentUserId'));
console.log(isId);
users = users.filter(user => user.id == isId);
// console.log(users[0].email);

document.querySelector('.logout-account').addEventListener('click', function () {
    if (confirm('Bạn chắc chắn muốn đăng xuất tài khoản!')) {
        localStorage.removeItem('currentUserId');
        location.href = "account.html";
    }
});
let nameAccount = document.getElementById('name-account')

// console.log(user[0].fullName);
if (isId) {
    let user = users.filter(user => user.id == isId);
    nameAccount.textContent = user[0].fullName;
}
else {
    nameAccount.textContent = "";
}


document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.getElementById('menu-toggle');
    var navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });
});