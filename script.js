function game() {
  let playerWinCount;
  let computerWinCount;
  for (playerWinCount = 0, computerWinCount = 0; (playerWinCount + computerWinCount) < 5; ) { 
    const playerSelection = capitalize(prompt('Choose one:   Rock    Paper   Scissors', '')); 
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`You played ${playerSelection} \nThe computer played ${computerSelection} \n${playRound(playerSelection, computerSelection)}`);
    if (playRound(playerSelection, computerSelection) === `You Win! ${playerSelection} beats ${computerSelection}`) 
    {
      if (checkEndGame(playerWinCount) === true) 
      {
        return console.log(`Congratulations! You Won!`);
      } else {
        playerWinCount++;
        console.log(`The score is ${playerWinCount} - ${computerWinCount}. \nBest of 5. Go again`);
      }
    } else if (playRound(playerSelection, computerSelection) === `You Lose! ${computerSelection} beats ${playerSelection}`) {
      if (checkEndGame(computerWinCount)) {
        return console.log(`You lost the game. Better luck next time!`);
      } else {
        computerWinCount++;
        console.log(`The score is ${playerWinCount} - ${computerWinCount}. \nBest of 5. Go again`);
      }
    } else {
      console.log(`The score is ${playerWinCount} - ${computerWinCount}. \nBest of 5. Go again`);
    }
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You tied! Replay the round.`;
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

function checkEndGame(winCount) {
  return winCount === 2;
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