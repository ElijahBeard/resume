var i = 0;
var txt = 'Elijah Beard';
var speed = 60;

document.getElementById("name_type").onload = typewrite()

function typewrite() {
  if (i < txt.length) {
    console.log("sdfwef");
    document.getElementById("name_type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewrite, speed);
  }
}