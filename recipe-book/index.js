const readline = require("readline");
const { readFile } = require("fs");
const questionPromise = require("./question-promise");
const FoodItem = require("./FoodItem");
const {
  rootMenu,
  // pulledFromMenu,
  // pulledToMenu,
  // pulledWhatFoodItemMenu,
  // pulledHowManyMenu,
  // depositTo,
  // depositedWhatFoodItemMenu,
  // depositedHowManyMenu,
  // updateContainerLevelMenu,
  // updatedWhatFoodItemMenu,
  // updatedToWhatPercentMenu,
  processRootInput,
  processPulledFromInput,
} = require("./menu");

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
    process.exit(0);
  }

  //else if (userResponse.input) {
  //   if (userResponse.input === "back") {
  //     userNavigationPath.pop();
  //   } else {
  //     userNavigationPath.push(userResponse.input);
  //   }

  //updateMenuState(userResponse);
  //menuHandler.currentMenu = userResponse.nextMenu;
  // menuHandler.processInput = userResponse.nextInputProcessor;
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

  // rl.on("close", function () {
  //   console.log("\nBYE BYE !!!");
  //   console.log(userNavigationPath);
  //   process.exit(0);
  // });
  // return rl;
};

const loadContentFromDatabases = async () => {};

const menuHandler = {
  currentMenu: rootMenu,
  processInput: processRootInput,
};
const userNavigationPath = [];

showCurrentMenu();

// const shit = (val) => {
//   if (val.length > 6) {
//     console.log("That; a big one");
//   } else {
//     console.log("tinypeepee");
//   }
// };

// menuHandler.processInput("666", shit);

const rl = initializeInterface();
