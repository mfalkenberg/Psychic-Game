var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerChoice;
var wins = 0;
var losses = 0;
var guessesLeft;
var guessHistory;

resetGame();

document.onkeyup = function(event) {
	var userGuess = event.key;

	if (guessHistory == "") {
		guessHistory = userGuess;
	} else {
		guessHistory = guessHistory + "," + userGuess;
	}

	if (userGuess == computerChoice) {
		wins++;
		// console.log("wins");
		resetGame();
	} else {
		// console.log("wrong");
		guessesLeft--;
		if (guessesLeft == 0) {
			// console.log("loser");
			losses++;
			resetGame();

		}
	}

	var html =
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + guessHistory + "</p>";

	document.querySelector("#game").innerHTML = html;
}





function resetGame() {
	computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log(computerChoice);
	guessesLeft = 9;
	guessHistory = "";
} 


