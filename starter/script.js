'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Global variables
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;

//Switch player function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling dice functionality

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a number between 1 to 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice img
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    //3.Check for rolled 1: if true, switch to next player

    if (diceNumber !== 1) {
      //add diceNumber to the current score
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

//add function to button hold

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player's score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if the player score is >=100
    if (scores[activePlayer] >= 20) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

//set current values to zero
const setValuesZero = function () {
  console.log(document.querySelectorAll('.score').textContent);
  scores[0] = 0;
  scores[1] = 0;
  document.querySelectorAll('.score').textContent = 0;
  document.querySelectorAll('.current-score').textContent = 0;
};

//add function to button new game

btnNew.addEventListener('click', function () {
  if (!playing) {
    playing = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEl.classList.remove('hidden');
  } else {
    setValuesZero();
  }
});
