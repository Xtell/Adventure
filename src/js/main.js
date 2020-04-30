let html = document.querySelector("html");

let body = document.querySelector("body");
let popup = document.querySelector(".popup");
let popupButton = document.querySelector("#popup");
let closePopup = document.querySelector(".popup__close");

let mainNav = document.querySelector(".main-nav");
let mainNavToggle = document.querySelector(".main-nav__toggle");

let expandBlock = document.querySelector(".expand");
expandBlock.addEventListener("click", function() {
    let toggle = event.target.closest(".expand__toggle");
    if (toggle) {
        let expandItem = toggle.closest(".expand__item");
        expandItem.classList.toggle("expand__item--opened");
    }
});

mainNavToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    html.classList.toggle("show-main-menu");
});