//function game() {
function getComputerChoice() {
    let computerChoice = 0;
    computerChoice += Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break
        default:
            console.log("error");
    }
    return computerChoice;
}
console.log(getComputerChoice());


let myChoice = "";

function getHumanChoice() {
  myChoice = window.prompt("please choose Rock, paper or scissors: "); 
  return myChoice;
}

console.log(myChoice);


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
let humanScore = 0;
let computerScore = 0;
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