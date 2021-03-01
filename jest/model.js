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
  updateView(boardState, selectorPosition, playersTurnMessage(playersTurn));
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
  updateView(boardState, selectorPosition, playersTurnMessage(playersTurn));
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

  updateView(boardState, selectorPosition, playersTurnMessage(playersTurn));
};

const placeLetter = () => {
  if (boardState[selectorPosition.y][selectorPosition.x] === "blank") {
    boardState[selectorPosition.y][
      selectorPosition.x
    ] = playersTurn.toLowerCase();
    flipTurn();
  }
  updateView(boardState, selectorPosition, playersTurnMessage(playersTurn));
};

const flipTurn = () => {
  if (playersTurn === "X") {
    playersTurn = "O";
  } else {
    playersTurn = "X";
  }
};

const playersTurnMessage = (playersTurn) => {
  return `Player ${playersTurn}'s Turn`;
};

module.exports = { moveSelector, initializeModel, placeLetter };
