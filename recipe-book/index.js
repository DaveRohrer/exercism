const readline = require("readline");
const { readFile } = require("fs");
const questionPromise = require("./question-promise");
const FoodItem = require("./FoodItem");
const { rootMenu, processRootInput } = require("./menu");

const showCurrentMenu = () => {
  console.log(menuHandler.currentMenu);
};

const readCSVFile = async (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const updateMenuState = (userResponse) => {
  menuHandler.currentMenu = userResponse.nextMenu;
  //console.log(userResponse.nextInputProcessor);
  menuHandler.processInput = userResponse.nextInputProcessor;
};

const onEnter = (input) => {
  const userResponse = menuHandler.processInput(input);

  if (userResponse.input == "exit") {
    console.log("exit time");
    console.log(userNavigationPath);
    process.exit(0);
  } else if (userResponse.input != "input error") {
    if (userResponse.input === "back") {
      userNavigationPath.pop();
    } else {
      userNavigationPath.push(userResponse.input);
    }
    updateMenuState(userResponse);
  }

  showCurrentMenu();
};

const initializeInterface = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (input) => {
    console.log(`Received: ${input}`);
    onEnter(`${input}`.toLowerCase());
  });
};

const menuHandler = {
  currentMenu: rootMenu,
  processInput: processRootInput,
};
const userNavigationPath = [];

showCurrentMenu();

initializeInterface();
