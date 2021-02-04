const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;
const DRAW = 'DRAW';
const PLAYER_WIN = 'Player wins!';
const COMP_WIN = 'Machine wins!';
const SUM_OP = 'ADD';
const SUB_OP = 'SUBSTRACTION';

let gameIsRunning = false;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game starting...');
  const playerSelection = getPlayerMove();
  const computerChoice = compChoice();
  let winner;

  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice, playerSelection);
  }

  let msg = `Player chose ${
    playerSelection || DEFAULT_CHOICE
  } / Machine chose ${computerChoice}.\nResult => `;
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

// CALC

const calc = (cb, op, ...nums) => {
  const valNum = number => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const number of nums) {
    if (op === SUM_OP) {
      sum += valNum(number);
    } else {
      sum -= valNum(number);
    }
  }
  cb(sum);
};

// const subtractUp = (cb, ...nums) => {
//   let sum = 0;
//   for (const number of nums) {
//     sum -= number;
//   }
//   cb(sum);
// };

const showRes = (msg, res) => alert(`${msg}: ${res}`);

calc(
  showRes.bind(this, 'Result of adding all numbers'),
  'ADD',
  1,
  5,
  'fdsa',
  -3,
  6,
  10
);
calc(
  showRes.bind(this, 'Result of adding all numbers'),
  'ADD',
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
calc(
  showRes.bind(this, 'Result of subtracting all numbers'),
  'SUBSTRACTION',
  1,
  10,
  15,
  20
);

// CALC

// AUX FUNCS

const getPlayerMove = () => {
  const selection = prompt(
    `${ROCK} / ${PAPER} / ${SCISSORS} ?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid option! ${DEFAULT_CHOICE} chose by default.`);
    return;
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

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) =>
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

// AUX FUNCS
