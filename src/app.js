const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const DRAW = 'DRAW';
const PLAYER_WIN = 'Player wins!';
const COMP_WIN = 'Machine wins!';

let gameIsRunning = false;

const getPlayerMove = () => {
  const selection = prompt(
    `${ROCK} / ${PAPER} / ${SCISSORS} ?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid option! ${DEFAULT_CHOICE} chose by default.`);
    return DEFAULT_CHOICE;
  }
  return selection;
};

const compChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? PLAYER_WIN
    : COMP_WIN;
// if (cChoice === pChoice) {
//   return DRAW;
// } else if (
//   (cChoice === ROCK && pChoice === PAPER) ||
//   (cChoice === PAPER && pChoice === SCISSORS) ||
//   (cChoice === SCISSORS && pChoice === ROCK)
// ) {
//   return PLAYER_WIN;
// } else {
//   return COMP_WIN;
// }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game starting...');
  const playerSelection = getPlayerMove();
  const computerChoice = compChoice();
  const winner = getWinner(computerChoice, playerSelection);
  let msg = `Player chose ${playerSelection} / Machine chose ${computerChoice}.\nResult => `;
  if (winner === DRAW) {
    msg = msg + DRAW;
  } else if (winner === PLAYER_WIN) {
    msg = msg + PLAYER_WIN;
  } else {
    msg = msg + COMP_WIN;
  }

  alert(msg);
  gameIsRunning = false;
});
