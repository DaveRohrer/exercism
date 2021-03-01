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

let selectorCharacterIndex;

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

const insertLetter = (boardStateDisplayString, drawPosition, letter) => {
  let boardPixels = [...boardStateDisplayString];
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

const insertSelectBoarder = (boardStateDisplayString, selectorPosition) => {
  let boardPixels = [...boardStateDisplayString];
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

const insertBoardState = (boardState, boardStateDisplayString) => {
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
  return boardStateDisplayString;
};

const insertTopMessage = (boardStateDisplayString, topMessage) => {
  topMessage = topMessage.padStart(
    topMessage.length + (boardPixelWidth - topMessage.length) / 2,
    " "
  );
  return (topMessage + "\n").concat(boardStateDisplayString);
};

const updateSelectorCharacterIndex = () => {
  selectorCharacterIndex++;
  if (selectorCharacterIndex >= numberOfSelectorChars) {
    resetSelectorCharacter();
  }
};

const resetSelectorCharacter = () => {
  selectorCharacterIndex = 0;
};

const updateView = (boardState, selectorPosition, topMessage) => {
  console.clear();
  let boardStateDisplayString = board;
  boardStateDisplayString = insertBoardState(
    boardState,
    boardStateDisplayString,
    selectorPosition
  );
  boardStateDisplayString = insertSelectBoarder(
    boardStateDisplayString,
    selectorPosition
  );

  console.log(insertTopMessage(boardStateDisplayString, topMessage));
};

const initializeView = () => {
  resetSelectorCharacter();
  console.clear();
};

module.exports = {
  updateView,
  updateSelectorCharacterIndex,
  resetSelectorCharacter,
  initializeView,
};
