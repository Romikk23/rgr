function popup_open() {
    document.querySelector('.popup').style.display = 'flex';
}

function popup_close() {
    document.querySelector('.popup').style.display = 'none'
}

function popup_close_vid() {
    document.querySelector('.popup').style.display = 'none'
    alert("Коментар передано");
}