// starting variables
const gameWordList = ["live", 
"aromatic", 
"heavenly", 
"whole", 
"force", 
"dogs", 
"erratic", 
"abnormal", 
"magical", 
"swift", 
"psychotic", 
"pointless", 
"reaction", 
"narrow", 
"channel", 
"near", 
"mute", 
"flagrant", 
"brake", 
"line"];

var playerGuess = '';
var playerGuesses = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentWord = "";

// get the span elements to display scores
spanWins = document.getElementById("displayWins");
spanLosses = document.getElementById("displayLosses");
spanGuessesLeft = document.getElementById("displayGuessesLeft");
spanGuessedWord = document.getElementById("guessedWord");
spanGuesses = document.getElementById("displayGuesses");

// Select a word from the given list
function randomWord(wordList) {
    var index = Math.floor(Math.random()*wordList.length);
    return wordList[index];
}

// Format target word to have blanks for unguessed letters, uppercase and spaces
function wordToString(word, guesses) {
    var gameString = "";
    for (var j = 0; j < word.length; j++) {
        if (guesses.indexOf(word[j]) === -1) {
            gameString += "_";
        } else {
            gameString += word[j];
        }
        gameString += " ";
    }
    return gameString.toUpperCase();
}

// Formats player guesses (lowercase) to be uppercase and have separating commas
function guessesToString(guesses) {
    var guessString = "";
    for (var k = 0; k < guesses.length; k++) {
        guessString += guesses[k];
        // don't add a terminal comma
        if (k < guesses.length-1) {
            guessString += ', '
        }
    }
    return guessString.toUpperCase();
 
}

// To be called after a player makes a guess
function updateGameBoard() {
    spanWins.innerHTML = wins;
    spanLosses.innerHTML = losses;
    spanGuessesLeft.innerHTML = guessesLeft;
    spanGuessedWord.innerHTML = wordToString(currentWord, playerGuesses);
    // spanGuessedWord.innerHTML = "guessed word goes here"; // wordToString(word, guesses);
    spanGuesses.innerHTML = guessesToString(playerGuesses);
    // spanGuesses.innerHTML = "guesses go here"; // guessesToString(guesses);

}