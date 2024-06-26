function enlargeImg(popup, src) {

    document.getElementById("imgsrc").src = src

    popup.style.display = "flex";

    document.getElementsByTagName("body").style.overflow = "hidden";
}

function closeImg(popup) {
    popup.style.display = "none";
}