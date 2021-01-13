// Slider
let slides = document.querySelectorAll(".slider-info")
let dots = document.getElementsByClassName("slider-dots_item");
let slideIndex = 1;
let count = 1; // slider counter
currentSlide(1)
setInterval(function () { // repeat
    if (count >= slides.length) {
        count = 0;
    }
    count++;
    currentSlide(count);
}, 5000)

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    console.log(n)
    if (n > slides.length) {
        slideIndex = 1;
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
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

//noLink
function noLink(e) {
    e.preventDefault();
  };