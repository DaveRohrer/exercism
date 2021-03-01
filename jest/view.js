const {
  board,
  letters,
  boardPixelWidth,
  boardPixelHeight,
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

const insertSelectBoarder = (board, selectorPosition) => {
  let boardPixels = [...board];
  for (let i = 0; i < selectorPixelWidth * selectorPixelHeight; i++) {
    const offsets = getSelectorDrawingOffsets(selectorPosition);
    const iIndex = Math.trunc(i / selectorPixelWidth);
    const jIndex = i % selectorPixelWidth;
    const currBoardIndex =
      (iIndex + offsets.y) * boardPixelWidth + (jIndex + offsets.x);
    if (boardPixels[currBoardIndex] === "░")
      boardPixels[currBoardIndex] = selectorChars[selectorCharacterIndex];
  }
  return boardPixels.join("");
};

const drawBoardState = (boardState, selectorPosition) => {
  console.clear();
  let boardStateDisplayString = board;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (boardState[i][j] != "blank") {
        boardStateDisplayString = insertLetter(
          boardStateDisplayString,
          { x: j, y: i },
          letters[boardState[i][j]]
        );
      }
    }
  }
  boardStateDisplayString = insertSelectBoarder(
    boardStateDisplayString,
    selectorPosition,
    selectorCharacterIndex
  );
  console.log(boardStateDisplayString);
};

let selectorCharacterIndex;

const updateSelectorCharacterIndex = () => {
  selectorCharacterIndex++;
  if (selectorCharacterIndex >= numberOfSelectorChars) {
    resetSelectorCharacter();
  }
};

const resetSelectorCharacter = () => {
  selectorCharacterIndex = 0;
};

const initializeView = () => {
  resetSelectorCharacter();
  console.clear();
};

module.exports = {
  drawBoardState,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
  initializeView,
};
