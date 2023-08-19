const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else if (choice === 2) {
        return "SCISSORS";
    }
}
let winCount = 0;
let loseCount = 0;

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return "It is a tie!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "SCISSORS") {
            winCount++
            return "You win! Rock beats Scissors.";
        } else {
            loseCount++
            return "You lose! Paper beats Rock."}
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "PAPER") {
            winCount++
            return "You win! Scissors beats Paper.";
        } else {
            loseCount++
            return "You lose! Rock beats Scissors.";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            winCount++
            return "You win! Paper beats Rock.";
        } else {
            loseCount++
            return "You lose! Scissors beats Paper.";
        }
    }
}
const game = () => {
    for (let i = 1; i < 6; i++) {
        console.log(playRound(prompt().toUpperCase(), getComputerChoice()));
    }
}
console.log(game())