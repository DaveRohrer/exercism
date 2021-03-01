const {
  board,
  // x,
  //   o,
  letters,
  boardPixelWidth,
  letterPixelWidth,
  letterPixelHeight,
  gridPixelThickness,
  letterPaddingThickness,
  selectorChars,
  selectorPixelWidth,
  selectorPixelHeight,
  numberOfSelectorChars,
} = require("./assets");

const getLetterDrawingOffsets = (boardPosition) => {
  const yOffset = getDrawingOffset(
    boardPosition.y,
    letterPixelHeight,
    gridPixelThickness,
    letterPaddingThickness
  );
  const xOffset = getDrawingOffset(
    boardPosition.x,
    letterPixelWidth,
    gridPixelThickness,
    letterPaddingThickness
  );
  return { x: xOffset, y: yOffset };
};

getDrawingOffset = (drawPosition, length, gridThickness, cellPadding) => {
  return (
    drawPosition * length +
    gridThickness +
    cellPadding +
    gridThickness * drawPosition +
    cellPadding * 2 * drawPosition
  );
};

getSelectorDrawingOffsets = (boardPosition) => {
  const yOffset = getDrawingOffset(
    boardPosition.y,
    selectorPixelHeight,
    gridPixelThickness,
    0
  );
  const xOffset = getDrawingOffset(
    boardPosition.x,
    selectorPixelWidth,
    gridPixelThickness,
    0
  );
  return { x: xOffset, y: yOffset };
};

const insertLetter = (board, drawPosition, letter) => {
  let boardPixels = [...board];
  const cleanedLetter = letter.match(/[^\n]/g);

  for (let i = 0; i < letterPixelWidth * letterPixelHeight; i++) {
    const offsets = getLetterDrawingOffsets(drawPosition);
    const iIndex = Math.trunc(i / letterPixelWidth);
    const jIndex = i % letterPixelWidth;
    boardPixels[(iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x)] =
      cleanedLetter[iIndex * letterPixelWidth + jIndex];
  }
  return boardPixels.join("");
};

const insertSelectBoarder = (board, selectPosition, selectColor = " ") => {
  let boardPixels = [...board];
  for (let i = 0; i < selectorPixelWidth * selectorPixelHeight; i++) {
    const offsets = getSelectorDrawingOffsets(selectPosition);
    const iIndex = Math.trunc(i / selectorPixelWidth);
    const jIndex = i % selectorPixelWidth;
    const currBoardIndex =
      (iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x);
    if (boardPixels[currBoardIndex] === "░")
      boardPixels[currBoardIndex] = selectColor;
  }
  return boardPixels.join("");
};

const drawBoardState = (boardState) => {
  let boardStateDisplayString = board;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      //insertLetter(board);
      if (boardState[i][j] != "blank") {
        boardStateDisplayString = insertLetter(
          boardStateDisplayString,
          { x: j, y: i },
          letters[boardState[i][j]]
        );
      } else {
        //console.log("blankytime");
        //console.log(letters.x);
      }
    }
  }
  console.log(boardStateDisplayString);
};

// let temp = insertLetter(board, { x: 1, y: 1 }, x);
// temp = insertLetter(temp, { x: 0, y: 2 }, o);
// temp = insertSelectBoarder(temp, { x: 0, y: 2 });
// console.log(temp);

module.exports = drawBoardState;
