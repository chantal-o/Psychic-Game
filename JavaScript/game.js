// GLOBAL VARIABLES
//==============================================================================================

// Array of letter options

var letterList = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Computer selected solution will be held here.
var computerChoice = "";

// Holds all of the wrong guesses.
var wrongGuesses = [];

// Holds the letters guessed
var guessedLetters = "";

// Game counters
var winCount = 0;
var lossCount = 0;
var numGuesses = 9;

// FUNCTIONS 
// ==================================================================================================

// startGame()

function startGame() {

  // Reset the guesses back to 0.
  numGuesses = 9;

  // Solution chosen randomly from wordList.
 computerChoice = letterList[Math.floor(Math.random() * letterList.length)];

  // We print the solution in console (for testing).
  console.log(computerChoice);


  // Here we *reset* the wrong guesses from the previous round.
  wrongGuesses = [];
}



  // Reprints the guessesLeft to 9.
  document.getElementById("guessesRemaining").innerHTML = numGuesses;

  // Clears the wrong guesses from the previous round.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
//.onkeyup captures the players input as userGuess

}
}
//checkLetters() function and html
function checkLetters(letter) {

if (computerChoice === userChoice) {
  console.log("You won!");
  alert("You won!");
  document.getElementById("winCount").innerHTML = winCount++;
  guessedLetters = [];
  document.getElementById("guessedLetters").innerHTML = guessedLetters;
  randomIndex = Math.floor(Math.random() * alphabet.length);
  computerChoice = letterList[randomIndex];
  console.log(computerChoice);
  guessesRemaining = 10;
  document.getElementById("guessesRemaining").innerHTML = 10;
} else {
  console.log("Guess again!");
  document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;

  guessedLetters.push(userChoice);
  document.getElementById("guessedLetters").innerHTML = guessedLetters;

}
}
    

// roundComplete() function

function roundComplete() {

  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
  console.log("WinCount: " + winCount + " | LossCount: " + lossCount + " | NumGuesses: " + numGuesses);

  // HTML UPDATES
  // ============

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  
    // Add to the win counter
    winCounter++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("win-counter").innerHTML = winCount;

    // Restart the game
    startGame();
  }

   
// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  guessedLetters = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(guessedLetters);

  // Runs the code that ends each round.
  roundComplete();
};


