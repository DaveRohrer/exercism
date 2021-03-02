const STORAGE_LOCATIONS = [
  "Cabinet",
  "Refrigerator",
  "Freezer",
  "Deep Freezer",
];

class FoodItem {
  #name;
  #containerType;
  #abbreviation;
  #almostEmptyThreshhold;
  #defaultWeeksUntilExpiration;
  #defaultStorageLocation;
  #weeksUntilExpirationAfterPullingToRefrigerator;
  constructor(
    name,
    containerType,
    abbreviation,
    almostEmptyThreshhold,
    defaultWeeksUntilExpiration,
    defaultStorageLocation,
    weeksUntilExpirationAfterPullingToRefrigerator
  ) {
    this.#name = name;
    this.#containerType = containerType;
    this.#abbreviation = abbreviation;
    this.#almostEmptyThreshhold = almostEmptyThreshhold;
    this.#defaultWeeksUntilExpiration = defaultWeeksUntilExpiration;
    this.#defaultStorageLocation = defaultStorageLocation;
    this.#weeksUntilExpirationAfterPullingToRefrigerator = weeksUntilExpirationAfterPullingToRefrigerator;
  }
  get name() {
    return this.#name;
  }
  get containerType() {
    return this.#containerType;
  }
  get abbreviation() {
    return this.#abbreviation;
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
  get weeksUntilExpirationAfterPullingToRefrigerator() {
    return this.#weeksUntilExpirationAfterPullingToRefrigerator;
  }
  get displayString() {
    return (
      "\nFood Item Name: " +
      this.name +
      "\nContainer: " +
      this.containerType +
      "\nAbbreviation: " +
      this.abbreviation +
      "\nAlmost Empty Threshold: " +
      this.almostEmptyThreshhold +
      "\nDefault Weeks Until Expiration: " +
      this.defaultWeeksUntilExpiration +
      "\nDefault Storage Location: " +
      this.defaultStorageLocation +
      "\nWeeks Until Expiration After Entering Fridge: " +
      this.weeksUntilExpirationAfterPullingToRefrigerator
    );
  }
}
module.exports = FoodItem;
