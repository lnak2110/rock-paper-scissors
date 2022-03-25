const computerSelection = computerPlay();
const playerSelection = "Rock";

function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else
        return "Scissors";
}

function playRound(computerSelection, playerSelection) {
    let playerS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (computerSelection === playerS) {
        return "This is a draw match.";
    } else if ((computerSelection === "Rock" && playerS === "Paper") || 
               (computerSelection === "Paper" && playerS === "Scissors") || 
               (computerSelection === "Scissors" && playerS === "Rock")) {
        return `You win! ${playerS} beat(s) ${computerSelection}.`;
    } else {
        return `You lose! ${playerS} lose(s) to ${computerSelection}.`;
    }
}

function game() {
    
}