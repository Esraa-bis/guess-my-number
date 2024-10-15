// 'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent ='🎉Coreect Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=21;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

const display = function (selector, content) {
  document.querySelector(selector).textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  // when no number

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number! ⛔';
    display('.message', 'No Number! ⛔');
    // when player wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number! 🏆';
    display('.message', 'Correct Number! 🏆');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when too high
  // else if (guess > number) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📉Too High';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Loose The Game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // when its a wrong number
  else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > number ? '📈 Too high!' : '📉 Too low!';
      display('.message', guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      display('.message', '💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // // when too low
  // else if (guess < number) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈Too Low';
  //     document.querySelector('.score').textContent = --score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You Loose The Game ';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  display('.message', 'Start guessing...');
  display('.score', score);
  // document.querySelector('.score').textContent = score;
  display('.number', '?');
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
