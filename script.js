/*this function gets a random integer between 0 and 2 and assign the result to a string (rock,paper or 
scissors)*/ 
const paperBtn = document.createElement("button");
paperBtn.setAttribute("id", "paperBtn");
paperBtn.setAttribute("style", "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin: 10px 10px 10px 20px; line-height: .3;");
paperBtn.innerText = "paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.setAttribute("id", "scissorsBtn");
scissorsBtn.setAttribute("style", "width: 150px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin-right: 10px; line-height: .3;");
scissorsBtn.innerText = "scissors";
const rockBtn = document.createElement("button");
rockBtn.setAttribute("id", "rockBtn");
rockBtn.setAttribute("style", "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; line-height: .3;");
rockBtn.innerText = "rock";
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);
document.body.appendChild(rockBtn);
const resultsDiv = document.createElement("div");
resultsDiv.setAttribute("id", "resultsDiv");
resultsDiv.setAttribute("style", "display: none;"); 
document.body.appendChild(resultsDiv);
const resultsP = document.createElement("p");
resultsP.setAttribute("id", "resultsP");
resultsP.setAttribute("style", "font-size: 22px; font-weight: bold; justify-content: center; line-height: 1.5; text-align: center; color: white;");
resultsDiv.append(resultsP);

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
  // gives an id "results" to the div
  // toggles the class "hide-results" to show the div and hides it when the game ends
  //div.classList.toggle("display-results");
  /* play round function compares the user's choice to the computer's choice and applies the rules of the 
  game to decide the winner of a single round */
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw");
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    if ((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "paper")) {
      computerScore++;
      console.log(`You loss! ${computerChoice} beats ${humanChoice}`);
      }
  }


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
// creating an event listeners so the buttons call playRound and gets user's choice every time they are clicked.
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      getHumanChoice();
    });

    const getHumanChoice = () => { 
      let humanChoice = button.innerText;
      return humanChoice
    }


    button.addEventListener("click", () => {
      round = round + 1;
      let computerSelection = getComputerChoice();
      let humanSelection = getHumanChoice();
      playRound(humanSelection, computerSelection);
      let div = document.getElementById("resultsDiv");
      if (!div.classList.contains("display-results")) {
        div.classList.toggle("display-results");
        div.setAttribute("style", "display: block; width: 100wh; height: 200px; background-color: #169FFF; padding: 5px; border-radius: 5px; justify-content: center; margin: 20px 10px; padding: 10px;");
      }
    
  document.getElementById("resultsP").innerText = (`Computer Chose: ${computerSelection} \r Player Chose: ${humanSelection} \r Player Points: ${humanScore} \r Computer Points: ${computerScore} \r Current Round: ${round}`); 
    // shows the results of the game in the div with id "results
    })
  })
}

game();
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
  console.log("Final Computer Score: " + computerSChoice); */