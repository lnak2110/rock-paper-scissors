let computerSelection;
function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;
    if (x === 1) {
        computerSelection = "Rock";
    } else if (x === 2) {
        computerSelection = "Paper";
    } else
        computerSelection = "Scissors";
    return computerSelection;
}

console.log(computerPlay());