var guessesLeft = 9;

hangmanImage = document.getElementById("imageCycler");

cycleButton = document.getElementById("buttonCycle");
resetButton = document.getElementById("buttonReset");



cycleButton.onclick = function () {
    if (guessesLeft >= 0) {
        hangmanImage.src = "assets/images/hangman" + guessesLeft + ".png";

    } else {
        guessesLeft = 9;
    }

};

resetButton.onclick = function () {
    hangmanImage.src = "assets/images/hangman9.png";
    guessesLeft = 9;

};

