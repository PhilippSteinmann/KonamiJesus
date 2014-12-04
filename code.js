document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener("keydown", checkPress);
});

var fkeys=[];
var okeys=[74, 69,83,85,83,13];

function checkPress(k) {
    clear();
    if (fkeys.length > okeys.length){
        fkeys=[];    
    }
    fkeys.push(k.keycode);
    console.log(fkeys);
    if (fkeys.join("")==okeys.join("")){
        superImposeJesus();
    }
}

var jesus_url = "http://www.catholictradition.org/Classics/heart-jesus1.jpg";

function superImposeJesus() {
    var imageElement = document.createElement("img");
    imageElement.className = "jesus-image";
    imageElement.src = jesus_url;

    $("body").append(imageElement);

    $(".jesus-image").fadeIn(2000);
}
