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
  
  previous = current;
  
}
var background_image = document.getElementById("preview");
var social_one = document.getElementById('social1');
var social_two = document.getElementById('social2');
var social_three =  document.getElementById('social3');
var social_four = document.getElementById('social4');


document.getElementById("social1").onmouseover = function() {
  social_one.setAttribute("style","padding-bottom:3.7vw;opacity:0.3;width: 22vw;height: 3.3vw;font-size: 3.3vw;"); 
  background_image.style.backgroundImage = "url(image/insta.PNG)";
  background_image.style.opacity = "0.5";
  background_image.style.border = "thick solid #bc1888";
  background_image.style.transition = "ease .5s"; }

document.getElementById("social1").onmouseout  = function() { 
  social_one.setAttribute("style","");
  social_two.setAttribute("style","");
  social_three.setAttribute("style","");
  social_four.setAttribute("style","");
  background_image.style.backgroundImage = "url(image/Capture.PNG)";
  background_image.style.border = "none";
  background_image.style.transition = "ease .5s";}

document.getElementById("social2").onmouseover = function() { 
  social_two.setAttribute("style","padding-bottom:3.7vw;opacity:0.3;width: 22vw;height: 3.3vw;font-size: 3.3vw;");
  background_image.style.backgroundImage = "url(image/li.PNG)"; 
  background_image.style.opacity = "0.5";
  background_image.style.border = "thick solid #007bb5";
  background_image.style.transition = "ease .5s";}

document.getElementById("social2").onmouseout  = function() { 
  social_one.setAttribute("style","");
  social_two.setAttribute("style","");
  social_three.setAttribute("style","");
  social_four.setAttribute("style","");
  background_image.style.backgroundImage = "url(image/Capture.PNG)"; 
  background_image.style.border = "none";
  background_image.style.transition = "ease .5s";}

document.getElementById("social3").onmouseover = function() { 
  social_three.setAttribute("style","padding-bottom:3.7vw;opacity:0.3;width: 22vw;height: 3.3vw;font-size: 3.3vw;");
  background_image.style.backgroundImage = "url(image/fb.PNG)";
  background_image.style.opacity = "0.5";
  background_image.style.transition = "ease .5s"; 
  background_image.style.border = "thick solid #3B5998";}

document.getElementById("social3").onmouseout  = function() { 
  social_one.setAttribute("style","");
  social_two.setAttribute("style","");
  social_three.setAttribute("style","");
  social_four.setAttribute("style","");
  background_image.style.backgroundImage = "url(image/Capture.PNG)"; 
  background_image.style.border = "none";
  background_image.style.transition = "ease .5s";}

document.getElementById("social4").onmouseover = function() { 
  social_four.setAttribute("style","padding-bottom:3.7vw;opacity:0.3;width: 22vw;height: 3.3vw;font-size: 3.3vw;");
  background_image.style.backgroundImage = "url(image/git.PNG)"; 
  background_image.style.opacity = "0.5";
  background_image.style.border = "thick solid #111111";
  background_image.style.transition = "ease .5s";}
  
document.getElementById("social4").onmouseout  = function() { 
  social_one.setAttribute("style","");
  social_two.setAttribute("style","");
  social_three.setAttribute("style","");
  social_four.setAttribute("style","");
  background_image.style.backgroundImage = "url(image/Capture.PNG)"; 
  background_image.style.border = "none";
  background_image.style.transition = "ease .5s";}
