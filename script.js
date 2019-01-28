var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[getRandomSquare()];
var colorDisplay = document.getElementById("winColor");
var statusText = document.getElementById("status");
var headline = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var hardButton = document.getElementById("hard");
var easyButton = document.getElementById("easy");
var modeSquaresAmount = 6;

int();

function int(){
	arrayToColors();
	reset();
	easy();
	hard();
}

colorDisplay.textContent = pickedColor;

function arrayToColors(){
for (var i = 0; i < squares.length; i++) {
	//add initial colors to Squares
	squares[i].style.backgroundColor  = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", isCorrect);
	}
}

function isCorrect(){
var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) { 
		statusText.textContent= "Correct!"
		for (var i = 0; i < squares.length; i++) {
	headline.style.backgroundColor = pickedColor;
	winChange();
	squares[i].style.backgroundColor  = pickedColor;
if (modeSquaresAmount==3) {
		hideThreeTiles();
	} else {
		}
	}
} else {
	this.style.backgroundColor = "#232323";
	statusText.textContent= "Try Again";
		}
}

// get random square as pickedColor
function getRandomSquare(num)
{
	return random = Math.floor(Math.random()*colors.length);
}



//get random colors array
function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
 var r = Math.floor(Math.random()*256);
 var g = Math.floor(Math.random()*256);
 var b = Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}

// resetButton text change upon winning
function winChange (){
	if (resetButton.textContent= "NEW COLORS") {
		resetButton.textContent = "Play again?";
	} else {
		resetButton.textContent = "asdf";
	}
}

function reset(){
	resetButton.addEventListener("click", function(){
		colors = generateRandomColors(modeSquaresAmount);
		arrayToColors();
		randomColor();
		pickedColor = colors[getRandomSquare()];
		colorDisplay.textContent = pickedColor;
		headline.style.backgroundColor = "steelblue";
		statusText.textContent = "";
		resetButton.textContent = "new colors";
	if (modeSquaresAmount==3) {
		hideThreeTiles();
	} 
	});
	}

function easy(){
	easyButton.addEventListener("click", function(){
		colors = generateRandomColors(3);
		wholeLogic();
		hideThreeTiles();
		modeSwitchEasy();
	});
}
function hard(){
	hardButton.addEventListener("click", function(){
		colors = generateRandomColors(6);
		wholeLogic();
		modeSwitchHard();
	});
}

	function hideThreeTiles(){
		squares[3].style.backgroundColor = "#232323";
		squares[4].style.backgroundColor = "#232323";
		squares[5].style.backgroundColor = "#232323";
	}
function wholeLogic(){
		arrayToColors();
		randomColor();
		pickedColor = colors[getRandomSquare()];
		colorDisplay.textContent = pickedColor;
		headline.style.backgroundColor = "steelblue";
		statusText.textContent = "";
		resetButton.textContent = "new colors";
}
function modeSwitchEasy(){
		easyButton.style.backgroundColor = "steelblue";
		hardButton.style.backgroundColor = "white";
		easyButton.style.color = "white";
		hardButton.style.color = "steelblue";
		modeSquaresAmount = 3;
}
function modeSwitchHard(){
		hardButton.style.backgroundColor = "steelblue";
		easyButton.style.backgroundColor = "white";
		hardButton.style.color = "white";
		easyButton.style.color = "steelblue";
		modeSquaresAmount = 6;
	}