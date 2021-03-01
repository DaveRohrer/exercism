const readline = require("readline");

const {
  drawBoardState,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
} = require("./view");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); //remove standard node keypress events and take full control

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit(); // eslint-disable-line no-process-exit\
  } else if (key.name === "right") {
    const desiredPosition = {
      x: selectorPosition.x + 1,
      y: selectorPosition.y,
    };
    moveSelectorPosition(desiredPosition);
  }
});

const boardState = [
  ["x", "o", "blank"],
  ["blank", "blank", "x"],
  ["blank", "o", "blank"],
];

const selectorPosition = { x: 2, y: 2 };

drawBoardState(boardState, selectorPosition);

moveSelectorPosition = (desiredPosition) => {
  if (desiredPosition.x < 0) {
    desiredPosition.x = 2;
  }
  if (desiredPosition.y < 0) {
    desiredPosition.y = 2;
  }
  selectorPosition.x = desiredPosition.x % 3;
  selectorPosition.y = desiredPosition.y % 3;
  resetSelectorCharacter();
  drawBoardState(boardState, selectorPosition);
};

const selectorTic = () => {
  updateSelectorCharacterIndex();
  drawBoardState(boardState, selectorPosition);
};
setInterval(selectorTic, 700); //TODO need to reset this when we press a button
