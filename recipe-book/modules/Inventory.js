//const ContainerOfFood = require("./ContainerOfFood");

const ContainerOfFood = require("./ContainerOfFood");

// Class that holds an array of ContainerOfFood objects and methods
// to manipulate and describe the array
class Inventory {
  #inventory;
  constructor(inventory) {
    this.#inventory = inventory;
  }
  get inventory() {
    return this.#inventory;
  }
  get displayString() {
    return this.#inventory.reduce((acc, element) => {
      return acc + element.displayString + "\n";
    }, "");
  }
  numberOfContainersAt(containerType, location) {
    return this.#inventory.filter((element) => {
      return element.type === containerType && element.location === location;
    }).length;
  }
  hasContainerAt(containerType, location) {
    return this.numberOfContainersAt(containerType, location) > 0;
  }
  moveContainer(
    oldLocation,
    newLocation,
    containerType,
    amount,
    newExpirationDate
  ) {
    for (let i = 0; i < amount; i++) {
      const indexToMove = this.#inventory.findIndex((element) => {
        return (
          element.type === containerType && element.location === oldLocation
        );
      });
      this.#inventory[indexToMove].location = newLocation;
      this.#inventory[indexToMove].expirationDate = newExpirationDate;
    }
  }
  addContainer(location, containerType, amount, expirationDate) {
    for (let i = 0; i < amount; i++) {
      this.#inventory.push(
        new ContainerOfFood(containerType, 1, expirationDate, location)
      );
    }
  }
  updateContainerVolume(location, containerType, newVolume) {
    this.#inventory[
      this.#inventory.findIndex((element) => {
        return element.location === location && element.type === containerType;
      })
    ].volume = newVolume;
  }

  //consider moving these two functions to a different class... maybe a household class that has inventories and foodlist
  withinValidDepositRange(amountToDeposit) {
    return amountToDeposit > 0 && amountToDeposit < 51;
  }
  withinValidVolumeRange(containerVolumeLevel) {
    return containerVolumeLevel >= 0 && containerVolumeLevel <= 1;
  }
}

module.exports = Inventory;
