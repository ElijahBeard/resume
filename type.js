var i = 0;
var txt = 'Elijah Beard';
var addy_top = '85 Pomeroy Road'
var addy_bottom = ', Athens OH, 45701'
var email = 'elijahbeard24@gmail.com'
var phone = '614-896-0265'
var speed = 60;

document.getElementById("name_type").onload = typewrite()

function typewrite() {
  if (i < 23) {
    document.getElementById("name_type").innerHTML += txt.charAt(i);
    document.getElementById("addy_top").innerHTML += addy_top.charAt(i);
    document.getElementById("phone").innerHTML += phone.charAt(i);
    document.getElementById("email").innerHTML += email.charAt(i);
    i++;
    setTimeout(typewrite, speed);
  }
  if(i < 200){
    document.getElementById("addy_bottom").innerHTML += addy_bottom.charAt(i);
  }
}