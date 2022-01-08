'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const boxNumber = function (width) {
  document.querySelector('.number').style.width = width;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayText = function (title) {
  document.querySelector('h1').textContent = title;
};

const inputDisabled = function (boolean) {
  document.querySelector('.guess').disabled = boolean;
};

// Btn guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Start again
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayScore(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displaySecretNumber('?');
    document.querySelector('.guess').value = '';
    changeBackground('#222');
    boxNumber('15rem');
    displayText('Guess My Number!');
    inputDisabled(false);
  });

  // When there is no input
  if (!guess) {
    displayMessage('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displaySecretNumber(secretNumber);
    displayMessage('Correct Number!');
    changeBackground('#60b347');
    boxNumber('30rem');
    inputDisabled(true);

    // Updating highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
      changeBackground('#b34747');
      boxNumber('30rem');
      displaySecretNumber(secretNumber);
      displayText('Oh no, the correct number was:');
      inputDisabled(true);
    }
  }
});
