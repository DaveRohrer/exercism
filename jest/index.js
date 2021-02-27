const board = `╔══════════╦══════════╦══════════╗
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╠══════════╬══════════╬══════════╣
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╠══════════╬══════════╬══════════╣
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
║░░░░░░░░░░║░░░░░░░░░░║░░░░░░░░░░║
╚══════════╩══════════╩══════════╝`;

const x = `██╗░░██╗
╚██╗██╔╝
░╚███╔╝░
░██╔██╗░
██╔╝╚██╗
╚═╝░░╚═╝`;
const o = `░█████╗░
██╔══██╗
██║░░██║
██║░░██║
╚█████╔╝
░╚════╝░`;

const selectBoarder1 = " ";
const selectBoarder2 = "▒";

const boardPixelWidth = board.substr(0, board.indexOf("\n") + 1).length; //including the new line in the width currently
const boardPixelHeight = board.match(/\n/g).length + 1; // count new lines plus 1 because no newline in the final row
const letterPixelWidth = x.substr(0, x.indexOf("\n")).length;
const letterPixelHeight = x.match(/\n/g).length + 1; // count new lines plus 1 because no newline in the final row
const gridPixelThickness = 1;
const cellPaddingThickness = 1;

const drawPosition = { x: 1, y: 1 };

const insertLetter = (board, drawPosition, letter) => {
  let boardPixels = [...board]; //board.split("\n");
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

const fillLetters = () => {
  return insertLetter(
    insertLetter(
      insertLetter(
        insertLetter(
          insertLetter(
            insertLetter(
              insertLetter(
                insertLetter(
                  insertLetter(board, { x: 2, y: 0 }, x),
                  { x: 2, y: 2 },
                  o
                ),
                { x: 1, y: 2 },
                x
              ),
              { x: 0, y: 1 },
              o
            ),
            { x: 2, y: 1 },
            x
          ),
          { x: 1, y: 0 },
          o
        ),
        { x: 0, y: 2 },
        x
      ),
      { x: 0, y: 0 },
      x
    ),
    drawPosition,
    o
  );
};

const fillLessLetters = () => {
  return insertLetter(
    insertLetter(
      insertLetter(
        insertLetter(
          insertLetter(
            insertLetter(board, { x: 0, y: 1 }, o),
            { x: 2, y: 1 },
            x
          ),
          { x: 1, y: 0 },
          o
        ),
        { x: 0, y: 2 },
        x
      ),
      { x: 0, y: 0 },
      x
    ),
    drawPosition,
    o
  );
};

const insertSelectBoarder = (
  board,
  selectPosition,
  selectColor = selectBoarder2
) => {
  let boardPixels = [...board]; //board.split("\n");
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
  //console.log(boardPixels.join(""));
  return boardPixels.join("");
};

//insertSelectBoarder(board, { x: 1, y: 2 });
//console.log(fillLessLetters());
console.clear();
console.log(insertSelectBoarder(fillLessLetters(), { x: 1, y: 1 }));

//clear and interval is solution for blinking and shit.

// setInterval(
//   console.log,
//   1500,
//   insertSelectBoarder(fillLessLetters(), { x: 1, y: 1 })
// );

// const printBoard = async () => {
//   const select = [" ", selectBoarder2];
//   for (let i = 0; i < 10; i++) {
//     setTimeout(
//       console.log,
//       1000,
//       insertSelectBoarder(fillLessLetters(), { x: 1, y: 1 }, select[i % 2])
//     );
//   }
// };
// printBoard();
