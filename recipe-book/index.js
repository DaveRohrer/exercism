const readline = require("readline");
const { readFile } = require("fs");
const FoodItem = require("./FoodItem");
const ContainerOfFood = require("./ContainerOfFood");
const {
  rootMenu,
  processRootInput,
  rootMenuInitialize,
} = require("./menu/root.js");
//const updateContainer = require("./menu/update-container");

const showCurrentMenu = () => {
  console.log(menuHandler.currentMenu);
};

// this function actually just reads data into one big string
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

const getLocationFromChar = (char) => {
  switch (char) {
    case "f":
      return "Freezer";
    case "d":
      return "Deep Freezer";
    case "r":
      return "Refrigerator";
    case "c":
      return "Cabinet";
    default:
      break;
  }
};
const validContainerInLocation = (abbreviation) => {
  const arr = inventory.filter((element) => {
    return (
      element.currentLocation == getLocationFromChar(userNavigationPath[1])
    );
  });
  const fullName = foodItemTable.filter((foodItem) => {
    return foodItem.abbreviation === abbreviation;
  });

  //will need containers .contents to look up into food item
  if (fullName.length > 0) {
    const validContainers = arr.filter((element) => {
      return element.contents == fullName[0].name;
    });

    validContainers.map((element) => {
      console.log(element.logString);
    });

    if (validContainers.length > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const getContainersInLocation = (abbreviation) => {
  const arr = inventory.filter((element) => {
    return (
      element.currentLocation == getLocationFromChar(userNavigationPath[1])
    );
  });
  const fullName = foodItemTable.filter((foodItem) => {
    return foodItem.abbreviation === abbreviation;
  });

  //will need containers .contents to look up into food item
  if (fullName.length > 0) {
    const validContainers = arr.filter((element) => {
      return element.contents == fullName[0].name;
    });
    return validContainers;
  }
};

const validAmountOfContainersInLocation = (numberString) => {
  const containers = getContainersInLocation(userNavigationPath[3]);
  if (containers.length >= parseInt(numberString)) {
    return true;
  } else {
    return false;
  }
};
const validFoodItem = (abbreviation) => {
  const arr = foodItemTable.filter((element) => {
    return element.abbreviation == abbreviation;
  });
  return arr.length > 0;
};
const validDepositNumber = (numberString) => {
  if (parseInt(numberString) > 0 && parseInt(numberString) < 51) {
    return true;
  } else {
    return false;
  }
};
const validContainerPercent = (floatString) => {
  if (parseFloat(floatString) >= 0 && parseFloat(floatString) <= 1.0) {
    return true;
  } else {
    return false;
  }
};

const getRequiredInputValidator = (path) => {
  if (path.match(/p,[fdc],[fdr],\w+/)) {
    return validAmountOfContainersInLocation;
  } else if (path.match(/p,[fdc],[fdr]/)) {
    return validContainerInLocation;
  } else if (path.match(/d,[fdrc],\w+/)) {
    return validDepositNumber;
  } else if (path.match(/d,[fdrc]/)) {
    return validFoodItem;
  } else if (path.match(/u,[fdrc],\w+/)) {
    return validContainerPercent;
  } else if (path.match(/u,[fdrc]/)) {
    return validContainerInLocation;
  }
};
const Locations = {
  f: "Frezer",
  d: "Deep Freezer",
  c: "Cabinet",
  r: "Refrigerator",
};

const getFullFoodItemNameFromAbbreviation = (abbreviation) => {
  return foodItemTable[
    foodItemTable.findIndex((element) => {
      return element.abbreviation === abbreviation;
    })
  ].name;
};

const getDefaultExpirationWeeksFromAbbreviation = (abbreviation) => {
  return foodItemTable[
    foodItemTable.findIndex((element) => {
      return element.abbreviation === abbreviation;
    })
  ].defaultWeeksUntilExpiration;
};

const pullContainer = (oldLocation, newLocation, abbreviation, amount) => {
  const fullOldLocation = Locations[oldLocation]; //make into functions
  const fullNewLocation = Locations[newLocation];
  const fullFoodItemName = getFullFoodItemNameFromAbbreviation(abbreviation);

  //TODO: update expiration dates
  for (let i = 0; i < amount; i++) {
    const availableContainers = inventory.findIndex((element) => {
      return (
        element.contents == fullFoodItemName &&
        element.currentLocation === fullOldLocation
      );
    });
    inventory[availableContainers].currentLocation = fullNewLocation;
  }
  printInventory();
};
const depositContainer = (depositLocation, abbreviation, amountToDeposit) => {
  const fullFoodItemName = getFullFoodItemNameFromAbbreviation(abbreviation);
  const fullDepositLocation = Locations[depositLocation];
  const expirationDate = new Date();

  expirationDate.setTime(
    Date.now() +
      getDefaultExpirationWeeksFromAbbreviation(abbreviation) * 6.048e8
  );

  for (let i = 0; i < amountToDeposit; i++) {
    inventory.push(
      new ContainerOfFood(
        fullFoodItemName,
        1,
        expirationDate,
        fullDepositLocation
      )
    );
  }
};

const updateContainer = (containerLocation, abbreviation, newVolume) => {
  const fullFoodItemName = getFullFoodItemNameFromAbbreviation(abbreviation);
  const fullContainerLocation = Locations[containerLocation];

  inventory[
    inventory.findIndex((element) => {
      return element.contents === fullFoodItemName;
    })
  ].volume = newVolume;
};

const reset = () => {
  userNavigationPath = [];
};

const performCommand = (menuPath) => {
  if (menuPath.match(/p,[fdc],[fdr],\w+,\d+/)) {
    pullContainer(
      menuPath.split(",")[1],
      menuPath.split(",")[2],
      menuPath.split(",")[3],
      menuPath.split(",")[4]
    );
    reset();
  } else if (menuPath.match(/d,[fdrc],\w+,\d+/)) {
    depositContainer(
      menuPath.split(",")[1],
      menuPath.split(",")[2],
      menuPath.split(",")[3]
    );
    reset();
  } else if (menuPath.match(/u,[fdrc],\w+,\d+/)) {
    updateContainer(
      menuPath.split(",")[1],
      menuPath.split(",")[2],
      menuPath.split(",")[3]
    );
    reset();
  }
};

// Point the menu handler at the next menu chosen by the user.
const updateMenuState = (userResponse) => {
  menuHandler.currentMenu = userResponse.nextMenu;
  menuHandler.processInput = userResponse.nextInputProcessor;
};

// Function we call when the user types "exit"
const shutdown = () => {
  console.log("exit time");
  printInventory();
  console.log(userNavigationPath);
  process.exit(0);
};

// Function that is called whenever the user presses enter. Clean up so it reads a bit
// better.
const onEnter = (input) => {
  const inputValidation = getRequiredInputValidator(
    userNavigationPath.join(",")
  );
  const userResponse = menuHandler.processInput(input, inputValidation);

  if (userResponse.input === "exit") {
    shutdown();
  } else if (userResponse.input !== "input error") {
    if (userResponse.input === "back") {
      userNavigationPath.pop();
    } else {
      userNavigationPath.push(userResponse.input);
    }
    getRequiredInputValidator(userNavigationPath.join(","));
    updateMenuState(userResponse);
    performCommand(userNavigationPath.join(","));
  }
  showCurrentMenu();
};

// This sets up a terminal line for the user to type into and defines
// the function to be called when the user presses enter.
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

// Takes line text array from the FoodItem csv file and
// returns an array of FoodItem class objects
const parseFoodItemLineData = (data) => {
  return data
    .map((line) => {
      return line.split(",");
    })
    .map((item) => {
      if (item[6] != "Not Applicable") {
        item[6] = parseFloat(item[6]);
      }
      item[3] = parseFloat(item[3]);
      item[4] = parseFloat(item[4]);
      return new FoodItem(...item);
    });
};

// Takes line text array from the inventory csv file and
// returns an array of ContainerOfFood class objects
const parseContainerOfFoodLineData = (data) => {
  return data
    .map((line) => {
      return line.split(",");
    })
    .map((container) => {
      container[1] = parseFloat(container[1]);
      container[2] = new Date(container[2]);
      return new ContainerOfFood(...container);
    });
};
// just for debugging currently
printFoodObjects = () => {
  foodItemTable.map((item) => console.log(item.logString));
};
// just for debugging currently
printInventory = () => {
  inventory.map((container) => console.log(container.logString));
};
const readFoodItemTable = (data) => {
  foodItemTable = parseFoodItemLineData(data.split("\r\n"));
};
const readInventory = (data) => {
  inventory = parseContainerOfFoodLineData(data.split("\r\n"));
};
// These are our two main arrays we need. We fill them in from csv files.
let foodItemTable;
let inventory;
// This is essentially the commands the user enters through the menu system.
let userNavigationPath = [];
// This keeps track of which menus to display and how to manage the user input for each menu.
const menuHandler = {
  currentMenu: rootMenu,
  processInput: processRootInput,
};
// this junk will become our initialize method. Once this is set we can basically run the program
// We are technically lacking some error checking to make sure there isnt corrupted data
// and we could probably use some more promise stuff going on to make the databasses are actually
// successfull parsed into expected data structures (rather than just making sure we read the file
// contents_), but this is probably good enough for now and im getting a bit sick of this project.
// the upside is a bit lower than I'd like.
readCSVFile("foodItems.csv").then((val) => {
  readFoodItemTable(val);
  readCSVFile("inventory.csv").then((inventoryStream) => {
    readInventory(inventoryStream);
    rootMenuInitialize();
    printFoodObjects();
    printInventory();
    showCurrentMenu();
    initializeInterface();
  });
});
