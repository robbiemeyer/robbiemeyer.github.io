function resize(elem, minHeight){
    var height = elem.style.maxHeight.replace(/\D+$/,"");
    if (minHeight > 0 && height > minHeight){
        elem.style.maxHeight = minHeight + "em";
    }
    else{
        elem.style.maxHeight = 100 + "em";
    }
}

function expandreadmore (elem){
    elem.innerHTML = null;
    resize(elem.parentNode, -1);
}
