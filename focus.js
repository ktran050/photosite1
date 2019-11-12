let showFocus = true;

function focusBackground(){
    console.log(showFocus);
    if(showFocus){
        document.getElementById("background").style.zIndex = 10;
        document.getElementById("focusButton").style.zIndex = 11;
        document.getElementById("background").style.filter = "blur()";
        console.log("no blur");
        showFocus = false;
    }
    else{
        document.getElementById("background").style.zIndex = -1;
        document.getElementById("focusButton").style.zIndex = 11;
        document.getElementById("background").style.filter = "blur(4px)";
        console.log("blur");
        showFocus = true;
    }
    return;
}