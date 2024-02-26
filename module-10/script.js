/* 
    Shane Tinsley - : Assignment 10.3 -2/25/24 Resources: 
    Textbook HTML & CSS design and build websites 
    JS CODE: Event handeling upon click of images for Tinsley_Mod10_3.html
    https://github.com/Zebtha/csd-340.git
    https://zebtha.github.io/csd-340/
    https://zebtha.github.io/csd-340/module-10/Tinsley_Mod10_3.html
 */
// Function to handle image clicks and toggle between paired images
function handleImageClick(clickedImage) {
    // Get the current source of the clicked image
    const currentSrc = clickedImage.src;
  
    // Declare a variable to store the new source (initialized as empty)
    let newSrc;
  
    // Check for "_01.jpg" in the source and set new source accordingly
    if (currentSrc.includes("_01.jpg")) {
      newSrc = currentSrc.replace(/_01\.jpg$/, "_02.jpg");
    }
  
    // Check for "_02.jpg" in the source and set new source accordingly
    else if (currentSrc.includes("_02.jpg")) {
      newSrc = currentSrc.replace(/_02\.jpg$/, "_01.jpg");
    }
  
    // Update the image source only if a valid new source is found and it's different from the current source
    if (newSrc && newSrc !== currentSrc) {
      clickedImage.src = newSrc;  // Assign the new source to the image
    }
  }