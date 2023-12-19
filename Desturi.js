//list of images 
const images = [
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion1.jpg.jpg",
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion2.jpg.jpg",
  "C:/Users/Yvonne/Documents/Desturi_routefolder/Img/Fashion3.jpg.jpg"
];
let currentIndex = 0;

// Function to change the displayed image
function changeImage() {
  const displayedImage = document.getElementById("displayedImage");

  // Increment the index or reset to 0 if at the end
  currentIndex = (currentIndex + 1) % images.length;

  // Update the source attribute of the displayed image
  displayedImage.src = images[currentIndex];
}
