let thongTin = JSON.parse(localStorage.getItem('SaveLogin'))
document.getElementById("username").value = thongTin.username
console.log(thongTin.username)
document.getElementById('fullname').value = thongTin.fullName
document.getElementById('telphone').value = thongTin.telPhone
document.getElementById('email').value = thongTin.email
document.getElementById('password').value = thongTin.password
document.getElementById('cccd').value = thongTin.cccd
document.getElementById('address').value = thongTin.addres

const inputElements = document.querySelectorAll('input.edit-form');
inputElements.forEach(input => {
    input.disabled = true;
});

function editAccount() {
    inputElements.forEach(input => {
        input.disabled = false;
    });
    document.getElementById('Save').style.display = 'block';
}

document.getElementById('Save').addEventListener('click', function () {
    thongTin.username = document.getElementById("username").value;
    thongTin.fullName = document.getElementById('fullname').value;
    thongTin.telPhone = document.getElementById('telphone').value;
    thongTin.email = document.getElementById('email').value;
    thongTin.password = document.getElementById('password').value;
    thongTin.cccd = document.getElementById('cccd').value;
    thongTin.address = document.getElementById('address').value;

    localStorage.setItem('SaveLogin', JSON.stringify(thongTin));

    inputElements.forEach(input => {
        input.disabled = true;
    });
    document.getElementById('Save').style.display = 'none';
    updateQlUsersFromSaveLogin()
});
function getLoggedInAccount() {
    const loggedInAccount = localStorage.getItem('SaveLogin');
    return loggedInAccount ? JSON.parse(loggedInAccount) : null;
  }

function updateQlUsersFromSaveLogin() {
    const loggedInAccount = getLoggedInAccount();
    if (loggedInAccount) {
        let qlusers = JSON.parse(localStorage.getItem('qlusers')) || [];

        // Kiểm tra xem tài khoản đăng nhập đã tồn tại trong danh sách qlusers chưa
        const existingIndex = qlusers.findIndex(user => user.username === loggedInAccount.username);
        if (existingIndex !== -1) {
            // Nếu tài khoản đã tồn tại, cập nhật thông tin
            qlusers[existingIndex] = loggedInAccount;
        }

        // Lưu lại danh sách qlusers đã cập nhật
        localStorage.setItem('qlusers', JSON.stringify(qlusers));
    }
}