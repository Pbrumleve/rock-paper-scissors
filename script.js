function game() {
  let playerWins;
  let computerWins;
  for (playerWins = 0, computerWins = 0; (playerWins + computerWins) < 5; ) { 
    const playerSelection = capitalize(prompt('Choose one:   Rock    Paper   Scissors', '')); 
    const computerSelection = computerPlay();
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
    if (playRound(playerSelection, computerSelection) === `You Win! ${playerSelection} beats ${computerSelection}`) {
      playerWins++;
      console.log(`You played ${playerSelection} \nThe computer played ${computerSelection} \n${playRound(playerSelection, computerSelection)} \nThe score is ${playerWins} - ${computerWins}. \nBest of 5. Go again`);
    } else if (playRound(playerSelection, computerSelection) === `You Lose! ${computerSelection} beats ${playerSelection}`) {
      computerWins++;
      console.log(`You played ${playerSelection} \nThe computer played ${computerSelection} \n${playRound(playerSelection, computerSelection)} \nThe score is ${playerWins} - ${computerWins}. \nBest of 5. Go again`);
    } else{
      console.log(`You played ${playerSelection} \nThe computer played ${computerSelection} \n${playRound(playerSelection, computerSelection)} \nThe score is ${playerWins} - ${computerWins}. \nBest of 5. Go again`);
    }
  }
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