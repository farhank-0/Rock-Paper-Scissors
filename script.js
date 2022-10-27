const choices = ['Rock', 'Paper', 'Scissors'];
let computerCount = 0;
let playerCount = 0;
let roundWinner = '';
let playerSelection = '';

const rockbtn = document.getElementById('rockbtn');
const paperbtn = document.getElementById('paperbtn');
const scissorbtn = document.getElementById('scissorbtn');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
const roundDis = document.getElementById('roundDis');
const roundInfo = document.getElementById('roundInfo');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockbtn.addEventListener('click', () => onClick('Rock'));
paperbtn.addEventListener('click', () => onClick('Paper'));
scissorbtn.addEventListener('click', () => onClick('Scissors'));
restartBtn.addEventListener('click', () => restartGame());

function getComputerChoice() {
    index = Math.floor(Math.random()*choices.length);
    return choices[index];
}

function onClick(playerSelection) {
    if (isGameOver() === false) {
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    updateChoices(playerSelection, computerSelection);
    } 
    if (isGameOver() === true && playerCount === 5) {
        endgameMsg.textContent = 'You Won!';
        openEndgameModal();
    }
    if (isGameOver() === true && computerCount === 5) {
        endgameMsg.textContent = 'You Lose!'
        openEndgameModal();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'Tie';
        roundDis.textContent = `Tie Play Again!`;
        roundInfo.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Rock'))
    {
        computerCount += 1;
        computerScore.textContent = `Computer: ${computerCount}`;
        roundWinner = 'Computer';
        roundDis.textContent = `Computer Wins!`;
        roundInfo.textContent = `${computerSelection} beats ${playerSelection}`;
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper'))  
    {
        playerCount += 1;
        playerScore.textContent = `Player: ${playerCount}`;
        roundWinner = 'Player';
        roundDis.textContent = `Player Wins!`;
        roundInfo.textContent = `${playerSelection} beats ${computerSelection}`;
    }
}

function updateChoices(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'Rock':
            playerSign.textContent = '✊';
            break;
        case 'Paper':
            playerSign.textContent = '✋';
            break;
        case 'Scissors':
            playerSign.textContent = '✌';
            break;
    }
    switch(computerSelection) {
        case 'Rock':
            computerSign.textContent = '✊';
            break;
        case 'Paper':
            computerSign.textContent = '✋';
            break;
        case 'Scissors':
            computerSign.textContent = '✌';
            break
    }
}

function isGameOver() {
    if (playerCount === 5 || computerCount === 5) {
        return true;
    } else {
        return false;
    }
}

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

  function restartGame() {
    computerCount = 0;
    playerCount = 0;
    roundWinner = '';
    playerSelection = '';
    computerSign.textContent = '?';
    playerSign.textContent = '?';
    playerScore.textContent = `Player: 0`;
    computerScore.textContent = `Computer: 0`;
    roundDis.textContent = `Choose your weapon`;
    roundInfo.textContent = `First to score 5 points win the game`;
    closeEndgameModal();
  }