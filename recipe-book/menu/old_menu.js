const rootMenu = `What would you like to do?
    1. [P]Pull Food
    2. [D]Deposit Food
    3. [U]Update Container Level
    4. [G]Manage Grocery List
    5. [Exit]Exit
    `;
const pulledFromMenu = `Pulled food from...
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [Back]Back to Previous Screen
    4. [Exit]Exit
      `;
const pulledToMenu = `Pulled food to...
    1. [F]Freezer
    2. [D]Refridgerator
    3. [Back]Back to Previous Screen
    4. [Exit]Exit
    `;
const pulledWhatFoodItemMenu = `Please enter the abbreviation of the food you pulled
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const pulledHowManyMenu = `Please enter the number of containers you pulled
     . [Back]Back to Previous Screen
     . [Exit]Exit
    `;
const depositToMenu = `Deposited food to...'
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
const updateContainerLevelMenu = `Where was the container you are updating stored?
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [R]Refridgerator
    4. [C]Cabinet
    5. [Back]Back to Previous Screen
    6. [Exit]Exit
    `;
const updateWhatContainerMenu = `Please enter the abbreviation of the food you deposited
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const updateToWhatPercentMenu = `Please enter the percent of food remaining in the container
     . [Back]Back to Previous Screen
     . [Exit]Exit
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
        nextMenu: depositToMenu,
        nextInputProcessor: processDepositToInput,
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
const processPulledFromInput = (input) => {
  switch (input) {
    case "1":
    case "f":
      return {
        input: "f",
        nextMenu: pulledToMenu,
        nextInputProcessor: processPulledToInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: pulledToMenu,
        nextInputProcessor: processPulledToInput,
      };
    case "3":
    case "back":
      return {
        input: "back",
        nextMenu: rootMenu,
        nextInputProcessor: processRootInput,
      };
    case "4":
    case "exit":
      return { input: "exit" };
    default:
      //error in input
      console.log("input error");
      return { input: "input error" };
  }
};
const processPulledToInput = (input) => {
  switch (input) {
    case "1":
    case "f":
      return {
        input: "f",
        nextMenu: pulledWhatFoodItemMenu,
        nextInputProcessor: processPulledWhatInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: pulledWhatFoodItemMenu,
        nextInputProcessor: processPulledWhatInput,
      };
    case "3":
    case "back":
      return {
        input: "back",
        nextMenu: pulledFromMenu,
        nextInputProcessor: processPulledFromInput,
      };
    case "4":
    case "exit":
      return { input: "exit" };
    default:
      //error in input
      console.log("input error");
      return { input: "input error" };
  }
};
const processPulledWhatInput = (input, validPulledItem) => {
  switch (input) {
    case "1":
    case "back":
      return {
        input: "back",
        nextMenu: pulledToMenu,
        nextInputProcessor: processPulledToInput,
      };
    case "2":
    case "exit":
      return { input: "exit" };
    default:
      if (validPulledItem(input)) {
        return {
          input,
          nextMenu: pulledHowManyMenu,
          nextInputProcessor: processPulledHowManyInput,
        };
      } else {
        //error in input
        console.log("input error");
        return { input: "input error" };
      }
  }
};
const processPulledHowManyInput = (input, validPulledNumber) => {
  switch (input) {
    case "back":
      return {
        input: "back",
        nextMenu: pulledWhatFoodItemMenu,
        nextInputProcessor: processPulledWhatInput,
      };
    case "exit":
      return { input: "exit" };
    default:
      if (validPulledNumber(input)) {
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
const processDepositToInput = (input) => {
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
        nextMenu: depositToMenu,
        nextInputProcessor: processDepositToInput,
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
const processUpdateContainerLevelInput = (input) => {
  switch (input) {
    case "1":
    case "f":
      return {
        input: "f",
        nextMenu: updateWhatContainerMenu,
        nextInputProcessor: processUpdateWhatContainerInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: updateWhatContainerMenu,
        nextInputProcessor: processUpdateWhatContainerInput,
      };
    case "3":
    case "r":
      return {
        input: "r",
        nextMenu: updateWhatContainerMenu,
        nextInputProcessor: processUpdateWhatContainerInput,
      };
    case "4":
    case "c":
      return {
        input: "c",
        nextMenu: updateWhatContainerMenu,
        nextInputProcessor: processUpdateWhatContainerInput,
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
const processUpdateWhatContainerInput = (input, validContainer) => {
  switch (input) {
    case "1":
    case "back":
      return {
        input: "back",
        nextMenu: updateContainerLevelMenu,
        nextInputProcessor: processUpdateContainerLevelInput,
      };
    case "2":
    case "exit":
      return { input: "exit" };
    default:
      if (validContainer(input)) {
        return {
          input,
          nextMenu: updateToWhatPercentMenu,
          nextInputProcessor: processUpdateToWhatPercentInput,
        };
      } else {
        //error in input
        console.log("input error");
        return { input: "input error" };
      }
  }
};
const processUpdateToWhatPercentInput = (input, validContainerPercentage) => {
  switch (input) {
    case "back":
      return {
        input: "back",
        nextMenu: updateWhatContainerMenu,
        nextInputProcessor: processUpdateWhatContainerInput,
      };
    case "exit":
      return { input: "exit" };
    default:
      if (validContainerPercentage(input)) {
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
  rootMenu,
  processRootInput,
};
