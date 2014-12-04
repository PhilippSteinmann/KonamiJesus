window.addEventListener("keydown", checkPress);

var fkeys = [];
var okeys = [74, 69,83,85,83,13]; // J E S U S [Enter Key]

function checkPress(k) {
    if (fkeys.length > okeys.length){
        fkeys=[];    
    }
    fkeys.push(k.which);
    if (fkeys.join("")==okeys.join("")){
        superImposeJesus();
    }
}

var jesus_url = "http://www.catholictradition.org/Classics/heart-jesus1.jpg";
var jesus_currently_imposed = false;

function superImposeJesus() {
    if (jesus_currently_imposed)
        return;

    if (! jesusImageAlreadyLoaded()) {
        var imageElement = document.createElement("img");
        imageElement.className = "jesus-image";
        imageElement.src = jesus_url;
        $("body").append(imageElement);
    }

    $(".jesus-image").fadeIn(2000);
    jesus_currently_imposed = true;
    setTimeout(removeJesus, 4000);
}

function jesusImageAlreadyLoaded() {
    return !(document.querySelector(".jesus-image") == null)
}

function removeJesus() {
    $(".jesus-image").fadeOut(2000, function() {
        jesus_currently_imposed = false;
    } );
}
