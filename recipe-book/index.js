const FoodSystemManager = require("./modules/FoodSystemManager");
const Menu = require("./modules/Menu");
const CommandBuilder = require("./modules/CommandBuilder");

const loadFoodListFromCSVFile = require("./modules/FoodListLoader");
const loadInventoryFromCSVFile = require("./modules/InventoryLoader");
const initializeTerminalInterface = require("./modules/terminalInterface");

const onEnter = (terminalInput) => {
  if (terminalInput === "exit") {
    onExit();
  } else if (terminalInput === "back") {
    console.log("WERWER STEP BACK");
    cm.stepBackPartialCommand();
  } else {
    //console.log(`${cm.partialCommand}${terminalInput}`);
    console.log(
      fsm.processRequests(`${cm.partialCommand}${terminalInput}`).message
    );

    //******* link everything up into the command builder so we can have smaller functions. regerster any functions in the command builder that we need to like
    //exit and back and process request. this will also help us add logic to building commands from scratch where we dont add a comma if we dont need to. */
  }
  //TODO Show user's partially built command
  menu.show();
  //check for exit then eave
  // then check for back and cm.stepbackpartialcommand
  // then check the partial command + "," + terminal input with the fsm for errors
  // if its a valid and complete command, push it all to previous command array and clear current partial command
  // if its a valid and incomplete comand, add the comma and current input to the partial command array and return
  // if its not valid, ignore dont store anything and reshow the menu
  // then update the menu to the new partial command
  // /////// dont do this mayne: then check to see if cm.partial command plus "," + terminal input is a valid menu navigation string
};

const onExit = () => {
  console.log("exit time");
  process.exit(0);
};
let cm;
let fsm;
let menu;
//loadFoodListFromCSVFile("data/foodItems.csv");
loadFoodListFromCSVFile("data/foodItems.csv").then((foodList) => {
  loadInventoryFromCSVFile("data/inventory.csv").then((inventory) => {
    fsm = new FoodSystemManager(foodList, inventory);
    // fsm.printFoodList();
    // fsm.printInventory();

    //test here for now
    menu = new Menu();
    menu.show();
    menu.setMenuScreen("u,r");
    menu.show();

    initializeTerminalInterface(onEnter);

    cm = new CommandBuilder();
    // console.log(cm.partialCommand);
    // cm.stepBackPartialCommand();
    // console.log(cm.partialCommand);

    // console.log(menu.validNavigationString(cm.partialCommand));
  });
});

const initializeApp = async () => {};

initializeApp();
