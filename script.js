var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById("rand-color");


// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient(){
	body.style.background = 
	"linear-gradient(to right,"+color1.value
	+","+color2.value+")";

	css.textContent = body.style.background +";";
}

function makeRandomColor() {
  var num = "";

	num = Math.floor(Math.random() * 16777097).toString(16);
  	while (num.length < 6) {
		num = "0"+num;
	}


  return "#"+num;
}

function setRandomColors() {
	color1.value = makeRandomColor();
	color2.value = makeRandomColor();
	// console.log(color1.value, color2.value);
	setGradient();
}

randomColor.addEventListener("click", setRandomColors);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.addEventListener("load", setGradient);