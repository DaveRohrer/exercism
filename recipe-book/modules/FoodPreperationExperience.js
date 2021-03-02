class FoodPreparationExperience {
  #name;
  #foodItemResult;
  #foodItemRequirements;
  #yield;
  constructor(name, foodItemResult, foodItemRequirements, yield) {
    this.#name = name;
    this.#foodItemResult = foodItemResult;
    this.#foodItemRequirements = foodItemRequirements;
    this.#yield = yield;
  }
  get name() {
    return this.#name;
  }
  get foodItemResult() {
    return this.#foodItemResult;
  }
  get foodItemRequirements() {
    return this.#foodItemRequirements;
  }
  get yield() {
    return this.#yield;
  }
}
module.exports = FoodPreparationExperience;
