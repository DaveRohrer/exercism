const STORAGE_LOCATIONS = [
  "Cabinet",
  "Refridgerator",
  "Freezer",
  "Deep Freezer",
];

class FoodItem {
  #name;
  #container;
  #abbreviation;
  #almostEmptyThreshhold;
  #defaultWeeksUntilExpiration;
  #defaultStorageLocation;
  constructor(
    name,
    container,
    abbreviation,
    almostEmptyThreshhold,
    defaultWeeksUntilExpiration,
    defaultStorageLocation
  ) {
    this.#name = name;
    this.#container = container;
    this.#abbreviation = abbreviation;
    this.#almostEmptyThreshhold = almostEmptyThreshhold;
    this.#defaultWeeksUntilExpiration = defaultWeeksUntilExpiration;
    this.#defaultStorageLocation = defaultStorageLocation;
  }
  get name() {
    return this.#name;
  }
  get container() {
    return this.#container;
  }
  get almostEmptyThreshhold() {
    return this.#almostEmptyThreshhold;
  }
  get defaultWeeksUntilExpiration() {
    return this.#defaultWeeksUntilExpiration;
  }
  get defaultStorageLocation() {
    return this.#defaultStorageLocation;
  }
}
module.exports = FoodItem;
