var height = 2.2;
var minHeight = 2.2;
var maxHeight = 11;

function resize(){
    if (height < maxHeight){
        height = maxHeight;
        document.getElementById("navbar").style.height = height + "em";
    }
    else{
        height = minHeight;
        document.getElementById("navbar").style.height = height + "em";
    }
}
