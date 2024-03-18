
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection;
let computerSelection;

const score = document.createElement('div');
score.classList.add('score');

const results = document.createElement('div');
results.classList.add('results');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', playRound());
})

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  const content = document.querySelector('#container');
  if (checkEndGame(playerWinCount, computerWinCount)) {
      return;
  } else {
    if (playerSelection === computerSelection) {
      results.textContent = `You played ${playerSelection}.
                          The computer played ${computerSelection}.
                          You tied! Replay the round.`;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      content.appendChild(results);
      return content.appendChild(score)
    } else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
               (playerSelection === 'Paper' && computerSelection === 'Rock') || 
               (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
      playerWinCount++;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      if (checkEndGame(playerWinCount) === true) {
        results.textContent = `You played ${playerSelection}.
                            The computer played ${computerSelection}.
                            You Win! ${computerSelection} beats ${playerSelection}. 
                            Congratulations! You Won!`;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      content.appendChild(results);
      return content.appendChild(score)
      } else {
        results.textContent = `You played ${playerSelection}.
                            The computer played ${computerSelection}.
                            You Win! ${playerSelection} beats ${computerSelection}.
                            Best of 5. Go again.`;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      content.appendChild(results);
      return content.appendChild(score)
      }
    } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || 
               (playerSelection === 'Paper' && computerSelection === 'Scissors') || 
               (playerSelection === 'Scissors' && computerSelection === 'Rock')) {
      computerWinCount++;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      if (checkEndGame(computerWinCount) === true) {
        results.textContent = `You played ${playerSelection}.
                            The computer played ${computerSelection}.
                            You Lose! ${computerSelection} beats ${playerSelection}.
                            You lost the game. Better luck next time!`;
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      content.appendChild(results);
      return content.appendChild(score)
      } else {
        results.textContent = `You played ${playerSelection}. \n
                            The computer played ${computerSelection}.
                            You Lose! ${computerSelection} beats ${playerSelection}. 
                            Best of 5. Go again.`;
    
      score.textContent = `The score is ${playerWinCount} - ${computerWinCount}.`;
      content.appendChild(results);
      return content.appendChild(score)
      }
    } else {
      return `Error. You must click Rock, Paper, or Scissors. Try again!`;
    }
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

function checkEndGame(playerWinCount, computerWinCount) {
  return playerWinCount === 5 || computerWinCount ===5;
}