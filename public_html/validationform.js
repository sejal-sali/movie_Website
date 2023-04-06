

/* global n */

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1;}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}


function check(){
 let form = document.myForm;
 console.log("textbox:");
 console.log(form.t1.value);
 console.log("textbox:");
 console.log(form.c1.checked);
 
 
 if (form.t1.value == ""){
   form.t1.style.border = "1px solid red";
   alert("the text field is empty");
   return false;
 }
 if(!form.c1.checked){
   form.c1.style.border = "1px solid red";
   alert("the box is unchecked.");
   return false;
 }
 return true;
}