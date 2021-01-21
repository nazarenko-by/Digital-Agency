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

//tabs
let tabsWrap = document.querySelector(".tab-title-items")
let tabItem = document.querySelectorAll(".tab-title-item");
let tabContents = document.querySelectorAll(".tab-content");

function hideTabsContent(){
    tabContents.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show")
        
    })
    tabItem.forEach(item => {
        item.classList.remove("active")
    })
}

function showTabsContent(i = 0){
    tabContents[i].classList.add("show")
    tabContents[i].classList.remove("hide")
    tabItem[i].classList.add("active")
}

hideTabsContent()
showTabsContent()

tabsWrap.addEventListener("click", function(e){
    let target = e.target;
    if(target.classList.contains("tab-title-item")){
        tabItem.forEach((item,i) => {
            if(target == item){
                hideTabsContent()
                showTabsContent(i)
            }
        })
    }
})