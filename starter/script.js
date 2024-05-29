'use strict';
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 20;
document.querySelector('.check').addEventListener('click', function () {
  if (score > 0) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
      document.querySelector('.message').textContent = '⚠️ No number';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🥳 Correct number :)';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      if (score > highScore) {
        console.log(score);
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess <= secretNumber) {
      document.querySelector('.message').textContent = '⬇️ Too low number !!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (guess >= secretNumber) {
      document.querySelector('.message').textContent = '⬆️ Too high number !!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '⚡You lost the game !!!';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
});
