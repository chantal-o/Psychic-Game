// Alphabet Array
var letters =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];

// Game counters
var winCounter = 1;
var lossCounter = 0;
var guessesLeft = 10;
var guessedLetters = [];

// Computer selected solution chosen radomly from letter array
var randomIndex = Math.floor(Math.random() * letters.length);
var computerChoice = letters[randomIndex];

//We print the solution in console
console.log(computerChoice);

// / nitiates the function for capturing key clicks.
document.onkeyup = function(event) {
  var userChoice = event.key;
  
  // input will only accept letter values
  var regexp = /^[a-zA-Z]+$/;
    if (!regexp.test(userChoice)) {
      alert("you must select a letter");
    }
    else {
      console.log(userChoice);
    }

    }
  
    // reset the guesses back to 0 
    if (guessesLeft <= 0) {
      lossCounter++;
      document.getElementById("totalLosses").innerHTML = lossCounter++;
      console.log("You lost!");
      alert("You lost!");
      guessesLeft = 10;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      document.getElementById("guessCount").innerHTML = 10;
      randomIndex = Math.floor(Math.random() * letters.length);
      computerChoice = letters[randomIndex];
      console.log(computerChoice);
    }
    // compares computer choice and user choice
    if (computerChoice === userChoice) {
      console.log("You won!");
      alert("You won!");
      document.getElementById("totalWins").innerHTML = winCounter++;
      guessedLetters = [];
      document.getElementById("guessedLetters").innerHTML = guessedLetters;
      randomIndex = Math.floor(Math.random() * letters.length);
      computerChoice = letters[randomIndex];
      console.log(computerChoice);
      guessesLeft = 10;
      document.getElementById("guessCount").innerHTML = 10;
    } else {
      console.log("Guess again");
      document.getElementById("guessCount").innerHTML = guessesLeft--;
      guessedLetters.push(userChoice);
      document.getElementById("guessedLetters").innerHTML = guessedLetters;

      
    }
}
