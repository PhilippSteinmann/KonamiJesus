var jesus_url = "http://www.catholictradition.org/Classics/heart-jesus1.jpg";

function superImposeJesus() {
    var imageElement = document.createElement("img");
    imageElement.className = "jesus-image";
    imageElement.src = jesus_url;

    $("body").append(imageElement);

    $(".jesus-image").fadeIn(2000);
}

var fkeys=[];
var okeys=[74, 69,83,85,83,13];
window.addEventListener("keydown",checkPress);
var checkPress=function (k){
    clear();
    if (fkeys.length > okeys.length){
        fkeys=[];    
    }
    fkeys.push(k.keycode);
    if (fkeys.join("")==okeys.join("")){
        superImposeJesus();
    }
}
