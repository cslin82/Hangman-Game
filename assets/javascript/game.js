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

const alphabet = "abcdefghijklmnopqrstuvwxyz";

var playerGuess = '';
var playerGuesses = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentWord = "";
var correctGuess = false; // Admittedly this is not ideal but it apparently works.

// get the span elements to display scores
spanWins = document.getElementById("displayWins");
spanLosses = document.getElementById("displayLosses");
spanGuessesLeft = document.getElementById("displayGuessesLeft");
spanGuessedWord = document.getElementById("guessedWord");
spanGuesses = document.getElementById("displayGuesses");

// Select a word from the given list
function randomWord(wordList) {
    var index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}



// Format target word to have blanks for unguessed letters, uppercase and spaces
function wordToString(word, guesses) {
    var gameString = "";
    correctGuess = true;
    for (var j = 0; j < word.length; j++) {
        if (guesses.indexOf(word[j]) === -1) {
            gameString += "_";
            correctGuess = false;
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
        if (k < guesses.length - 1) {
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

function resetGame() {
    currentWord = randomWord(gameWordList);
    playerGuesses = "";
    guessesLeft = 9;
}


document.onkeyup = function (event) {
    
    // Determines which key was pressed.
    var userGuess = event.key;
    
    if ((alphabet.indexOf(userGuess) === -1) || (playerGuesses.indexOf(userGuess) !== -1)) { return 0; }
    
    console.log(userGuess);
    playerGuesses = playerGuesses + userGuess;
    updateGameBoard();
    
    // TODO: detect win and loss conditions, consider separating good and bad guesses
    // consider making intermediate string of filled in guesses to detect win
};

resetGame();
updateGameBoard();