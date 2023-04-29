var previous = window.pageYOffset;
var elementTarget = document.getElementById("intro");
window.onscroll = function() {
  var current = window.pageYOffset;
  if(window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)){
    document.getElementById("navigation").style.top = "0";
  } else if (previous > current) {
    document.getElementById("navigation").style.top = "0";
  } else if (current>previous){
    document.getElementById("navigation").style.top = "-5vw";
  }
  
  previous= current;
  
}