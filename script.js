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

function getUserChoice() {
    let choice = prompt(
    "Please choose 1 option: 'Rock', 'Paper' or 'Scissors': ",
  ).toLowerCase();

  return choice;
}

function game() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

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

  while (round < 5) {
    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    console.log('Computer: ' + computerChoice);
    console.log('Player: ' + humanChoice);
    console.log('Player: ' + humanScore);
    console.log('Computer: ' + computerScore)
    console.log("Round: " + round);
  }
  console.log('Final Player Score: ' + humanScore);
  console.log('Final Computer Score: ' + computerScore);
}

game();
