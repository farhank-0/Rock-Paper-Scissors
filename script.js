const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function getPlayerChoice() {
    string = prompt('Choose: Rock, Paper or Scissors');
    string = string.toLowerCase().trim()
    if (string === 'rock' || string === 'paper' || string === 'scissors') {
        return string;
    } else {
       console.log('Invalid input, default value "rock" assumed');
       return 'rock';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie Play Again!');
    }
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerCount += 1;
        console.log('Computer Wins! Paper beats Rock!');
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerCount += 1;
        console.log('Player Wins! Rock beats Scissors!');
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerCount += 1;
        console.log('Player Wins! Paper beats Rock!');
    }
    if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerCount += 1;
        console.log('Computer Wins! Scissors beats Paper!');
    }
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerCount += 1;
        console.log('Computer Wins! Rock beats Scissors!');
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerCount += 1;
        console.log('Player Wins! Scissors beats Rock!');
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        console.log(`Player selection: ${playerSelection}, Computer selection: ${computerSelection}`);
        playRound(playerSelection, computerSelection);
    }
    console.log('Final Score Player: ', playerCount);
    console.log('Final Score Computer: ', computerCount);
    if (playerCount > computerCount){
        console.log('PLAYER WINS!');
    } else if (playerCount === computerCount) {
        console.log('TIE! TRY AGAIN!');
    } else {
        console.log('COMPUTER WINS!');
    }
}

let computerCount = 0;
let playerCount = 0;

game();