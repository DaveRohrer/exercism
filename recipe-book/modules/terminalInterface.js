const readline = require("readline");

const initializeTerminalInterface = (onEnterFunc) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (input) => {
    console.log(`Received: ${input}`);
    onEnterFunc(`${input}`.toLowerCase());
  });
};

module.exports = initializeTerminalInterface;
