// starting variables
const wordList = [];

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
        if (word.indexOf(guesses) <= 0) {
            gameString += "_";
        } else {
            gameString += word[j];
        }
        gameString += " ";
           
    }
    return gameString;
}