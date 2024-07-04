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
const button1 = document.createElement("button");
button1.setAttribute("id", "button1");
button1.setAttribute("style", "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin-right: 10px; line-height: .3;");
button1.innerText = "paper";
const button2 = document.createElement("button");
button2.setAttribute("id", "button2");
button2.setAttribute("style", "width: 150px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin-right: 10px; line-height: .3;");
button2.innerText = "scissors";
const button3 = document.createElement("button");
button3.setAttribute("id", "button3");
button3.setAttribute("style", "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; line-height: .3;");
button3.innerText = "rock";
document.body.appendChild(button1);
document.body.appendChild(button2);
document.body.appendChild(button3);

/* This function gets the user's choice and returns it as a string, in lower case, only accepts: rock, paper or scissors as input.//
function getUserChoice() {
  let choice = prompt(
    "Please choose 1 option: 'Rock', 'Paper' or 'Scissors': ",
  ).toLowerCase();
  if (choice!== "rock" && choice!== "paper" && choice!== "scissors") {
    alert("Invalid choice");
    return getUserChoice();
  }
  return choice;
} */

/* game function compares the user's choice to the computer's choice and determines the winner, keeps the 
count of round played and stops the game after 5 rounds and declares the winner. */
function game() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;
  
  // creates a new div referenced in the variable 'div'
  const div = document.createElement("div");
  // gives an id "results" to the div
  div.setAttribute("id", "results");
  // toggles the class "hide-results" to show the div and hides it when the game ends
  //div.classList.toggle("display-results");
  document.body.appendChild(div);
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
// creating an event listeners so the buttons call playRound and gets user's choice every time they are clicked.
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", event => {
    let humanChoice = event.target.innerText;
    console.log(humanChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
    // shows the results of the game in the div with id "results"
    let div = document.getElementById("results");
    if (!div.classList.contains("display-results")) {
      div.classList.toggle("display-results");
      div.setAttribute("style", "display: block; width: 200px; height: 100px; background-color: #EDEEF1; padding: 5px; border-radius: 5px; justify-content: center; margin: 10px;");
    }
    const p = document.createElement("p");
    p.setAttribute("style", "font-size: 14px; font-weight: bold; justify-content: center; line-height: 1.2; text-align: center;");
    p.innerText = (`Computer chose: ${computerChoice}\r Player chose: ${humanChoice} \r Player Points: ${humanScore} \r Computer Points: ${computerScore} \r Current Round: ${round}`); 
    div.appendChild(p);
  })
  
})

    /*if (humanScore >= 5) {
      console.log("You win!");
      humanScore = 0;
      } else if (computerScore >= 5){
        console.log("You lose!");
        computerScore = 0;
      } */
   /* here we use a while loop to set rounds to 5 and applies logic to play them, then logs the results of  the game and declares a winner or a draw. */
  /*while (round < 5) {
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
  console.log("Final Computer Score: " + computerScore); */
}

game();
