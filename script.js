const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function onClick(playerSelection) {
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
        console.log('Tie Play Again!');
    }
    if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock'))
    {
        computerScore += 1;
        roundWinner = 'Computer!';
        console.log('Computer Wins!');
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper'))  
    {
        playerScore += 1;
        roundWinner = 'Player!';
        console.log('Player Wins!');
    }
}

let computerScore = 0;
let playerScore = 0;
let roundWinner = '';
let playerSelection = '';
let computerSelection = getComputerChoice();

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorbtn = document.getElementById('scissorbtn');

rockbtn.addEventListener('click', () => onClick('rock'));
paperbtn.addEventListener('click', () => onClick('paper'));
scissorbtn.addEventListener('click', () => onClick('scissors'));