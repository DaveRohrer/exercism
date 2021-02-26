const FoodSystemManager = require("./modules/FoodSystemManager");
const Menu = require("./modules/Menu");
const CommandBuilder = require("./modules/CommandBuilder");
const loadFoodListFromCSVFile = require("./modules/FoodListLoader");
const loadInventoryFromCSVFile = require("./modules/InventoryLoader");
const initializeTerminalInterface = require("./modules/terminalInterface");

//app functions
const onEnter = (terminalInput) => {
  cm.currentInput = terminalInput;
  if (userWantsToExit()) {
    exit();
  } else if (userWantsToGoBack()) {
    goBack();
  } else {
    processUserRequest();
  }
  updateSystemsAfterProcessingRequest();
};
const userWantsToExit = () => {
  return cm.currentInput === "exit";
};
const userWantsToGoBack = () => {
  return cm.currentInput === "back";
};
const goBack = () => {
  cm.stepBackCurrentCommand();
};
const updateSystemsAfterProcessingRequest = () => {
  //TODO Show user's partially built command if we want
  console.log(cm.currentCommand);
  menu.setMenuScreen(cm.currentCommand);
  cm.resetCurrentInput();
  menu.show();
};
const processUserRequest = () => {
  const requestResult = fsm.processRequests(cm.fullUserRequestedCommand);
  if (requestResult.isValid) {
    if (requestResult.requestType === "Complete") {
      cm.onCompleteCommand();
    } else {
      cm.addCurrentInputToCurrentCommand();
    }
  }
};
const exit = () => {
  console.log("exit time");
  fsm.printInventory();
  process.exit(0);
};
const initializeApp = () => {
  loadFoodListFromCSVFile("data/foodItems.csv").then((foodList) => {
    loadInventoryFromCSVFile("data/inventory.csv").then((inventory) => {
      fsm = new FoodSystemManager(foodList, inventory);
      menu = new Menu();
      menu.show();
      initializeTerminalInterface(onEnter);
      cm = new CommandBuilder();
    });
  });
};

// app varaibles
let cm;
let fsm;
let menu;

initializeApp();
