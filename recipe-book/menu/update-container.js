const updateContainerLevelMenu = `Where was the container you are updating stored?
    1. [F]Freezer
    2. [D]Deep Freezer
    3. [R]Refridgerator
    4. [C]Cabinet
    5. [Back]Back to Previous Screen
    6. [Exit]Exit
    `;
const updateWhatContainerMenu = `Please enter the abbreviation of the container you are updating
    1. [Back]Back to Previous Screen
    2. [Exit]Exit
    `;
const updateToWhatPercentMenu = `Please enter the percent of food remaining in the container
     . [Back]Back to Previous Screen
     . [Exit]Exit
    `;
let rootMenu;
let processRootInput;
const registerRootMenuWithUpdateMenu = (menu, inputFunction) => {
  rootMenu = menu;
  processRootInput = inputFunction;
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
          input: parseFloat(input).toString(), //want to ensure the preceeding 0 on decimals
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
  updateContainerLevelMenu,
  processUpdateContainerLevelInput,
  registerRootMenuWithUpdateMenu,
};
