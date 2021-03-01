const readline = require("readline");
const moveSelector = require("./index");

const validMoveKeys = ["right", "left", "up", "down"];
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true); //remove standard node keypress events and take full control

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else if (validMoveKeys.includes(key.name)) {
    moveSelector(key.name);
  }
});
