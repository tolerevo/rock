/*this function gets a random integer between 0 and 2 and assign the result to a string (rock,paper or 
scissors)*/
function getComputerChoice() {
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  let computerResponse = getRandomNum(0, 2);
  let choice = ["rock", "paper", "scissors"];
  return computerResponse === 0
    ? choice[0]
    : computerResponse === 1
      ? choice[1]
      : choice[2];
}

// This function gets the user's choice and returns it as a string, in lower case, only accepts: rock, paper or scissors as input.//
function getUserChoice() {
  let choice = prompt(
    "Please choose 1 option: 'Rock', 'Paper' or 'Scissors': ",
  ).toLowerCase();
  if (choice!== "rock" && choice!== "paper" && choice!== "scissors") {
    alert("Invalid choice");
    return getUserChoice();
  }
  return choice;
}

/* game function compares the user's choice to the computer's choice and determines the winner, keeps the 
count of round played and stops the game after 5 rounds and declares the winner. */
function game() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  /* play round function compares the user's choice to the computer's choice and applies the rules of the 
  game to decide the winner of a single round */
  function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
      alert("Draw");
    }

    if (humanSelection === "rock") {
      if (computerSelection === "scissors") {
        humanScore++;
        alert(`You win! ${humanSelection} beats ${computerSelection}`);
      } else if (computerSelection === "paper") {
        computerScore++;
        alert(`You loss! ${computerSelection} beats ${humanSelection}`);
      }
    }

    if (humanSelection === "scissors") {
      if (computerSelection === "paper") {
        humanScore++;
        alert(`You win! ${humanSelection} beats ${computerSelection}`);
      } else if (computerSelection === "rock") {
        computerScore++;
        alert(`You loss! ${computerSelection} beats ${humanSelection}`);
      }
    }

    if (humanSelection === "paper") {
      if (computerSelection === "rock") {
        humanScore++;
        alert(`You win! ${humanSelection} beats ${computerSelection}`);
      } else if (computerSelection === "scissors") {
        computerScore++;
        alert(`You loss! ${computerSelection} beats ${humanSelection}`);
      }
    }
  }

/* here we use a while loop to set rounds to 5 and applies logic to play them, then logs the results of the game and declares a winner or a draw. */
  while (round < 5) {
    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    console.log("Computer: " + computerChoice);
    console.log("Player: " + humanChoice);
    console.log("Player: " + humanScore);
    console.log("Computer: " + computerScore);
    console.log("Round: " + round);
  }
  console.log("Final Player Score: " + humanScore);
  console.log("Final Computer Score: " + computerScore);
  
  if (humanScore > computerScore) {
    alert("You win!");
  } else if (computerScore > humanScore) {
    alert("You lose!");
  } else {
    alert("Draw");
  }
}

game();
