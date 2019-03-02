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
    
    windowObjectReference.postMessage("hello there!", "*");
  }else {
      windowObjectReference.focus();
  };
}

function addImgFav(n)
{
    let item=document.getElementById("img" + n);
    let copyNode=item.cloneNode(true);
    let favBan=document.getElementById("favImgBan");  
    addFunctionToSingle(favBan,copyNode);

}

function addFunctionToSingle(baseNode,childNode)
{
  let checkContainNodes=baseNode.children;
  
  for (let i=0;i<checkContainNodes.length;i++)
  {
      if (childNode.getAttribute("id")==checkContainNodes[i].getAttribute("id"))
      {
        window.alert("this picture has been added");
        return;
      }
  }
  baseNode.appendChild(childNode);
}
function receiveMessage(event)
{
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  if (event.data === 0)
    return;
  addImgFav(event.data);
}
window.addEventListener("message", receiveMessage, false);