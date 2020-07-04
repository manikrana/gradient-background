//Selectors

let color1 = "";
let color2 = "";

//Event Listeners
document.getElementById("color1").addEventListener("input", changeColor);
document.getElementById("color2").addEventListener("input", changeColor);

//Functions

function changeColor() {
  color1 = document.getElementById("color1").value;
  color2 = document.getElementById("color2").value;
  const body = document.querySelector("body");
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
  let output = document.getElementById("output");
  output.innerHTML = `<h3>linear-gradient(to right, ${color1}, ${color2});</h3>`;
}
