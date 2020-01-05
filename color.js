var numSquares = 6;
var colors = generateRandomColors(numSquares); 
 var squares = document.querySelectorAll(".square");
  var pickedColor = pickColor();
 var colorDisplay = document.getElementById("colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var button = document.querySelector("#button");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	} else{
		squares[i].style.display = "none";
	}
}
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];	 
		squares[i].style.display = "block";
}
});

 button.addEventListener("click", function(){
 	// generate new colors
 	colors = generateRandomColors(numSquares);
 	// pick new random color from array
 	pickedColor = pickColor();
 	// change colorDisplay to match pickedColor
 	colorDisplay.textContent = pickedColor;
 	messageDisplay.textContent = "";
 	this.textContent = "new colors";
 	// change colors of squares
 	for(var i = 0; i < squares.length; i++){
 		squares[i].style.backgroundColor = colors[i];
 	}
 	h1.style.backgroundColor = "steelblue";
 })
 colorDisplay.textContent = pickedColor;
 
 for(var i=0; i<squares.length; i++){
 squares[i].style.backgroundColor = colors[i];
 // add eventListeners to the sq.
 squares[i].addEventListener("click", function(){
 var clickedColor = this.style.backgroundColor; 
 if(clickedColor === pickedColor){
 	messageDisplay.textContent = "Correct!";
 	button.textContent = "play again?";
 	h1.style.backgroundColor = pickedColor;
 	changeColors(clickedColor);
;
 } else{
 	this.style.backgroundColor = "#232323";
 	messageDisplay.textContent = "Try Again";
 }

 });
 }

 function changeColors(color){
 	for(var i = 0; i<colors.length; i++){
 		squares[i].style.backgroundColor = color;
 	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

function generateRandomColors(num){
// make an array
var arr = [];
// add num random colors to array
for(var i = 0; i < num; i++){
	arr.push(randomColor());
	// num =6 so it will generate a random color and the
	// push it into the array (6 times)
}

// return that array
return arr;
}

function randomColor(){
	// pick a "red" from 0 -255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 -255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
	

}