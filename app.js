// Get slider
var slider = document.getElementById("slider");
// Set style references
var indexes = [1, 2, 3, 4, 5]
var opacities = [0, 0, 0.1, 0.5, 1]
var scales = [0.6, 0.7, 0.8, 0.9, 1]
// Get current index
var currIndex = slider.value/10;
// On slider change update index and image transforms
slider.oninput = function() {
  currIndex = this.value/10;
  if (indexes.includes(currIndex)) {
    // Set previous previous index
    var imageIndex = currIndex - 2
    // For each index set the styles according to relative position to the current index
    for (let i = 0; i < indexes.length; i++ ) {
      var element = document.querySelector(`[data-index="${imageIndex % indexes.length + 1}"]`)
      var styleIndex = (imageIndex - 1) % indexes.length
      // If element exists then change styling
      if (element != null) {
        element.style.opacity = opacities[styleIndex]
        element.style.transform = `translate(${(imageIndex - currIndex) * 50}%) scale(${scales[styleIndex]}, ${scales[styleIndex]})`
        if (imageIndex == 4) {
          element.style.zIndex = 1;
        } else {
          element.style.zIndex = 0;
        }
      }
      imageIndex ++;
    }
  }
}
