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

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRound(computerSelection, "Rock")); 
const paper = document.querySelector('#paper');
paper.addEventListener('click', playRound(computerSelection, "Paper"));
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playRound(computerSelection, "scissors"));

function playRound(computerSelection, playerSelection) {
    // "What do you choose between Rock / Paper / Scissors?"
    let roundResult,
        roundResultMessage;
    if (computerSelection === playerSelection) {
        roundResult = 1;
        roundResultMessage = "This is a draw match.";
    } else if ((computerSelection === "Rock" && playerSelection === "Paper") || 
               (computerSelection === "Paper" && playerSelection === "Scissors") || 
               (computerSelection === "Scissors" && playerSelection === "Rock")) {
        roundResult = 2;
        roundResultMessage = `You win! ${playerSelection} beat(s) ${computerSelection}.`;
    } else {
        roundResult = 0;
        roundResultMessage = `You lose! ${playerSelection} lose(s) to ${computerSelection}.`;
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