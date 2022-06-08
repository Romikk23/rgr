function find() {
    var pole = document.querySelector('#pole');

    let val = pole.value.trim();
    let el = document.querySelectorAll(".name");
    if (val != ' ') {
        el.forEach(function(elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('hide');
                var parent = elem.parentElement;
                parent.classList.add('hide');
            } else {
                elem.classList.remove('hide');
                var parent = elem.parentElement;
                parent.classList.remove('hide');
            }
        })
    }
}