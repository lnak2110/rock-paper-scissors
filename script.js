let computerSelection;
let playerSelection;

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
    playerSelection = prompt("What do you choose between Rock / Paper / Scissors?");
    let playerS = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let roundResult,
        roundResultMessage;
    if (computerSelection === playerS) {
        roundResult = 1;
        roundResultMessage = "This is a draw match.";
    } else if ((computerSelection === "Rock" && playerS === "Paper") || 
               (computerSelection === "Paper" && playerS === "Scissors") || 
               (computerSelection === "Scissors" && playerS === "Rock")) {
        roundResult = 2;
        roundResultMessage = `You win! ${playerS} beat(s) ${computerSelection}.`;
    } else {
        roundResult = 0;
        roundResultMessage = `You lose! ${playerS} lose(s) to ${computerSelection}.`;
    }
    return [roundResult, roundResultMessage];
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let result1;
    for (let i = 0; i < 5; i++) {
        result1 = playRound(computerSelection = computerPlay(), playerSelection);
        const roundResult = result1[0],
              roundResultMessage = result1[1];
        if (roundResult === 0) {
            computerScore++;
            console.log(roundResultMessage);
        } else if (roundResult === 2) {
            playerScore++;
            console.log(roundResultMessage);
        } else {
            console.log(roundResultMessage);
        }
    }
    if (computerScore < playerScore) {
        console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nCongratulation! You win the game!`);
    } else if (computerScore > playerScore) {
        console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nOh no! You lose...`);
    } else {
        console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nThe game ended in a draw.`);
    }
}

game();