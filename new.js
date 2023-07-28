// JavaScript code
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
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
let round = 0;
let gameEnded = false; //variable to track if the game has ended

function playRound(playerSelection) {
    if (gameEnded) return; // If the game has ended, don't proceed with any more rounds

    const computerSelection = getComputerChoice();
    const result = playerRound(playerSelection, computerSelection);

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = result;

    updateScores(result);

    round++;
    if (round === 5) {
        showFinalResult();
    }
}

function updateScores(result) {
    if (result.startsWith('You win!')) {
        playerScore++;
    } else if (result.startsWith('You lose!')) {
        computerScore++;
    } else {
        playerScore++;
        computerScore++;
    }
}

function showFinalResult() {
    const finalResultDiv = document.getElementById('final-result');
    if (playerScore > computerScore) {
        finalResultDiv.textContent = 'Congratulations! You won the game!';
    } else if (playerScore < computerScore) {
        finalResultDiv.textContent = 'Game Over! You lost the game!';
    } else {
        finalResultDiv.textContent = 'It\'s a tie! The game is drawn.';
    }

    gameEnded = true; // Set the gameEnded flag to true since the game is over
    // Hide the play button and show the reset button
    document.getElementById('play').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
}

// Event listener for "Play" button click
document.getElementById('play').addEventListener('click', function() {
    // Reset the game state
    playerScore = 0;
    computerScore = 0;
    round = 0;
    gameEnded = false;

    // Clear the final result message if any
    const finalResultDiv = document.getElementById('final-result');
    finalResultDiv.textContent = '';

    // Add back the event listeners for the buttons
    document.getElementById('rock').addEventListener('click', function() {
        playRound('rock');
    });

    document.getElementById('paper').addEventListener('click', function() {
        playRound('paper');
    });

    document.getElementById('scissors').addEventListener('click', function() {
        playRound('scissors');
    });

    // Start the game
    playRound();
});

// Event listener for "Reset" button click
document.getElementById('reset').addEventListener('click', function() {
    // Reset the game state
    playerScore = 0;
    computerScore = 0;
    round = 0;
    gameEnded = false;

    // Clear the final result message
    const finalResultDiv = document.getElementById('final-result');
    finalResultDiv.textContent = '';

    // Hide the reset button and show the play button
    document.getElementById('reset').style.display = 'none';
    document.getElementById('play').style.display = 'block';

    // Start the game
    playRound();
});
