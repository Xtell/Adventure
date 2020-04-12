//custom scripts
let html = document.querySelector("html");

let body = document.querySelector("body");
let popup = document.querySelector(".popup");
let popupButton = document.querySelector("#popup");
let closePopup = document.querySelector(".popup__close");

let mainNav = document.querySelector(".main-nav");
let mainNavToggle = document.querySelector(".main-nav__toggle");



mainNavToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    html.classList.toggle("show-main-menu");
});
// popupButton.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     togglePopup(popup);
// });
// closePopup.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     togglePopup(popup);
// });
// function lock(el) {
//     el.classList.add('lock');
// }
// function unlock(el) {
//     el.classList.remove('lock');
// }
// function togglePopup(popup) {
//     if (popup.classList.contains('popup--shown')) {
//         popup.classList.remove('popup--shown');
//         unlock(body);
//     }
//     else {
//         popup.classList.add('popup--shown');
//         lock(body);        
//     }
// }
