var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice;
var wins = 0;
var losses = 0;
var guessesLeft;

resetGame();

document.onkeyup = function(event) {
	var userGuess = event.key;

	if (userGuess == computerChoice) {
		wins++;
		console.log("wins");
		resetGame();
	} else {
		losses++;
		console.log("wrong");
		guessesLeft--;
		if (guessesLeft == 0) {
			console.log("loser");
			resetGame();
		}
	}
}

function resetGame() {
	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerChoice);
	guessesLeft = 9;
} 
