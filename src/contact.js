// form placeholder
let formWrap = document.querySelector(".contact-info-form form")
let formInput = document.querySelectorAll(".placeholder");
let placeholder = document.querySelectorAll(".placeholder span")

function removePlaceholderActive() {
    formInput.forEach((input, i) => {
        if (input.children[0].value != "") {
            placeholder[i].style.visibility = 'hidden';
        }
    })
    placeholder.forEach(i => {
        i.classList.remove("active");
    })
}

function addPlaceholderActive(i) {
    placeholder[i].classList.add("active")
    placeholder[i].style.visibility = 'visible';
    formInput[i].children[0].focus();

}

formWrap.addEventListener("click", function (e) {
    if (e.target.id == "input" || e.target.id == "span") {
        formInput.forEach((item, i) => {
            if (e.target.parentElement == item) {
                removePlaceholderActive();
                addPlaceholderActive(i);
            }
        })
    }
})

//form active
let activeFormBtn = document.querySelector(".contact-us-button");

activeFormBtn.addEventListener("click", function () {
    formWrap.classList.add("active");
    this.style.display = "none"
})