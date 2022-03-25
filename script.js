function game() {
  for (let i = 0; i < 5; i++) {

  }
}


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `The computer played ${playerSelection}. You tied! Replay the round.`;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
             (playerSelection === 'Paper' && computerSelection === 'Rock') || 
             (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
             (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
             (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Invalid entry. You must enter Rock, Paper, or Scissors. Try again!`;
  }
}

const playerSelection = capitalize(prompt('Choose one:   Rock    Paper   Scissors', '')); 
const computerSelection = computerPlay();

function capitalize(str) {
  if (str === '' || str === null) {
    return 'no entry';
  } else {
    let firstLetterCap = str.charAt(0).toUpperCase();
    let lowerCase = str.substr(1).toLowerCase();
    return firstLetterCap + lowerCase;
  }
}

function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3);
  if (randomInt === 0) {
    return 'Rock';
  } else if (randomInt === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
