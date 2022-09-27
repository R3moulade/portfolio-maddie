let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
let writingpopup = document.getElementById("writing-popup");
function openWritingPopup() {
    writingpopup.classList.add("open-popup");
}
let otherpopup = document.getElementById("other-popup");
function openOtherPopup() {
    otherpopup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup")
}
function closeWritingPopup() {
    writingpopup.classList.remove("open-popup")
}
function closeOtherPopup() {
    otherpopup.classList.remove("open-popup")
}