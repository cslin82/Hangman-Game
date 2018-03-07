# Hangman-Game
This is the Hangman Game for HW3. To start playing a new game or a new round, press spacebar.

Guess letters by typing them out. Correct letters will appear in the game playing field. All guesses will appear in the guesses field.

If you reach a game end condition (guessing the word correctly or running out of guesses) the round is over. A win or loss will be recorded.

Each game starts with 9 misses. The image will change as the guesses run down. A warning will appear with 3 or fewer guesses left.

The "generic" word list is currently 150 random words from [RandomLists word generator](https://www.randomlists.com/random-words). The Texas themed word list is the state symbols, the most populous cities, and other random words and foods that made me hungry. The WMATA word list (not yet connected to the HTML) is a list of the stations of the Washington Metro, with the dashes in official names simply changed to spaces.

See more: [Hangman (game) at Wikipedia](https://en.wikipedia.org/wiki/Hangman_\(game\))

### To-do 

* ~~Add space handling, capitalization in game logic~~

* Clean up logic/code
    * Condense updateGameBoard() calls 
    * Remove unused function and other code
* Clean up game board style
    * make long words wrap properly (substitute nbsp and regular spaces)
    * add padding/margin/divs
* ~~Themed game wordlist and styles~~
* Switchable game themes with option to keep or reset running score
* Sounds
* Start/Reset buttons with event listeners
* Responsive styling

