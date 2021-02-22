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
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const depositTo = `Deposited food to...'
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
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const updateContainerLevelMenu = `Where was the container you are updating stored?
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [R]Refridgerator
    4. [C]Cabinet
    5. [Back]Back to Previous Screen
    6. [Exit]Exit
    `;
const updatedWhatFoodItemMenu = `Please enter the abbreviation of the food you deposited
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const updatedToWhatPercentMenu = `Please enter the percent of food remaining in the container
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;

const processRootInput = (input) => {
  /// add functions as parameters to the ones that require DB checking
  switch (input) {
    case "1":
    case "p":
      console.log("party1");

      return {
        input: "p",
        nextMenu: pulledFromMenu,
        nextInputProcesser: processPulledFromInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: depositedWhatFoodItemMenu,
        //nextInputProcesser: processPulledFromMenuInput,
      };
    case "3":
    case "u":
      return "u";
    case "4":
    case "g":
      return "g";
    case "5":
    case "exit":
      return { input: "exit" };
    // case "666":
    //   func("test");
    //   return;
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
        nextInputProcesser: processPulledToInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: pulledToMenu,
        nextInputProcesser: processPulledToInput,
      };
    case "3":
    case "back":
      return {
        input: "back",
        nextMenu: rootMenu,
        nextInputProcesser: processRootInput,
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
        nextInputProcesser: processPulledToInput,
      };
    case "2":
    case "d":
      return {
        input: "d",
        nextMenu: pulledWhatFoodItemMenu,
        nextInputProcesser: processPulledToInput,
      };
    case "3":
    case "back":
      return {
        input: "back",
        nextMenu: pulledFromMenu,
        nextInputProcesser: processPulledFromInput,
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

module.exports = {
  rootMenu,
  pulledFromMenu,
  pulledToMenu,
  pulledWhatFoodItemMenu,
  pulledHowManyMenu,
  depositTo,
  depositedWhatFoodItemMenu,
  depositedHowManyMenu,
  updateContainerLevelMenu,
  updatedWhatFoodItemMenu,
  updatedToWhatPercentMenu,
  processRootInput,
  processPulledFromInput,
};
