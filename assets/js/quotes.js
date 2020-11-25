var i = 0;
var txt = "Be the change that you wish to see in the world. ― Mahatma Gandhi";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("quotes").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
