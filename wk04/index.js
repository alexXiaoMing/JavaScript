// global variable
var slideIndex = 1;
var windowObjectReference = null; 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function handleMySlideClick(n){
  slideIndex = n;
  if(windowObjectReference == null || windowObjectReference.closed){
    windowObjectReference = window.open("./popup.html?pid="+n,
    "BestViewer", "resizable,scrollbars,status");
  }else {
      windowObjectReference.focus();
  };
  // windowObjectReference.postMessage("id: "+id, windowObjectReference);
  windowObjectReference.imgSrc = slideIndex;
}

window.addEventListener("message", function(event) {
  if (event.origin != 'http://javascript.info') {
    // something from an unknown domain, let's ignore it
    return;
  }

  alert( "received: " + event.data );
});