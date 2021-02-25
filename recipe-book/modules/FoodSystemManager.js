const Inventory = require("./Inventory");
const FoodList = require("./FoodList");
const baseRequestRegExps = require("./RegExps");

// Class that holds food list, inventory, (eventually grocery lists and recipies), and
// methods to manipulate them and communicate between them
class FoodSystemManager {
  #foodList;
  #inventory;
  constructor(foodList, inventory) {
    this.#foodList = foodList;
    this.#inventory = inventory;
  }
  printFoodList() {
    console.log(this.#foodList.displayString);
  }
  printInventory() {
    console.log(this.#inventory.displayString);
  }
  get storageLocations() {
    return { f: "Freezer", d: "Deep Freezer", r: "Refrigerator", c: "Cabinet" };
  }
  processRequests(request) {
    if (this.processBaseRequestComponents(request).isValid) {
      return true; //maybe return object with result, maybe a command, and/or anything else
    } else if (this.processHigherOrderRequestComponents(request).isValid) {
      return this.processHigherOrderRequestComponents(request);
    }
  }
  processBaseRequestComponents(request) {
    return baseRequestRegExps.some((element) => {
      return element.test(request); //may have to returnn something additional here too
    })
      ? { isValid: true, message: "Partial Request Found" }
      : { isValid: false, message: "Invalid Menu Navigation" };
  }
  processHigherOrderRequestComponents(request) {
    if (/^[p],[fdc],[fdr],\w+$/.test(request)) {
      return this.processPullContainerFromLocationRequest(request);
    } else if (/^[p],[fdc],[fdr],\w+,\d+$/.test(request)) {
      return this.processCompletePullContainerRequest(request);
    } else if (/^[d],[fdrc],\w+$/.test(request)) {
      return this.processDepositContainerToLocationRequest(request);
    } else if (/^[d],[fdrc],\w+,\d+$/.test(request)) {
      return this.processCompleteDepositContainerRequest(request);
    } else if (/^[u],[fdrc],\w+$/.test(request)) {
      return this.processUpdateContainerFromLocationRequest(request);
    } else if (/^[u],[fdrc],\w+,((.\d+)|(\d+.\d+))$/.test(request)) {
      return this.processCompleteUpdateContainerRequest(request);
    }
  }

  processPullContainerFromLocationRequest(request) {
    return this.#inventory.hasContainerAt(
      this.#foodList.getFoodNameFromAbbreviation(request.split(",")[3]),
      this.storageLocations[request.split(",")[1]]
    )
      ? { isValid: true, message: "Container in Location Exists!" }
      : {
          isValid: false,
          message: "No container of that type exists in that Location.",
        };
  }
  processCompletePullContainerRequest(request) {}
  processDepositContainerToLocationRequest(request) {}
  processCompleteDepositContainerRequest(request) {}
  processUpdateContainerFromLocationRequest(request) {}
  processCompleteUpdateContainerRequest(request) {}

  withinValidDepositRange(amountToDeposit) {
    return amountToDeposit > 0 && amountToDeposit < 51;
  }
  withinValidVolumeRange(containerVolumeLevel) {
    return containerVolumeLevel >= 0 && containerVolumeLevel <= 1;
  }
}

module.exports = FoodSystemManager;
