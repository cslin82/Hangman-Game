// starting variables
const genericWordList = ["vast", "irritating", "team", "ants", "defeated", "soft", "woman", "size", "jump", "alert", "endurable", "invent",
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

const texasWordList = ["bluebonnet", "friendship", "lone star state", "pecan",
    "mockingbird", "longhorn", "armadillo", "blue lacy", "chili", "cotton",
    "monarch", "buckyball", "jalapeno", "prickly pear cactus",
    "texas horned lizard", "crape myrtle", "texas sage", "the friendly state",
    "rodeo", "strudel", "sopaipilla", "Houston", "San Antonio", "Dallas",
    "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano",
    "Laredo", "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie",
    "Brownsville", "McKinney", "Frisco", "Pasadena", "Mesquite", "Killeen",
    "McAllen", "Carrollton", "Midland", "Waco", "Denton", "Abilene", "Odessa",
    "Beaumont", "Round Rock",
    "Alamo", "Blue Bell", "Whataburger", "brisket", "barbecue", 
    "cowboy", "Guadalupe River", "Brazos River", "Red River", "Rio Grande", "Sabine River"
    ];

const wmataWordList = ["Addison Road", "Anacostia", "Archives",
    "Arlington Cemetery", "Ballston MU", "Benning Road", "Bethesda",
    "Braddock Road", "Branch Avenue", "Brookland CUA",
    "Capitol Heights", "Capitol South", "Cheverly", "Clarendon", "Cleveland Park",
    "College Park University of Maryland", "Columbia Heights", "Congress Heights",
    "Court House", "Crystal City", "Deanwood", "Dunn Loring", "Dupont Circle",
    "East Falls Church", "Eastern Market", "Eisenhower Avenue", "Farragut North",
    "Farragut West", "Federal Center SW", "Federal Triangle", "Foggy Bottom GWU",
    "Forest Glen", "Fort Totten", "Franconia Springfield", "Friendship Heights",
    "Gallery Place", "Georgia Avenue Petworth", "Glenmont", "Greenbelt",
    "Greensboro", "Grosvenor Strathmore", "Huntington", "Judiciary Square",
    "King Street Old Town", "LEnfant Plaza", "Landover", "Largo Town Center",
    "McLean", "McPherson Square", "Medical Center", "Metro Center",
    "Minnesota Avenue", "Morgan Boulevard", "Mount Vernon Square",
    "Navy Yard Ballpark", "Naylor Road", "New Carrollton", "NoMa Gallaudet U",
    "Pentagon", "Pentagon City", "Potomac Avenue", "Prince Georges Plaza",
    "Rhode Island Avenue Brentwood", "Rockville",
    "Ronald Reagan Washington National Airport", "Rosslyn", "Shady Grove",
    "Shaw Howard University", "Silver Spring", "Smithsonian", "Southern Avenue",
    "Spring Hill", "Stadium Armory", "Suitland", "Takoma", "Tenleytown AU",
    "Twinbrook", "Tysons Corner", "U Street", "Union Station", "Van Dorn Street",
    "Van Ness UDC", "Vienna", "Virginia Square GMU", "Waterfront",
    "West Falls Church", "West Hyattsville", "Wheaton", "White Flint",
    "Wiehle Reston East", "Woodley Park"] 


const alphabet = "abcdefghijklmnopqrstuvwxyz";

var gameWordList = texasWordList;

var playerGuess = '';
var playerGuesses = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var currentWord = "";
var correctGuess = false; // Admittedly this is not ideal but it apparently works.
var gameActive = false;

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
    // return wordList[index].toLowerCase();
}



// Format target word to have blanks for unguessed letters, uppercase and spaces
// Also check for a word being completely guessed
function wordToString(word, guesses) {
    var gameString = "";
    correctGuess = true;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === " ") {
            gameString += "&nbsp;"
        } else if (guesses.indexOf(word[j]) === -1) {
            gameString += "_";
            correctGuess = false;
        } else {
            gameString += word[j].toUpperCase();
        }
        gameString += " ";
    }
    return gameString;
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
    spanGuesses.innerHTML = wordToString(alphabet, playerGuesses);
    // spanGuessedWord.innerHTML = wordToString(currentWord, playerGuesses); //calling this last so it properly reflects whether guessed; this is not optimal
    spanGuessedWord.innerHTML = wordToString(currentWord.toLowerCase(), playerGuesses); //calling this last so it properly reflects whether guessed; this is not optimal
    // spanGuessedWord.innerHTML = "guessed word goes here"; // wordToString(word, guesses);
    // spanGuesses.innerHTML = guessesToString(playerGuesses);
    // spanGuesses.innerHTML = "guesses go here"; // guessesToString(guesses);
    if (correctGuess) {
        h2Status.innerHTML = "Correct! Press spacebar to start a new game.";
    } else if (guessesLeft <= 3) {
        h2Status.innerHTML = "Careful, only " + guessesLeft + " guesses reamin.";

    } else h2Status.innerHTML = "&nbsp;";
    hangmanImage.src = "assets/images/hangman" + guessesLeft + ".png";


}

function resetGame() {
    currentWord = randomWord(gameWordList);
    playerGuesses = "";
    guessesLeft = 9;
    gameActive = false;
}


document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    userGuess = userGuess.toLowerCase();
    // console.log('userGuess: ' + userGuess + " and event.keycode: " + event.keyCode)

    if (!gameActive) {
        if (userGuess === ' ') {
            gameActive = true;
            h2Status.innerHTML = "";
            updateGameBoard();
            return 0;
        }

    } else {
        if ((alphabet.indexOf(userGuess) === -1) || (playerGuesses.indexOf(userGuess) !== -1)) { return 0; }

        playerGuesses = playerGuesses + userGuess;
        // playerGuesses = playerGuesses.split('').sort().join(''); // can make this selectable/option later
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
            // this could be moved into the updateGameBoard function
            h2Status.innerHTML = "The correct word was " + currentWord + ". Press spacebar to start a new game.";

            resetGame();
        }
    }
    // TODO: detect win and loss conditions, consider separating good and bad guesses
    // consider making intermediate string of filled in guesses to detect win
};

resetGame();
updateGameBoard();
// only called once, not sure where else to put it without major rewrite
h2Status.innerHTML = "Press spacebar to start a new game.";
