const readline = require("readline");
const { moveSelector, placeLetter } = require("./model");

const initializeController = () => {
  const validMoveKeys = ["right", "left", "up", "down"];
  const validLetterPlacingKeys = ["return", "space"];
  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true); //remove standard node keypress events and take full control
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      process.exit();
    } else if (validMoveKeys.includes(key.name)) {
      moveSelector(key.name);
    } else if (validLetterPlacingKeys.includes(key.name)) {
      placeLetter(key.name);
    }
  });
};

module.exports = { initializeController };
