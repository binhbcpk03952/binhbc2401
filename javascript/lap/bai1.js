let soLuong = 1;

function updateQuantityValue(value) {
    // Kiểm tra giá trị nhập vào và gán vào biến soLuong
    soLuong = parseInt(value);
    // Đảm bảo số lượng không nhỏ hơn 1
    if (soLuong < 1 || isNaN(soLuong)) {
        soLuong = 1;
    }
    // console.log("Giá trị số lượng mới: ", soLuong);
}


function plussQuantity(n) {
    soLuong += n;
    if (soLuong < 1) {
        soLuong = 1;
    }
    document.getElementById('quantity').value = soLuong;
    // console.log(typeof soLuong) 
}

let openWin = document.getElementById('openWindow');

let contentHeading = document.querySelector('div.card h1').textContent;
let contentP = document.querySelector('div.card p').textContent;
let contentLabel = document.querySelector('div.card label').textContent;


function buyProduct() {
    let priceProduct = 19.99;
    let priceTem = priceProduct * soLuong;
    let taxProduct = priceTem * 0.1;
    let allPrice = taxProduct + priceTem;
    openWin.innerHTML = "";
    openWin.innerHTML += `<p><b>Tên sản phẩm: </b>${contentHeading}</p>`;
    openWin.innerHTML += "<p><b>Giá bán lẻ: </b>" + contentP + "</p>";
    openWin.innerHTML += "<p><b>" + contentLabel + ": </b>" + soLuong + "</p>";
    openWin.innerHTML += "<p><b>Tạm tính: </b> $" + priceTem.toFixed(2) + "</p>";
    openWin.innerHTML += "<p><b>Thuế (10%): </b> $" + taxProduct.toFixed(2) + "</p>";
    openWin.innerHTML += "<p><b>Tổng cộng: </b> $" + allPrice.toFixed(2) + "</p>";
}

let windowP = document.querySelector('div#openWindow2')
let windowR = document.querySelector('div.win-game')
let windowL = document.querySelector('div.loss-game')
let inputField = document.getElementById('game-number')
let error = document.getElementById('error')
// console.log(x)

let min = 1;
let max = 10;
function kiemTraSo() {
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let x = Number(inputField.value)
    
    if (isNaN(x) || x > max || x < min || x.length === 0) {
        error.innerHTML = "Vui lòng chỉ nhập số từ 1 - 10";
        error.style.color = 'red'
        return
    }
    else {
        if (x === y) {
            windowP.style.display = 'none'
            windowR.style.display = 'block'
        }
        else {
            windowP.style.display = 'none'
            windowL.style.display = 'block'
            document.querySelector('div.loss-game p').innerText = "Số bí mật là: " + y
        }
    }

}
function reLoadGame() {
    windowR.style.display = 'none'
    windowL.style.display = 'none'
    windowP.style.display = 'block'
    windowP.style.textAlign = 'center';
    inputField.value = ''
    error.innerHTML = ''
}
let luotDau = 'X'
let game = ['', '', '', '', '', '', '', '', '']
let flag = false

function danhDau(index) {
    if (!flag && game[index] === "") {
        game[index] = luotDau;
        let button = document.getElementsByClassName('btn')[index]
        button.innerText = luotDau
        gamecheck();
        luotDau = luotDau === 'X' ? 'O' : 'X';
        button.style.backgroundColor = luotDau === 'X' ? 'yellow' : 'aqua'
        
    }
//     let button = document.querySelector('#tic-tac-toe button:nth-child(' + (index + 1) + ')');

//     button.innerText = flag ? "X" : "O";
//     button.style.backgroundColor = flag ? "aqua" : "yellow"
//     button.setAttribute("disabled", "true");
// // đảo cờ để lần sau hiển thị nhãn và màu nền khác
//     flag = !flag;
}
function gamecheck() {
    const checkGameWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let check of checkGameWin) {
        const [a, b, c] = check
        if (game[a] !== '' && game[a] === game[b] && game[a] === game[c]) {
            flag = true
            document.getElementById('message').innerText = `${luotDau} thắng`
            break
        }
    }

    if (!game.includes('') && !flag) {
        document.getElementById('message').innerText = "Kết quả hòa"
        flag = true
    }
}

function restartGame() {
    luotDau = 'X'
    game = game = ['', '', '', '', '', '', '', '', '']
    flag = false
    let btn = document.getElementsByClassName('btn')
    for (let btns of btn) {
        btns.innerText = ''
        btns.style.backgroundColor = '#EFEFEF'
        btns.style.border = '1px solid black'
    }
    document.getElementById('message').innerText = ''
}

