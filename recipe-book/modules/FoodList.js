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
    return this.#foodList.find(
      (element) => element.abbreviation === abbreviation
    ).name;
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
