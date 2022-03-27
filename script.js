// let computerSelection;
// let playerSelection;
let computerScore = 0;
let playerScore = 0;

const headerContainer = document.querySelector('#header-container');
const result = document.createElement('div');
const message = document.createElement('p');
const score = document.createElement('div');

result.classList.add('result');
message.classList.add('message');
score.classList.add('score');

result.appendChild(message);
result.appendChild(score);
headerContainer.appendChild(result);

score.textContent = `Computer ${computerScore} : ${playerScore} You`;

function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else
        return "Scissors";
}

const psButtons = document.querySelectorAll('#ps-button input');
psButtons.forEach((psButton) => {
    psButton.addEventListener('click', () => {
        playRound(computerPlay(), psButton.value);
    });
});

function playRound(computerSelection, playerSelection) {
    // "What do you choose between Rock / Paper / Scissors?"
    // let roundResult,
    //     roundResultMessage;
    if (computerSelection === playerSelection) {
        // roundResult = 1;
        // roundResultMessage = "This is a draw match.";
        message.textContent = "This is a draw round.";
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    } else if ((computerSelection === "Rock" && playerSelection === "Paper") || 
               (computerSelection === "Paper" && playerSelection === "Scissors") || 
               (computerSelection === "Scissors" && playerSelection === "Rock")) {
        // roundResult = 2;
        // roundResultMessage = `You win! ${playerSelection} beat(s) ${computerSelection}.`;
        playerScore++;
        message.textContent = `You win this round! ${playerSelection} > ${computerSelection}.`;
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    } else {
        // roundResult = 0;
        // roundResultMessage = `You lose! ${playerSelection} lose(s) to ${computerSelection}.`;
        computerScore++;
        message.textContent= `You lose this round! ${playerSelection} < ${computerSelection}.`;
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    }
    // return [roundResult, roundResultMessage];
    if (computerScore == 5) {
        
    }
}

// function game() {
//     let computerScore = 0;
//     let playerScore = 0;
//     let result1;
//     for (let i = 0; i < 5; i++) {
//         result1 = playRound;
//         const roundResult = result1[0],
//               roundResultMessage = result1[1];
//         if (roundResult === 0) {
//             computerScore++;
//             console.log(roundResultMessage);
//         } else if (roundResult === 2) {
//             playerScore++;
//             console.log(roundResultMessage);
//         } else {
//             console.log(roundResultMessage);
//         }
//     }
//     if (computerScore < playerScore) {
//         console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nCongratulation! You win the game!`);
//     } else if (computerScore > playerScore) {
//         console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nOh no! You lose...`);
//     } else {
//         console.log(`Final score: Computer ${computerScore} : ${playerScore} You\nThe game ended in a draw.`);
//     }
// }

// game();