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
function getHumanChoice() {
  let choice = prompt(
    "Please choose 1 option: 'Rock', 'Paper' or 'Scissors': ",
  ).toLowerCase();
  if (choice!== "rock" && choice!== "paper" && choice!== "scissors") {
    alert("Invalid choice");
    return getHumanChoice();
  }
  return choice;
}

/* game function compares the user's choice to the computer's choice and determines the winner, keeps the 
count of round played and stops the game after 5 rounds and declares the winner. */
function playGame() {
  let round = 0
  let humanScore = 0
  let computerScore = 0

  /* play round function compares the user's choice to the computer's choice and applies the rules of the 
  game to decide the winner of a single round */
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw")
    }
    if ((humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "scissors" && computerChoice === "paper")||
        (humanChoice === "paper" && computerChoice === "rock")) {
          humanScore++
          console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    if ((computerChoice === "rock" && humanChoice === "scissors")||
        (computerChoice === "scissors" && humanChoice === "paper")||
        (computerChoice === "paper" && humanChoice === "rock")) {
          computerScore++;
          console.log(`You loss! ${computerChoice} beats ${humanChoice}`)
    }
  }
  /* here we use a while loop to set rounds to 5 and applies logic to play them, then logs the results of the game and declares a winner or a draw. */
  while (round < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    round++;
    console.log("Computer Chose: " + computerSelection);
    console.log("Player Chose: " + humanSelection);
    console.log("Player Points: " + humanScore);
    console.log("Computer Points: " + computerScore);
    console.log("Current Round: " + round);
  }
  console.log("Final Player Score: " + humanScore);
  console.log("Final Computer Score: " + computerScore);
  
  if (humanScore > computerScore) {
    alert("You win! you have " + humanScore + " Points, Computer has " + computerScore + " points");
  } else if (computerScore > humanScore) {
    alert("You lose! you have " + humanScore + " Points, Computer has " + computerScore + " points");
  } else {
    alert("Draw! both of you ended with " + humanScore + " points");
  }
}

playGame();
