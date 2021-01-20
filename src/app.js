//noLink
function noLink(e) {
    e.preventDefault();
};

//mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu-items");
let firstLevelMenu = document.querySelectorAll(".first-level")

function openCloseMobileMenu() {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu")
        firstLevelMenu.forEach((btn) => {
            if (btn.lastElementChild.classList.contains("active-menu")) {
                btn.lastElementChild.classList.remove("active-menu");
            }
        })
    }
}

mobileMenu.addEventListener("click", openCloseMobileMenu)

firstLevelMenu.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        btn.lastElementChild.classList.toggle("active-menu");
    })
})