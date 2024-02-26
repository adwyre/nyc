// CAROUSEL ANIMATION
// Get slider
var slider = document.getElementById("slider");
// Get Image Label
var title = document.getElementById("image-title");

// Set style references
var indexes = [1, 2, 3, 4, 5]
var opacities = [1, 0.5, 0.1, 0, 0]
var scales = [1, 0.9, 0.8, 0.7, 0.6]
// Set image labels 
var imageTitles = ["Central Park", "Times Square", "Brooklyn Bridge", "Empire State Building", "Statue of Liberty"]

// Get current index
var currIndex = slider.value/10;

// On slider change update index and styling
slider.oninput = function() {
  currIndex = this.value/10;
  // If index is a whole number
  if (indexes.includes(currIndex)) {
    // Update image label
    title.innerHTML = imageTitles[currIndex - 1];
    // For each index set the styles according to relative position to the current index
    for (let i = 0; i < indexes.length; i++ ) {
      var elements = []
      elements.push(document.querySelector(`[data-index="${currIndex - i}"]`))
      elements.push(document.querySelector(`[data-index="${currIndex + i}"]`))
      
      for (const element of elements) {
      // If element exists then change styling
      if (element != null) {
          element.style.opacity = opacities[i]
          element.style.transform = `translate(${(element.dataset.index - currIndex) * 50}%) scale(${scales[i]}, ${scales[i]})`
          // If element is current element move to front
          if (i == 0) {
            element.style.zIndex = 1;
          } else {
            element.style.zIndex = 0;
          }
        }
      }
    }
  }
}

// FADE IN ON SCROLL
// Create new observer. Add show class when intersecting else remove show class
const observer = new IntersectionObserver ((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add('show')
    } else {
      element.target.classList.remove('show')
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden')
// Observe all hidden elements
hiddenElements.forEach((element) => observer.observe(element))
