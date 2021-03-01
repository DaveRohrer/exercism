const {
  drawBoardState,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

const boardState = [
  ["x", "o", "blank"],
  ["blank", "blank", "x"],
  ["blank", "o", "blank"],
];

const selectorPosition = { x: 2, y: 2 };

drawBoardState(boardState, selectorPosition);

const selectorTic = () => {
  updateSelectorCharacterIndex();
  drawBoardState(boardState, selectorPosition);
};

const setSelectorInterval = () => {
  return setInterval(selectorTic, 700);
};
let selectorTicTimeout = setSelectorInterval();
moveSelector = (desiredDirection) => {
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

module.exports = moveSelector;
