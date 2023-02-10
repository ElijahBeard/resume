var k = 0;
var j = 0;
var lspeed = 19;
var rspeed = 40;
document.getElementById("right").onload = fade_right()
function fade_right() {
    if(j < 1){
        right.style.opacity = j;
        j += 0.01;
        setTimeout(fade_right, rspeed);
    }
}

document.getElementById("left").onload = fade_left()
function fade_left() {
    console.log("333")
    if(k < 1){
        left.style.opacity = k;
        k += 0.01;
        setTimeout(fade_left, lspeed);
    }
}