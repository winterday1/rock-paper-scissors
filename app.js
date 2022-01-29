function computerPlay() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    console.log("rock");
  } else if (random == 2) {
    console.log("paper");
  } else if (random == 3) {
    console.log("scissors");
  }
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = "scissors";

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection)
    return `${playerSelection} vs ${computerSelection} - it's a draw!`;
  else if (playerSelection == "rock" && computerSelection == "scissors")
    return `You win - ${playerSelection} beats ${computerSelection}`;
  else if (playerSelection == "scissors" && computerSelection == "paper")
    return `You win - ${playerSelection} beats ${computerSelection}`;
  else if (playerSelection == "paper" && computerSelection == "rock")
    return `You win - ${playerSelection} beats ${computerSelection}`;
  else return `You lose - ${computerSelection} beats ${playerSelection}`;
}

function game() {
  for (let i = 0; i < 4; i++) {
    playRound(playerSelection, computerSelection);
  }
}

console.log(game);
