let button = document.getElementById("BUTTON");
let text = document.getElementById("TEXT")

function changeColor() {
  return "rgb(251, 2, 2)";
};

button.addEventListener("click", () => {
  text.style.color = changeColor()
})


