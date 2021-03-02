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
      return this.processBaseRequestComponents(request);
    } else {
      return this.processHigherOrderRequestComponents(request);
    }
  }
  processBaseRequestComponents(request) {
    return baseRequestRegExps.some((element) => {
      return element.test(request);
    })
      ? this.validReturnObject("Partial", "Partial Request Found")
      : this.invalidReturnObject("Partial", "Invalid Menu Navigation");
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
    } else if (/^[u],[fdrc],\w+,((.\d+)|(\d+.\d+)|(\d+))$/.test(request)) {
      return this.processCompleteUpdateContainerRequest(request);
    } else {
      return this.invalidReturnObject(
        "Partial",
        "Invalid Higher Order Request"
      );
    }
  }
  processPullContainerFromLocationRequest(request) {
    return this.#inventory.hasContainerAt(
      this.#foodList.getFoodNameFromAbbreviation(request.split(",")[3]),
      this.storageLocations[request.split(",")[1]]
    )
      ? this.validReturnObject("Partial", "Container in Location Exists!")
      : this.invalidReturnObject("Partial", "No container at Location");
  }
  processCompletePullContainerRequest(request) {
    const requestTokens = request.split(",");
    const requestedOldLocation = this.storageLocations[requestTokens[1]];
    const requestedNewLocation = this.storageLocations[requestTokens[2]];
    const requestedAmount = parseInt(requestTokens[4]);
    const requisiteStepRequest = request.substring(0, request.lastIndexOf(","));
    const requestedType = this.#foodList.getFoodNameFromAbbreviation(
      requestTokens[3]
    );
    const requisiteRequestReturnValue = this.processPullContainerFromLocationRequest(
      requisiteStepRequest
    );
    if (requestedAmount <= 0) {
      return this.invalidReturnObject("Complete", "Error: Negative Pulling");
    }
    if (!requisiteRequestReturnValue.isValid) {
      return requisiteRequestReturnValue;
    } else if (
      this.#inventory.numberOfContainersAt(
        requestedType,
        requestedOldLocation
      ) >= requestedAmount
    ) {
      //manipulate inventory
      this.#inventory.moveContainer(
        requestedOldLocation,
        requestedNewLocation,
        requestedType,
        requestedAmount,
        -1 // TODO: -1 currently just uses old expiration date.. eventually add where it changes this.
      );
      return this.validReturnObject("Complete", "Pull Request Complete");
    } else {
      return this.invalidReturnObject("Complete", "Pulled Too Many");
    }
  }
  processDepositContainerToLocationRequest(request) {
    return this.#foodList.hasFoodWithAbbreviation(request.split(",")[2])
      ? this.validReturnObject("Partial", "Container with abbreviation exists!")
      : this.invalidReturnObject("Partial", "No container with abbreviation");
  }
  processCompleteDepositContainerRequest(request) {
    const requestTokens = request.split(",");
    const requestedAmount = parseInt(requestTokens[3]);
    const requisiteStepRequest = request.substring(0, request.lastIndexOf(","));
    const requestedType = this.#foodList.getFoodNameFromAbbreviation(
      requestTokens[2]
    );
    const requestedLocation = this.storageLocations[requestTokens[1]];
    const requisiteRequestReturnValue = this.processDepositContainerToLocationRequest(
      requisiteStepRequest
    );
    if (requestedAmount <= 0) {
      return this.invalidReturnObject("Complete", "Error: Negative Depositing");
    }
    if (!requisiteRequestReturnValue.isValid) {
      return requisiteRequestReturnValue;
    } else if (this.withinValidDepositRange(requestedAmount)) {
      this.#inventory.addContainer(
        requestedLocation,
        requestedType,
        requestedAmount,
        this.createExpirationDate(requestedType)
      );
      return this.validReturnObject("Complete", "Deposit Request Complete");
    } else {
      return this.invalidReturnObject("Complete", "Not valid amount");
    }
  }
  processUpdateContainerFromLocationRequest(request) {
    return this.#inventory.hasContainerAt(
      this.#foodList.getFoodNameFromAbbreviation(request.split(",")[2]),
      this.storageLocations[request.split(",")[1]]
    )
      ? this.validReturnObject("Partial", "Container in Location Exists!")
      : this.invalidReturnObject("Partial", "No container at Location");
  }
  processCompleteUpdateContainerRequest(request) {
    const requestTokens = request.split(",");
    const requestedAmount = parseFloat(requestTokens[3]);
    const requisiteStepRequest = request.substring(0, request.lastIndexOf(","));
    const requestedType = this.#foodList.getFoodNameFromAbbreviation(
      requestTokens[2]
    );
    const requestedLocation = this.storageLocations[requestTokens[1]];
    const requisiteRequestReturnValue = this.processUpdateContainerFromLocationRequest(
      requisiteStepRequest
    );
    if (requestedAmount < 0) {
      return this.invalidReturnObject("Complete", "Error: Negative Updating");
    }
    if (!requisiteRequestReturnValue.isValid) {
      return requisiteRequestReturnValue;
    } else if (
      this.withinValidVolumeRange(
        requestedAmount,
        this.getContainer(requestedLocation, requestedType).volume
      )
    ) {
      this.#inventory.updateContainerVolume(
        requestedLocation,
        requestedType,
        requestedAmount
      );
      return this.validReturnObject("Complete", "Deposit Request Complete");
    } else {
      return this.invalidReturnObject(
        "Complete",
        "Not depositing valid amount"
      );
    }
  }
  invalidReturnObject(requestType, message) {
    return { isValid: false, requestType, message };
  }
  validReturnObject(requestType, message) {
    return { isValid: true, requestType, message };
  }
  withinValidDepositRange(amountToDeposit) {
    return amountToDeposit > 0 && amountToDeposit < 51;
  }
  withinValidVolumeRange(containerVolumeLevel, containerLevel) {
    return containerVolumeLevel >= 0 && containerVolumeLevel < containerLevel;
  }
  createExpirationDate(foodName) {
    return new Date(
      Date.now() +
        this.#foodList.getDefaultExpirationWeeksFromName(foodName) * 6.048e8
    );
  }
  getContainer(location, type) {
    return this.#inventory.inventory.find((element) => {
      return element.location == location && element.type == type;
    });
  }
}

module.exports = FoodSystemManager;
