//const ContainerOfFood = require("./ContainerOfFood");

const ContainerOfFood = require("./ContainerOfFood");

// Class that holds an array of ContainerOfFood objects and methods
// to manipulate and describe the array
class Inventory {
  #inventory;
  constructor(inventory) {
    this.#inventory = inventory;
  }
  // TODO: Should be able to delete this eventually.
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
      //TODO remove this line once you fix methods that call this function
      //to actually provide the correct expiration date.
      if (newExpirationDate === -1) {
        newExpirationDate = this.#inventory[indexToMove].expirationDate;
      }
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
    ].reduceVolume(newVolume);
  }
}

module.exports = Inventory;
