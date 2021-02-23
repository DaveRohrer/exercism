const {
  pulledFromMenu,
  processPulledFromInput,
  registerRootMenuWithPullMenu,
} = require("./pull.js");
const {
  depositedToMenu,
  processDepositedToInput,
  registerRootMenuWithDepositMenu,
} = require("./deposit.js");
const {
  updateContainerLevelMenu,
  processUpdateContainerLevelInput,
  registerRootMenuWithUpdateMenu,
} = require("./update-container.js");

const rootMenu = `What would you like to do?
    1. [P]Pull Food
    2. [D]Deposit Food
    3. [U]Update Container Level
    4. [G]Manage Grocery List
    5. [Exit]Exit
    `;
const processRootInput = (input) => {
  /// add functions as parameters to the ones that require DB checking
  switch (input) {
    case "1":
    case "p":
      return {
        input: "p",
        nextMenu: pulledFromMenu,
        nextInputProcessor: processPulledFromInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: depositedToMenu,
        nextInputProcessor: processDepositedToInput,
      };
    case "3":
    case "u":
      return {
        input: "u",
        nextMenu: updateContainerLevelMenu,
        nextInputProcessor: processUpdateContainerLevelInput,
      };
    case "4":
    case "g":
      return "g";
    case "5":
    case "exit":
      return { input: "exit" };
    default:
      //error in input
      console.log("input error");
      return { input: "input error" };
  }
};

const rootMenuInitialize = () => {
  registerRootMenuWithPullMenu(rootMenu, processRootInput);
  registerRootMenuWithDepositMenu(rootMenu, processRootInput);
  registerRootMenuWithUpdateMenu(rootMenu, processRootInput);
};
module.exports = { rootMenu, processRootInput, rootMenuInitialize };
