const pulledFromMenu = `Pulled food from...
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [C]Cabinet
    4. [Back]Back to Previous Screen
    5. [Exit]Exit
      `;
const pulledToMenu = `Pulled food to...
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [R]Refrigerator
    4. [Back]Back to Previous Screen
    5. [Exit]Exit
    `;
const pulledWhatFoodItemMenu = `Please enter the abbreviation of the food you pulled
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const pulledHowManyMenu = `Please enter the number of containers you pulled
     . [Back]Back to Previous Screen
     . [Exit]Exit
    `;

let rootMenu;
let processRootInput;
const registerRootMenuWithPullMenu = (menu, inputFunction) => {
  rootMenu = menu;
  processRootInput = inputFunction;
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
    case "c":
      return {
        input: "c",
        nextMenu: pulledToMenu,
        nextInputProcessor: processPulledToInput,
      };
    case "4":
    case "back":
      return {
        input: "back",
        nextMenu: rootMenu,
        nextInputProcessor: processRootInput,
      };
    case "5":
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
    case "r":
      return {
        input: "r",
        nextMenu: pulledWhatFoodItemMenu,
        nextInputProcessor: processPulledWhatInput,
      };
    case "4":
    case "back":
      return {
        input: "back",
        nextMenu: pulledFromMenu,
        nextInputProcessor: processPulledFromInput,
      };
    case "5":
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

module.exports = {
  pulledFromMenu,
  processPulledFromInput,
  registerRootMenuWithPullMenu,
};
