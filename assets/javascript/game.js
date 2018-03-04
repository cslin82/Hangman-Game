// starting variables
const gameWordList = ["vast", "irritating", "team", "ants", "defeated", "soft", "woman", "size", "jump", "alert", "endurable", "invent",
    "many", "shade", "distribution", "haircut", "tease", "shiny", "concentrate", "organic", "vase", "book", "like", "kindhearted",
    "innate", "arrogant", "arrange", "blot", "ink", "door", "tedious", "level", "reign", "chemical", "dress", "hollow", "wistful", "tricky",
    "trees", "suggest", "face", "leather", "shy", "wiggly", "spark", "satisfying", "abiding", "abnormal", "time", "head", "amazing", "income",
    "pleasant", "muddle", "deliver", "lunchroom", "sparkling", "knock", "clover", "sweater", "scandalous", "man", "economic", "mere", "judge",
    "bruise", "jar", "switch", "reminiscent", "stain", "decide", "abhorrent", "fluttering", "dime", "spill", "weary", "pigs", "optimal",
    "laughable", "hammer", "repulsive", "belligerent", "aromatic", "communicate", "reply", "dinner", "keen", "telling", "doubt", "air", "hat",
    "idiotic", "gruesome", "slimy", "nail", "produce", "room", "zesty", "conscious", "diligent", "ready", "preserve", "word", "trick",
    "annoyed", "license", "gainful", "boundary", "bump", "young", "arithmetic", "imagine", "boring", "snake", "mouth", "collect", "idea",
    "probable", "fearful", "abounding", "desk", "grab", "wealth", "meaty", "wax", "hot", "raspy", "boil", "bushes", "fat", "strong", "utopian",
    "stick", "provide", "periodic", "quixotic", "cave", "distance", "road", "thaw", "water", "decorate", "rabid", "follow", "trot", "suffer",
    "accurate", "touch", "stingy", "pale"];

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

h2Status = document.getElementById("game-status");

hangmanImage = document.getElementById("imageCycler");

// Select a word from the given list
function randomWord(wordList) {
    var index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}



// Format target word to have blanks for unguessed letters, uppercase and spaces
// Also check for a word being completely guessed
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
            guessString += ', ' // no terminal comma
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
    if (correctGuess) {
        h2Status.innerHTML = "Correct!";
    } else if (guessesLeft <= 3) {
        h2Status.innerHTML = "Careful, only " + guessesLeft + " guesses reamin.";

    } else h2Status.innerHTML = "";
    hangmanImage.src = "assets/images/hangman" + guessesLeft + ".png";


}

function resetGame() {
    currentWord = randomWord(gameWordList);
    playerGuesses = "";
    guessesLeft = 9;
    
}


document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    userGuess = userGuess.toLowerCase();

    if ((alphabet.indexOf(userGuess) === -1) || (playerGuesses.indexOf(userGuess) !== -1)) { return 0; }

    console.log(userGuess);
    playerGuesses = playerGuesses + userGuess;
    updateGameBoard();

    if (currentWord.indexOf(userGuess) === -1) {
        guessesLeft--;
        updateGameBoard();
    }

    if (correctGuess) {
        // alert("you win this round");
        wins++;
        updateGameBoard();
        resetGame();
        return 0;
    }

    if (guessesLeft < 1) {
        losses++;
        updateGameBoard();
        h2Status.innerHTML = "The correct word was " + currentWord + ". Keep guessing to start a new game.";
        resetGame();
    }

    // TODO: detect win and loss conditions, consider separating good and bad guesses
    // consider making intermediate string of filled in guesses to detect win
};

resetGame();
updateGameBoard();