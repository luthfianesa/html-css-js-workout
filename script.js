console.log("Hello from Nerdbord!");

// Get the element
const boxElement = document.querySelector(".box");

// Array to switch colors
const colors = ["red", "green", "blue", "yellow"];
// length 4, Indexs 3
console.log(colors);


// Variabel to track current color / index
let currentColor = 0;

// Function to change the border color
const handleChangeBorderColor = () => {
  // Set the border color
  boxElement.style.borderColor = colors[currentColor];

  // Increment current color index
  currentColor = (currentColor + 1) % colors.length;
};

// Set interval to change the color every 3 seconds...
setInterval(handleChangeBorderColor, 3000);

