const depositedToMenu = `Deposited food to...'
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [R]Refridgerator
    4. [C]Cabinet
    5. [Back]Back to Previous Screen
    6. [Exit]Exit
    `;
const depositedWhatFoodItemMenu = `Please enter the abbreviation of the food you deposited
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const depositedHowManyMenu = `Please enter the number of containers you deposited
     . [Back]Back to Previous Screen
     . [Exit]Exit
    `;

let rootMenu;
let processRootInput;
const registerRootMenuWithDepositMenu = (menu, inputFunction) => {
  rootMenu = menu;
  processRootInput = inputFunction;
};
const processDepositedToInput = (input) => {
  switch (input) {
    case "1":
    case "f":
      return {
        input: "f",
        nextMenu: depositedWhatFoodItemMenu,
        nextInputProcessor: processDepositedWhatInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: depositedWhatFoodItemMenu,
        nextInputProcessor: processDepositedWhatInput,
      };
    case "3":
    case "r":
      return {
        input: "r",
        nextMenu: depositedWhatFoodItemMenu,
        nextInputProcessor: processDepositedWhatInput,
      };
    case "4":
    case "c":
      return {
        input: "c",
        nextMenu: depositedWhatFoodItemMenu,
        nextInputProcessor: processDepositedWhatInput,
      };
    case "5":
    case "back":
      return {
        input: "back",
        nextMenu: rootMenu,
        nextInputProcessor: processRootInput,
      };
    case "6":
    case "exit":
      return { input: "exit" };
    default:
      //error in input
      console.log("input error");
      return { input: "input error" };
  }
};
const processDepositedWhatInput = (input, validFoodItem) => {
  switch (input) {
    case "1":
    case "back":
      return {
        input: "back",
        nextMenu: depositedToMenu,
        nextInputProcessor: processDepositedToInput,
      };
    case "2":
    case "exit":
      return { input: "exit" };
    default:
      if (validFoodItem(input)) {
        return {
          input,
          nextMenu: depositedHowManyMenu,
          nextInputProcessor: processDepositedHowManyInput,
        };
      } else {
        //error in input
        console.log("input error");
        return { input: "input error" };
      }
  }
};
const processDepositedHowManyInput = (input, validDepositNumber) => {
  switch (input) {
    case "back":
      return {
        input: "back",
        nextMenu: depositedWhatFoodItemMenu,
        nextInputProcessor: processDepositedWhatInput,
      };
    case "exit":
      return { input: "exit" };
    default:
      if (validDepositNumber(input)) {
        return {
          input,
          nextMenu: rootMenu,
          nextInputProcessor: processRootInput,
        };
      } else {
        //error in input
        console.log("input error");
        return { input: "input error" };
      }
  }
};

module.exports = {
  depositedToMenu,
  processDepositedToInput,
  registerRootMenuWithDepositMenu,
};
