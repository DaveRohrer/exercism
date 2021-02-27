const readline = require("readline");
const { board, x, o } = require("./assets");

const selectBoarder1 = " ";
const selectBoarder2 = "▒";

const boardPixelWidth = board.substr(0, board.indexOf("\n") + 1).length; //We do want to preserve new lines here
const boardPixelHeight = board.match(/\n/g).length + 1;
const letterPixelWidth = x.substr(0, x.indexOf("\n")).length; //We wont preserve newlines when inserting letters
const letterPixelHeight = x.match(/\n/g).length + 1;
const gridPixelThickness = 1;
const cellPaddingThickness = 1;

const drawPosition = { x: 1, y: 1 };

const insertLetter = (board, drawPosition, letter) => {
  let boardPixels = [...board];
  let xPixelated = letter.match(/[^\n]/g); //remove newlines

  for (let i = 0; i < letterPixelWidth * letterPixelHeight; i++) {
    const iBuffer =
      drawPosition.y * letterPixelHeight +
      gridPixelThickness +
      cellPaddingThickness +
      gridPixelThickness * drawPosition.y +
      cellPaddingThickness * 2 * drawPosition.y;
    const jBuffer =
      drawPosition.x * letterPixelWidth +
      gridPixelThickness +
      cellPaddingThickness +
      gridPixelThickness * drawPosition.x +
      cellPaddingThickness * 2 * drawPosition.x;
    const iIndex = Math.trunc(i / letterPixelWidth);
    const jIndex = i % letterPixelWidth;

    boardPixels[(iIndex + iBuffer) * boardPixelWidth + (jIndex + jBuffer)] =
      xPixelated[iIndex * letterPixelWidth + jIndex];
  }
  return boardPixels.join("");
};

const insertSelectBoarder = (
  board,
  selectPosition,
  selectColor = selectBoarder2
) => {
  let boardPixels = [...board];
  const selectWidth = 10;
  const selectHeight = 8;
  for (let i = 0; i < selectWidth * selectHeight; i++) {
    const iBuffer =
      selectPosition.y * selectHeight +
      gridPixelThickness +
      gridPixelThickness * selectPosition.y;
    const jBuffer =
      selectPosition.x * selectWidth +
      gridPixelThickness +
      gridPixelThickness * selectPosition.x;
    const iIndex = Math.trunc(i / selectWidth);
    const jIndex = i % selectWidth;

    const currBoardIndex =
      (iIndex + iBuffer) * boardPixelWidth + (jIndex + jBuffer);
    if (boardPixels[currBoardIndex] === "░")
      boardPixels[currBoardIndex] = selectColor;
  }
  return boardPixels.join("");
};

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); //remove standard node keypress events and take full control

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit(); // eslint-disable-line no-process-exit
  } else {
    //console.log(key.name);
  }
});

const boardState = [[]];

const drawBoardState = (boardState) => {};

console.clear();
let temp = insertLetter(board, { x: 1, y: 1 }, x);
temp = insertLetter(temp, { x: 0, y: 2 }, o);
temp = insertSelectBoarder(temp, { x: 0, y: 2 });
console.log(temp);

//clear and interval is solution for blinking and shit.

// setInterval(
//   console.log,
//   1500,
//   insertSelectBoarder(fillLessLetters(), { x: 1, y: 1 })
// );
