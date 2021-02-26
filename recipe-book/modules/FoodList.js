// This class contains an array of FoodItem objects and has methods to
// describe the array (and maybe later to modify it)
class FoodList {
  #foodList;
  constructor(foodList) {
    this.#foodList = foodList;
  }
  get foodList() {
    return this.#foodList;
  }
  get displayString() {
    return this.#foodList.reduce((acc, element) => {
      return acc + element.displayString + "\n";
    }, "");
  }

  getFoodNameFromAbbreviation(abbreviation) {
    const foodItem = this.#foodList.find(
      (element) => element.abbreviation === abbreviation
    );
    return foodItem ? foodItem.name : "Invalid Food Item";
  }
  getDefaultExpirationWeeksFromName(name) {
    return this.#foodList.find((element) => element.name === name)
      .defaultWeeksUntilExpiration;
  }
  getDefaultExpirationWeeksFromAbbreviation(abbreviation) {
    return this.#foodList.find(
      (element) => element.abbreviation === abbreviation
    ).defaultWeeksUntilExpiration;
  }
  hasFoodWithAbbreviation(abbreviation) {
    return this.#foodList.reduce((acc, element) => {
      return element.abbreviation === abbreviation || acc;
    }, false);
  }
}
module.exports = FoodList;
