let computerScore = 0;
let playerScore = 0;

// Select the header div
const headerContainer = document.querySelector('#header-container');

// Create a div to display result (message and score are inside result)
const result = document.createElement('div');
const message = document.createElement('p');
const score = document.createElement('div');

// Add classes to result elements
result.classList.add('result');
message.classList.add('message');
score.classList.add('score');

// Append elements to the header div
result.appendChild(message);
result.appendChild(score);
headerContainer.appendChild(result);

// Initialising score
score.textContent = `Computer ${computerScore} : ${playerScore} You`;

// Computer random selection
function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        return "Rock";
    } else if (x === 2) {
        return "Paper";
    } else
        return "Scissors";
}

// Enable the buttons
const psButtons = document.querySelectorAll('#choose');
psButtons.forEach((psButton) => {
    psButton.addEventListener('click', () => {
        playRound(computerPlay(), psButton.value); // value Rock / Paper / Scissors
    });
});

// Fuction disable when done
function disableButtons() {
    psButtons.forEach(psButton => {
        psButton.disabled = true;
    });
}

// Fuction to play each round
function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.textContent = "This is a draw round.";
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    } else if ((computerSelection === "Rock" && playerSelection === "Paper") || 
               (computerSelection === "Paper" && playerSelection === "Scissors") || 
               (computerSelection === "Scissors" && playerSelection === "Rock")) {
        playerScore++;
        message.textContent = `You win this round! ${playerSelection} > ${computerSelection}.`;
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    } else {
        computerScore++;
        message.textContent = `You lose this round! ${playerSelection} < ${computerSelection}.`;
        score.textContent = `Computer ${computerScore} : ${playerScore} You`;
    }
    if (computerScore === 5) {          // Compute wins
        message.textContent = "Oh no! You lose the game...";
        disableButtons();
    } else if (playerScore === 5) {     // Player wins
        message.textContent = "Congratulations! You win the game!";
        disableButtons();
    }
}
