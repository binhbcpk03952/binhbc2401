let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    // startAutoSlider()
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
let slideInterval
function startAutoSlider() {
    slideInterval = setInterval(function () {
        plusSlides(1)
    }, 5000)
}
function stopAutoSlider() {
    clearInterval(slideInterval)
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    // nếu n lớn hơn số lương slider thì cho n quay về ban đầu bằng 1
    if (n > slides.length) {
        slideIndex = 1
    }
    // nếu n nhỏ hơn 1 thì cho n bằng số lượng slider và slider trở về cuối
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    // const myTimeOut = setTimeout(plusSlides, 2000)
}
startAutoSlider()

function addImageText() {
    let form = document.querySelector('.add-img-text')
    form.style.display = 'block'
}

function add() {
    let Heading1 = document.getElementById('Heading1').value
    let addImg = document.getElementById('add-Image').value
    let addHeading = document.getElementById('add-Heading').value

    if(Heading1.trim() === "") {
        document.getElementById('error-Heading1').innerHTML = 'Chưa nhập dữ liệu.'
    }

    if (addImg.trim() === "") {
        document.getElementById('error-img').innerHTML = 'Chưa nhập dữ liệu.'
    }
    if (addHeading.trim() === "") {
        document.getElementById('error-heading').innerHTML = 'Chưa nhập dữ liệu.'
    }
    else {
        let print = document.querySelector('.content-2')
        print.innerHTML = `
        <h1>${Heading1}</h1>
        <img src="${addImg}" alt="">
        <h2>${addHeading}</h2>
        `
        print.style.display = 'block'
        let form = document.querySelector('.add-img-text')
        form.style.display = 'none'

    }

}

function editColor(){
    let edit = document.querySelector('div.content-2 h2')

    edit.style.color = 'blue'
    const flashingText = document.querySelector('div.content-2 h1');

function flash() {
    setTimeout(() => {
        flashingText.style.color = "blue"; // Thay đổi màu thành xanh
        setTimeout(() => {
            flashingText.style.color = "green"; // Thay đổi màu thành xanh lá cây
            setTimeout(() => {
                flashingText.style.color = "red"; // Thay đổi màu thành đỏ
            }, 500); // Thời gian mỗi màu hiển thị là 500ms
        }, 500);
    }, 500);
}

setInterval(flash, 1500);
}
class Account {
    constructor(fullName, age, telPhone, email) {
       
        this.fullName = fullName;
        this.age = age
        this.telPhone = telPhone;
        this.email = email;
    }
}

function addAcount() {
    let fullName = document.getElementById('fullname').value
    let age = document.getElementById('age').value
    let telPhone = document.getElementById('telphone').value
    let email = document.getElementById('email').value
    let check = document.getElementById('checkbox')
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regex1 = /^(1[89]|[2-9]\d+)$/
    let bool = true

    if (fullName.trim() === '') {
        document.querySelector('p.error-1').innerHTML = 'Chưa nhập họ và tên.'
        bool = false
    }
    else if (fullName.length > 50) {
        document.querySelector('p.error-1').innerHTML = 'Họ và tên không nhiều hơn 50 ký tự.'
        bool = false
    }

    if (telPhone.trim() === "") {
        document.querySelector('p.error-3').innerHTML = "Chưa nhập số điện thoại."
        bool = false
    }
    else if (telPhone.length !== 10 || telPhone[0] != "0") {
        document.querySelector('p.error-3').innerHTML = "Số điện thoại không hợp lệ."
        bool = false
    }

    if (email.trim() === "") {
        document.querySelector('p.error-4').innerHTML = "Chưa nhập email."
        bool = false
    }
    else if (!regex.test(email)) {
        document.querySelector('p.error-4').innerHTML = "Email không hợp lệ."
        bool = false
    }
    if (!check.checked) {
        document.getElementById('checked').innerHTML = "Bạn phải đồng ý với điều khoản và điều kiện."
        bool = false
    }

    if (age.trim() === "") {
        document.querySelector('p.error-2').innerHTML = "Chưa nhập số tuổi."
        bool = false
    }
    else if(!regex1.test(age)) {
        document.querySelector('p.error-2').innerHTML = "Cần trên 18 tuổi."
        bool = false
    }

        

    if (!bool) {
        // return
        return false;
    }

    let dsAcount = []
        let usersLocal = localStorage.getItem('Userss')
        
        if (!usersLocal) {
            let newUser = new Account(fullName, age, telPhone, email)
            dsAcount.push(newUser)
            localStorage.setItem('Userss', JSON.stringify(dsAcount))
            alert("Đăng kí tài khoản thành công")
            // location.href = 'login-asm.html'
            return true;
            
        }
        else {
            dsAcount = JSON.parse(usersLocal)
            const found = dsAcount.find((user) => user.email === email)
            if (found) {
                // document.querySelector('div.email p').innerHTML = "Email đã được sử dụng.";
                // return false;
                alert("Tài khoản đã tồn tại")
                // clearInput()
                return false;
            }
            else {
                let newUser = new Account(fullName, age, telPhone, email)
                dsAcount.push(newUser)
                localStorage.setItem('Userss', JSON.stringify(dsAcount))
                alert("Đăng kí tài khoản thành công")
                // location.href = 'login-asm.html'
                return true;
            }
        }


}


