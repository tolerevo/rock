//function game() {
function getComputerChoice() {
  let choice;
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    choice = "rock";
  } else if (randomNum === 2) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getUserChoice() {
  let choice = prompt(
    "Please choose 1 of these: 'Rock', 'Paper' or 'Scissors': ",
  ).toLowerCase();

  console.log(choice);

  return choice;
}

let humanScore = 0;

let computerScore = 0;

function playGame() {
  let humanSelection = getUserChoice();
  let computerSelection = getComputerChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      alert("Draw! Rock equals Rock");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      alert("You Lose! Paper beats rock.");
      ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      alert("You Win! Rock beats scissors");
      ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      alert(`Draw! you choose ${humanChoice} and the computer choose ${computerChoice} too`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      alert("You Win! Paper beats rock.");
      ++humanScore;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      alert("You Lose! scissors beats paper.");
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      alert("You Lose! Rock beats scissors.");
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      alert("You Win! Scissors beats paper");
      ++humanScore;
    } else if (humanChoice === "draw" && computerChoice === "draw") {
      alert(`Draw! you choose ${humanChoice} and the computer choose ${computerChoice} too`);
    } else {
      alert("invalid input");
    }
  }

  playRound(humanSelection, computerSelection);

  console.log("Computer score: " + computerScore);

  console.log("Your score: " + humanScore);
}

playGame();

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
