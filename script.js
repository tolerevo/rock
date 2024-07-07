/*this function gets a random integer between 0 and 2 and assign the result to a string (rock,paper or 
scissors)*/
const paperBtn = document.getElementById("paperBtn");
paperBtn.setAttribute(
  "style",
  "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin: 10px 10px 10px 20px; line-height: .3;",
);
paperBtn.innerText = "paper";
const scissorsBtn = document.getElementById("scissorsBtn");
scissorsBtn.setAttribute(
  "style",
  "width: 150px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; margin-right: 10px; line-height: .3;",
);
scissorsBtn.innerText = "scissors";
const rockBtn = document.getElementById("rockBtn");
rockBtn.setAttribute(
  "style",
  "width: 100px; height: 50px; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; line-height: .3;",
);
rockBtn.innerText = "rock";
const resultsDiv = document.getElementById("resultsDiv");
resultsDiv.setAttribute("style", "display: none;");
const resultsP = document.getElementById("resultsP");
resultsP.setAttribute(
  "style",
  "font-size: 22px; font-weight: bold; justify-content: center; line-height: 1.5; text-align: center; color: white;",
);
const resultsMessage = document.getElementById("resultsMessage");
resultsMessage.setAttribute(
  "style",
  "font-size: 22px; font-weight: bold; justify-content: center; line-height: 1.5; text-align: center; color: white;",
);
newGameBtn.setAttribute(
  "style",
  "display: none; width: 0px; height: 0px;",
);
/* game function compares the user's choice to the computer's choice and determines the winner, keeps the 
count of round played and stops the game when a player reaches 5 points. */
function game() {
  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  /* play round function compares the user's choice to the computer's choice and applies the rules of the 
  game to decide the winner of a single round */
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      resultsMessage.innerText = "Draw";
    }
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      resultsMessage.innerText = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    if (
      (humanChoice === "scissors" && computerChoice === "rock") ||
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "rock" && computerChoice === "paper")
    ) {
      computerScore++;
      resultsMessage.innerText = `You loss! ${computerChoice} beats ${humanChoice}`;
    }
    if (humanScore === 5) {
      resultsMessage.innerText = "You win!";
      resetGame();
    } else if (computerScore === 5) {
      resultsMessage.innerText = "You lose!";
      resetGame();
    }
  }
  const resetGame = () => {
    document.getElementById("resultsP").setAttribute("style", "display: none;");
    const newGameBtn = document.getElementById("newGameBtn");
    newGameBtn.setAttribute(
      "style",
      "width: 200px; height: auto; background-color: #169FFF; padding: 20px; border-radius: 5px; color: white; font-size: 18px; font-weight: bold; justify-content: center; line-height: .3;",
    );
    newGameBtn.innerText = "Play Again";
    newGameBtn.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      round = 0;
      const resultsP = document.getElementById("resultsP");
      resultsP.setAttribute(
        "style",
        "display: block; font-size: 22px; font-weight: bold; justify-content: center; line-height: 1.5; text-align: center; color: white;",
      );
      resultsP.innerText = `Current Round: ${round} C'mon let's play!`;
      newGameBtn.setAttribute(
        "style",
        "display: none; width: 0px; height: 0px;",
      );
      resultsMessage.innerText = "";
    });
  };

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
    button.addEventListener("click", function () {
      getHumanChoice();
    });

    const getHumanChoice = () => {
      let humanChoice = button.innerText;
      return humanChoice;
    };

    button.addEventListener("click", () => {
      round = round + 1;
      let computerSelection = getComputerChoice();
      let humanSelection = getHumanChoice();
      playRound(humanSelection, computerSelection);
      let div = document.getElementById("resultsDiv");
      if (!div.classList.contains("display-results")) {
        div.classList.toggle("display-results");
        div.setAttribute(
          "style",
          "display: block; width: 100wh; height: auto; background-color: #169FFF; padding: 5px; border-radius: 5px; justify-content: center; margin: 20px 10px; padding: 10px;",
        );
      }
      // shows the results of the game in the p tag with id "resultsP
      document.getElementById("resultsP").innerText =
        `Computer Chose: ${computerSelection} \r Player Chose: ${humanSelection} \r Player Points: ${humanScore} \r Computer Points: ${computerScore} \r Current Round: ${round}`;
    });
  });
}
game();
