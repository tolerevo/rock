function getComputerChoice() {
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
  }
  let computerResponse = getRandomNum(1, 3);
  let choice = "";
  return computerResponse === 1
    ? (choice = "rock")
    : computerResponse === 2
      ? (choice = "paper")
      : (choice = "scissors");
}
/*if (computerResponse === 1) {
    choice = "rock";
  } else if (computerResponse === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}
*/
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
    if (humanSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      console.log(`You loss! ${computerSelection} beats ${humanSelection}`);
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === "paper" && computerSelection === "rock") {
      humanScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      console.log(`You loss! ${computerSelection} beats ${humanSelection}`);
    } else if (humanSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      console.log(`You loss! ${computerSelection} beats ${humanSelection}`);
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
      userScore++;
      console.log(`You win! ${humanSelection} beats ${computerSelection}`);
    } else if (humanSelection === computerSelection) {
      console.log(`Draw! You chose ${humanSelection} and the computer chose ${computerSelection} too!`);
    } else {
      console.log("Invalid input");
    }
    alert("Your score: " + humanScore + "\nComputer score: " + computerScore);
  }

  while (round < 5) {
    let humanChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
    console.log("Round: " + round);
  }
}

/*playGame();

playGame();

playGame();

playGame();

playGame();

if (computerScore > humanScore) {
  alert("SORRY YOU LOST");
  alert(`You: ${humanScore} VS Computer: ${computerScore}`);
} else if (computerScore < humanScore) {
  alert("CONGRATULATIONS! YOU WON");
  alert(`You: ${humanScore} VS Computer: ${computerScore}`);
} else {
  alert("DRAW");
  alert(`You: ${humanScore} VS Computer: ${computerScore}`);
}
/*  askForOption.toLowerCase !== "rock" ? prompt ("please") : askForOption{
    prompt("please choose Rock, paper or scissors");
  } else if (askForOption.toLowerCase() !== "paper") {
    prompt("please choose Rock, paper or scissors");
  } else if (askForOption.toLowerCase() !== "scissors") {
    prompt("please choose Rock, paper or scissors");
  } else {
    askForOption.toLowerCase;
  }
  return askForOption.toLowerCase;
}
userChoice = getHumanChoice();
console.log(getHumanChoice);

/*
const playRound = (humanChoice, computerChoice) => {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    if (humanChoice) {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`); 

};
/*
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else return "scissors";
};

const getHumanChoice = () => {
  const askForOption = prompt("Please choose one: rock, paper, scissors");
  return askForOption.toLowerCase();
};

/* if (
  getHumanChoice() !== "rock" ||
  getHumanChoice() !== "paper" ||
  getHumanChoice() !== "scissors"
) {
  return prompt("You can only choose rock, paper or scissors");
}; 

const playRound = (humanChoice, computerChoice) => {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  if (humanChoice) {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
  console.log(`Your Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`); 

};

while (humanScore < 3 || computerChoice < 3) {
  return playRound();
} 
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
*/
//}
