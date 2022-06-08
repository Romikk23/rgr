const images = [
    "https://static.ukrinform.com/photos/2022_04/1649977268-320.jpg",
    "https://img.10ki.biz/img/22/620/620908DB7E49.jpg",
    "https://vinnytsia-museum.in.ua/images/exhibitions/2014/ukrainian_stamp_01.jpg"
]
var l = 0;

function change() {
    var element = document.getElementById("change-image");
    l = l - 1;
    /*  if(l==images.length-1){
        l=0;
    }  */
    if (l == -1) {
        l = images.length - 1;
    }
    console.log(l);
    element.setAttribute('src', images[l]);


}

function change2() {
    var element = document.getElementById("change-image");
    l = l + 1;
    if (l == images.length) {
        l = 0;
    }
    console.log(l);
    element.setAttribute('src', images[l]);
}