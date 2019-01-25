
document.getElementById("sliderTop").onclick = slideTop;
var imgTop = 0;


function slideTop() {

    var sliderInner = document.getElementById("slider-inner");
    imgTop = imgTop - 256;
    if(imgTop < -1280){
        imgTop = 0
    }
    sliderInner.style.top = imgTop + 'px';
}