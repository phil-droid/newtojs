// JavaScript code
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playerRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats paper';
    } else if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    }
}

let playerScore = 0;
let computerScore = 0;
let gameEnded = false; //variable to track if the game has ended

function playRound(playerSelection) {
    if (gameEnded) return; // If the game has ended, don't proceed with any more rounds

    const computerSelection = getComputerChoice();
    const result = playerRound(playerSelection, computerSelection);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;

    updateScores(result);

    if (playerScore >= 5 || computerScore >= 5) {
        showFinalResult();
    }
}

function updateScores(result) {
    if (result.startsWith('You win!')) {
        playerScore++;
    } else if (result.startsWith('You lose!')) {
        computerScore++;
    }
    // Update the score display
    document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function showFinalResult() {
    const finalResultDiv = document.getElementById('final-result');
    if (playerScore > computerScore) {
        finalResultDiv.textContent = 'Congratulations! You won the game!';
    } else {
        finalResultDiv.textContent = 'Game Over! You lost the game!';
    }

    gameEnded = true; // Set the gameEnded flag to true since the game is over
}

// Event listener for each selection button click
choices.forEach(choice => {
    document.getElementById(choice).addEventListener('click', function() {
        playRound(choice);
    });
});
