const readline = require("readline");

const drawBoardState = require("./view");

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
const selectorPosition = { x: 0, y: 0 };

const setSelectorChar = () => {};

drawBoardState(boardState);

//console.clear();

//clear and interval is solution for blinking and shit.

// setInterval(
//   console.log,
//   1500,
//   insertSelectBoarder(fillLessLetters(), { x: 1, y: 1 })
// );
