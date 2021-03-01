const readline = require("readline");

const { drawBoardState, updateSelectorCharacterIndex } = require("./view");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); //remove standard node keypress events and take full control

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit(); // eslint-disable-line no-process-exit
  } else {
    //console.log(key.name);
  }
});

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
setInterval(selectorTic, 700);
