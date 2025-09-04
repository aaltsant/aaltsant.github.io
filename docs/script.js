// get references to the elements
const heading = document.getElementById("main-heading");
const button = document.getElementById("color-btn");

// add click event
const colors = [
  "blue", "red", "green", "black", "pink", "skyblue", "white", "yellow",
  "orange", "brown", "purple", "grey", "cyan", "magenta", "lime", "teal",
  "navy", "maroon", "olive", "silver", "gold", "coral", "crimson", "indigo",
  "violet", "turquoise", "salmon", "plum", "orchid", "khaki", "beige",
  "mintcream", "lavender", "peachpuff", "seashell", "honeydew", "azure",
  "ivory", "snow"
];

button.addEventListener("click", function() {
  // pick a random index
  const randomIndex = Math.floor(Math.random() * colors.length);
  // set the heading color to a random color
  heading.style.color = colors[randomIndex];
});