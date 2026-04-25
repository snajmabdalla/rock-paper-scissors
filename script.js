function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let randomChoice;

  if (randomNumber === 1) {
    randomChoice = "Rock";
  } else if (randomNumber === 2) {
    randomChoice = "Paper";
  } else {
    randomChoice = "Scissors";
  }

  return randomChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper or Scissors? Your choice: ");

  if (humanChoice === null) {
    return null;
  } else {
    humanChoice = humanChoice.toLowerCase();
  }

  if (humanChoice === "rock") {
    humanChoice = "Rock";
  } else if (humanChoice === "paper") {
    humanChoice = "Paper";
  } else if (humanChoice === "scissors") {
    humanChoice = "Scissors";
  } else {
    return null;
  }

  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
      humanScore++;
      return "You win! Rock beats Scissors";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
      humanScore++;
      return "You win! Scissors beats Paper";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
      humanScore++;
      return "You win! Paper beats Rock";
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
      computerScore++;
      return "You lose! Rock beats Scissors";
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
      computerScore++;
      return "You lose! Scissors beats Paper";
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
      computerScore++;
      return "You lose! Paper beats Rock";
    } else {
      return "It's a tie!";
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    if (humanChoice === null) {
      console.log("Your answer was incorrect. Game over. Try again.");
      return null;
    }

    console.log(playRound(humanChoice, getComputerChoice()));
  }

  if (humanScore > computerScore) {
    console.log(
      `You won overall! Your score: ${humanScore}, Computer score: ${computerScore}`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lost overall! Your score: ${humanScore}, Computer score: ${computerScore}`,
    );
  } else {
    console.log(
      `It's a tie overall! Your score: ${humanScore}, Computer score: ${computerScore}`,
    );
  }
}

playGame();
