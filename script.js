let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;
let computerSelection;
const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
})

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = event.target.id;
  if (playerSelection === computerSelection) {
    return console.log(`You played ${playerSelection} \n
                        The computer played ${computerSelection} \n
                        The score is ${playerWinCount} - ${computerWinCount}. \n
                        You tied! Replay the round.`);
  } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
             (playerSelection === 'Paper' && computerSelection === 'Rock') || 
             (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    playerWinCount++;
    if (checkEndGame(playerWinCount) === true) {
      document.querySelectorAll('button').disabled = true;
      return console.log(`You played ${playerSelection} \n
                          The computer played ${computerSelection} \n
                          You Win! ${computerSelection} beats ${playerSelection} \n 
                          The score is ${playerWinCount} - ${computerWinCount}. \n
                          Congratulations! You Won!`);
    } else {
      return console.log(`You played ${playerSelection} \n
                          The computer played ${computerSelection} \n
                          You Win! ${playerSelection} beats ${computerSelection} \n
                          The score is ${playerWinCount} - ${computerWinCount}. \n
                          Best of 5. Go again`);
    }
  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
             (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
             (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
    computerWinCount++;
    if (checkEndGame(computerWinCount) === true) {
      document.querySelectorAll('button').disabled = true;
      return console.log(`You played ${playerSelection} \n
                          The computer played ${computerSelection} \n
                          You Lose! ${computerSelection} beats ${playerSelection} \n 
                          The score is ${playerWinCount} - ${computerWinCount}. \n
                          You lost the game. Better luck next time!`);
    } else {
      return console.log(`You played ${playerSelection} \n
                          The computer played ${computerSelection} \n
                          You Lose! ${computerSelection} beats ${playerSelection} \n 
                          The score is ${playerWinCount} - ${computerWinCount}. \n
                          Best of 5. Go again`);
    }
  } else {
    return `Error. You must click Rock, Paper, or Scissors. Try again!`;
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

function checkEndGame(winCount) {
  return winCount === 3;
}

function capitalize(str) {
  if (str === '' || str === null) {
    return 'no entry';
  } else {
    let firstLetterCap = str.charAt(0).toUpperCase();
    let lowerCase = str.substr(1).toLowerCase();
    return firstLetterCap + lowerCase;
  }
}