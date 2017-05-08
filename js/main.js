var height = 2.2;
var minHeight = 2.2;

function resize(){
    if (height > minHeight){
        height = minHeight;
        document.getElementById("navbar").style.maxHeight = height + "em";
    }
    else{
        height = 30;
        document.getElementById("navbar").style.maxHeight = height + "em";
    }
}
