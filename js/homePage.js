//home page slideshow
var i = 0;
var images = [];
var time = 5000;

images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';

function changeImg(){
  document.slide.src = images[i];
  if(i < images.lenght - 1) return{
    i++
  }
  else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;