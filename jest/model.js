const {
  updateView,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

let boardState = [];
let selectorPosition = {};
let selectorTicTimeout;
let playersTurn;

const selectorTic = () => {
  updateSelectorCharacterIndex();
  updateView(boardState, selectorPosition, topMessage(playersTurn));
};

const setSelectorInterval = () => {
  return setInterval(selectorTic, 700);
};

const moveSelector = (desiredDirection) => {
  switch (desiredDirection) {
    case "right":
      if (selectorPosition.x < 2) {
        selectorPosition.x++;
      }
      break;
    case "left":
      if (selectorPosition.x > 0) {
        selectorPosition.x--;
      }
      break;
    case "up":
      if (selectorPosition.y > 0) {
        selectorPosition.y--;
      }
      break;
    case "down":
      if (selectorPosition.y < 2) {
        selectorPosition.y++;
      }
      break;
    default:
      break;
  }
  clearInterval(selectorTicTimeout);
  selectorTicTimeout = setSelectorInterval();
  resetSelectorCharacter();
  updateView(boardState, selectorPosition, topMessage(playersTurn));
};

const initializeModel = () => {
  boardState = [
    ["blank", "blank", "blank"],
    ["blank", "blank", "blank"],
    ["blank", "blank", "blank"],
  ];
  selectorPosition.x = 0;
  selectorPosition.y = 0;
  selectorTicTimeout = setSelectorInterval();
  playersTurn = "X";

  updateView(boardState, selectorPosition, topMessage(playersTurn));
};

const placeLetter = () => {
  if (
    boardState[selectorPosition.y][selectorPosition.x] === "blank" &&
    checkForWinner() === "no winner"
  ) {
    boardState[selectorPosition.y][
      selectorPosition.x
    ] = playersTurn.toLowerCase();
    flipTurn();
  }
  updateView(boardState, selectorPosition, topMessage(playersTurn));
};

//TODO consider changing this code to get the correct player turn just from the number of
//xs and os in the array. Could remove that variable from other functions too if we wanted
const flipTurn = () => {
  if (playersTurn === "X") {
    playersTurn = "O";
  } else {
    playersTurn = "X";
  }
};

const checkForWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (
      boardState[i][0] === boardState[i][1] &&
      boardState[i][1] === boardState[i][2] &&
      boardState[i][0] !== "blank"
    ) {
      return boardState[i][0];
    } else if (
      boardState[0][i] === boardState[1][i] &&
      boardState[1][i] === boardState[2][i] &&
      boardState[0][i] !== "blank"
    ) {
      return boardState[0][i];
    }
  }
  if (
    ((boardState[0][0] === boardState[1][1] &&
      boardState[1][1] === boardState[2][2]) ||
      (boardState[2][0] === boardState[1][1] &&
        boardState[1][1] === boardState[0][2])) &&
    boardState[2][2] !== "blank"
  ) {
    return boardState[1][1];
  }
  return "no winner";
};

const topMessage = (playersTurn) => {
  return checkForWinner() === "no winner"
    ? `Player ${playersTurn}'s Turn`
    : `Player ${checkForWinner().toUpperCase()} Wins!`;
};

module.exports = { moveSelector, initializeModel, placeLetter };
