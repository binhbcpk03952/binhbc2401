let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
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
}

let products = document.querySelectorAll('.product')

products.forEach(product => {
    product.addEventListener('mouseenter', () => {
        let addToCard = product.querySelector('.envent-mouse');
        let addFavorite = product.querySelector('.heart-position');
        addToCard.style.display = 'block';
        addFavorite.style.display = 'block';
    })
    product.addEventListener('mouseleave', () => {
        let addToCard = product.querySelector('.envent-mouse')
        let addFavorite = product.querySelector('.heart-position')
        addToCard.style.display = 'none'
        addFavorite.style.display = 'none'
    })
})



let shoppingCard = document.querySelectorAll('.envent-mouse')

shoppingCard.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#d26a1a'
        card.style.color = 'white'
    })
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = 'white'
        card.style.color = '#d26a1a'
    })
})
let hearts = document.querySelectorAll('.heart-position')

hearts.forEach(heart => {
    heart.addEventListener('mouseover', () => {
        heart.style.backgroundColor = '#d26a1a'
        heart.style.color = 'white'
    })
    heart.addEventListener('mouseout', () => {
        heart.style.backgroundColor = 'white'
        heart.style.color = '#d26a1a'
    })
})
