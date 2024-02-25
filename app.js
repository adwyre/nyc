// Get slider
var slider = document.getElementById("slider");
// Set indexes
var indexes = [1, 2, 3, 4, 5]
// Set opacities
var opacities = [0, 0, 0.1, 0.5, 1]
// Set transforms
var transforms = [0.6, 0.7, 0.8, 0.9, 1]
// Get current index
var currIndex = slider.value/10;
// On slider change update index and image transforms
slider.oninput = function() {
  currIndex = this.value/10;
  if (currIndex in indexes) {
    // Get images
    var images = []
    images.push(document.querySelector(`[data-index="${currIndex - 2}"]`))
    images.push(document.querySelector(`[data-index="${currIndex - 1}"]`))
    images.push(document.querySelector(`[data-index="${currIndex}"]`))
    images.push( document.querySelector(`[data-index="${currIndex + 1}"]`))
    images.push(document.querySelector(`[data-index="${currIndex + 2}"]`))


    //-3
    prevPrevImage.style.zIndex = 0;
    prevPrevImage.style.opacity = 0;
    prevPrevImage.style.transform = "translateX(-200%) scale(0.6, 0.6)";
    //-1
    prevImage.style.zIndex = 0;
    prevImage.style.opacity = 0.5;
    prevImage.style.transform = "translateX(-50%) scale(0.9, 0.9)";
    //0
    currImage.style.zIndex = 1;
    currImage.style.opacity = 1;
    currImage.style.transform = "translateX(0) scale(1, 1)";
    //+1
    nextImage.style.zIndex = 0;
    nextImage.style.opacity = 0.5;
    nextImage.style.transform = "translateX(50%) scale(0.9, 0.9)";
    //+3
    nextNextImage.style.zIndex = 0;
    nextNextImage.style.opacity = 0;
    nextNextImage.style.transform = "translateX(200%) scale(0.6, 0.6)";
  }
}
