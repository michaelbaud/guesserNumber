var input = "";
var lastGuess = 0;
var outputNumber = document.querySelector('.outputNumber');
var btnGuess = document.querySelector('.btnGuess');
var btnClear = document.querySelector('.btnClear');
var btnReset = document.querySelector('.btnReset');
var indiceBox = document.querySelector('.indiceBox');
var level1Box = document.querySelector('.level1Box');
var level2Box = document.querySelector('.level2Box');
var level3Box = document.querySelector('.level3Box');
var level4Box = document.querySelector('.level4Box');
var level5Box = document.querySelector('.level5Box');
var beforeOutputNumber = document.querySelector('.beforeOutputNumber');
var deb = document.querySelector('.deb');
var fin = document.querySelector('.fin');
var debutRange = 0;
var finRange = 0;
var random = 0;
var inputBox = document.querySelector('.inputBox');

btnReset.onclick = function() {

}

btnClear.onclick = function() {
	inputBox.value = "";
}

level1Box.onclick = function() {
	debutRange = 40;
	finRange = 60;
	randomNumber(40, 60);
	deb.textContent = debutRange;
	fin.textContent = finRange;
}

level2Box.onclick = function() {
	debutRange = 30;
	finRange = 70;
	randomNumber(30, 70);
	deb.textContent = debutRange;
	fin.textContent = finRange;
}

level3Box.onclick = function() {
	debutRange = 20;
	finRange = 80;
	randomNumber(20, 80);
	deb.textContent = debutRange;
	fin.textContent = finRange;
}

level4Box.onclick = function() {
	debutRange = 10;
	finRange = 90;
	randomNumber(10, 90);
	deb.textContent = debutRange;
	fin.textContent = finRange;
}

level5Box.onclick = function() {
	debutRange = 0;
	finRange = 100;
	randomNumber(0, 100);
	deb.textContent = debutRange;
	fin.textContent = finRange;
}

function randomNumber(min, max) {
	var nb = min + (max-min+1)*Math.random();
    random = Math.floor(nb);
}

function game() {

	var input = parseInt(inputBox.value);
	var lastGuessBox = document.querySelector('.lastGuessBox');

	if(input >= debutRange && input <= finRange) {
		outputNumber.style.fontSize = '8em';
		lastGuessBox.textContent = lastGuess;
		outputNumber.textContent = input;
		lastGuess = input;
		if(input < random) {
			indiceBox.textContent = "That is too low";
		}
		else if(input > random) {
			indiceBox.textContent = "That is too high";
		}
		else if(input === random) {
			indiceBox.textContent = "Boom !";
		}
	}
	else {
		outputNumber.style.fontSize = '2em';
		outputNumber.textContent = 'Your guess is outside of the range';
	}
}

btnGuess.addEventListener('click', function() {
	game();
})

inputBox.addEventListener('keydown', function(e) {
   if(e.keyCode == 13) {
		 game();
	 }
});
