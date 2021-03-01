const {
  drawBoardState,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

let boardState = [];
let selectorPosition = {};
let selectorTicTimeout;

const selectorTic = () => {
  updateSelectorCharacterIndex();
  drawBoardState(boardState, selectorPosition);
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
  drawBoardState(boardState, selectorPosition);
};

const initializeModel = () => {
  boardState = [
    ["x", "o", "blank"],
    ["blank", "blank", "x"],
    ["blank", "o", "blank"],
  ];
  selectorPosition.x = 0;
  selectorPosition.y = 0;
  selectorTicTimeout = setSelectorInterval();

  drawBoardState(boardState, selectorPosition);
};

module.exports = { moveSelector, initializeModel };
