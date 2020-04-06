//custom scripts

let body = document.querySelector("body");
let popup = document.querySelector(".popup");
let popupButton = document.querySelector("#popup");
let closePopup = document.querySelector(".popup__close");
console.log(body.classList)

popupButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    togglePopup(popup);
});
closePopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    togglePopup(popup);
});
function lock(el) {
    el.classList.add('lock');
}
function unlock(el) {
    el.classList.remove('lock');
}
function togglePopup(popup) {
    if (popup.classList.contains('popup--shown')) {
        popup.classList.remove('popup--shown');
        unlock(body);
    }
    else {
        popup.classList.add('popup--shown');
        lock(body);        
    }
}
