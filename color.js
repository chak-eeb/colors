let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let button = document.querySelector('#button');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
	hardBtn.classList.remove('selected');
	easyBtn.classList.add('selected');
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function() {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

button.addEventListener('click', function() {
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	this.textContent = 'new colors';
	// change colors of squares
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
});
colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	// add eventListeners to the sq.
	squares[i].addEventListener('click', function() {
		let clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			button.textContent = 'play again?';
			h1.style.backgroundColor = pickedColor;
			changeColors(clickedColor);
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	let arr = [];
	// add num random colors to array
	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
		// num =6 so it will generate a random color and the
		// push it into the array (6 times)
	}

	// return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0 -255
	let r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 -255
	let g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 -255
	let b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
