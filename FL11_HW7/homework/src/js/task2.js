let wannaPlay;
let maximumPrize;
let maxRandRange;
let playAgain;

let randomNumber = 0;
let totalPrize = 0;
let prize = 100;
let counter = 3;
let prizeDecrise = 25;
let rangIncrease = 4;
let prizeIncrease = 2;
let rangeUpTo = 8;
let numberGuesses = 0;
let attempt = 3;

wannaPlay = confirm('Do you want to play a game?');
if (!wannaPlay ) {
  alert('You did not become a billionaire, but can.');
} else {
  randomNumber = Math.floor(Math.random() * rangeUpTo + 1);
  for (let i = 0; i < attempt; i++) {
    numberGuesses = parseInt(prompt('Choose a number from 0 to ' + rangeUpTo + '\n Number of attempts that you have: ' + counter + '\n Total prize: ' + totalPrize +
        '\n Possible prize on current attempt: ' + prize, ''));
    counter -= 1;
    if (counter === 0) {
      alert('You lose. Thank you for your participation.');
      break;
    }
    if (numberGuesses === randomNumber) {
      totalPrize += prize;
      alert('You have won ' + prize + ' $');
      playAgain = confirm('Congratulation, you won! Your prize is:' + totalPrize + ' $. Do you want to continue?');
      if (playAgain === false) {
        break;
      } else {
        rangeUpTo += rangIncrease;
        prize *= prizeIncrease;
        continue;
      }
    } else {
      prize = prize - prizeDecrise;
      playAgain = confirm('You were wrong! Your prize is:' + prize + ' $. Do you want to continue?');
      if (!playAgain) {
        alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
        break;
      }
    }
  }
}