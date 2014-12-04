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
        //do Jesus stuff
    }
}