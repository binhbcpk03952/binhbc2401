function initializeSlider(sliderContainer, dotContainer) {
    let currentIndex = 0;
    const slides = sliderContainer.querySelector('.slides');
    const dots = dotContainer.querySelectorAll('.dot');

    function updateDots(index) {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function showSlide(index) {
        if (index >= slides.children.length) {
            currentIndex = slides.children.length - 1;
        } else if (index < 0) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 1116;
        slides.style.transform = `translateX(${offset}px)`;
        updateDots(currentIndex);
    }

    function currentSlide(index) {
        showSlide(index);
    }
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index));
    });

    let isDown = false;
    let startX;
    let walk;
    let offset = 0;

    slides.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - offset;
        slides.classList.add('grabbing');
        slides.style.transition = 'none'; // Disable transition during drag
    });

    slides.addEventListener('mouseleave', () => {
        isDown = false;
        slides.classList.remove('grabbing');
        slides.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    });

    slides.addEventListener('mouseup', () => {
        isDown = false;
        slides.classList.remove('grabbing');
        slides.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
        if (Math.abs(walk) > slides.offsetWidth / 4) {
            if (walk < 0) {
                currentSlide(currentIndex + 1);
            } else {
                currentSlide(currentIndex - 1);
            }
        } else {
            showSlide(currentIndex);
        }
    });

    slides.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - offset;
        walk = x - startX;
        slides.style.transform = `translateX(${-currentIndex * slides.offsetWidth + walk}px)`;
    });

    // Initial display
    showSlide(currentIndex);
}

// Initialize both sliders
const slider1 = document.querySelector('#banner-index');
const slider1Dots = document.querySelector('#banner-index .dots');
initializeSlider(slider1, slider1Dots);

const slider2 = document.querySelector('.slider-text');
const slider2Dots = document.querySelector('.slider-text .dots');
initializeSlider(slider2, slider2Dots);