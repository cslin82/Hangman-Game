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

var playerGuess;
var playerGuessesString;
var wins = 0;
var losses = 0;

function randomWord(wordList) {
    var index = Math.floor(Math.random()*wordList.length);
    return wordList[index];
}

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

function guessesToString(guesses) {
    var guessString = "";
    for (var k = 0; k < guesses.length; k++) {
        guessString += guesses[k];
        if (k < guesses.length-1) {
            guessString += ', '
        }
    }
    return guessString.toUpperCase();
 
}