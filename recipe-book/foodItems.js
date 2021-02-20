const foodItems = {
  wheatBread: {
    displayName: "Wheat Bread",
    container: "Bag",
    defaultWeeksUntilExpiration: 4,
    defaultStorageLocation: "Refridgerator",
  },
  peanutButter: {
    displayName: "Peanut Butter",
    container: "Jar",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Cabinet",
  },
  pistachios: {
    displayName: "Pistachios",
    container: "Pouch",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Cabinet",
  },
  grapes: {
    displayName: "Grapes",
    container: "Bag",
    defaultWeeksUntilExpiration: 2,
    defaultStorageLocation: "Refrigerator",
  },
  apples: {
    displayName: "Apples",
    container: "Bag",
    defaultWeeksUntilExpiration: 4,
    defaultStorageLocation: "Refrigerator",
  },
  broccoliStirFry: {
    displayName: "Broccoli Stir Fry",
    container: "Bag",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Freezer",
  },
  bananas: {
    displayName: "Bananas",
    container: "Bunch",
    defaultWeeksUntilExpiration: 1,
    defaultStorageLocation: "Cabinet",
  },
  almondMilk: {
    displayName: "Almond Milk",
    container: "Carton",
    defaultWeeksUntilExpiration: 2,
    defaultStorageLocation: "Refrigerator",
  },
  cocoPowder: {
    displayName: "Coco Powder",
    container: "Tub",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Cabinet",
  },
  smoothie: {
    displayName: "Smoothie",
    container: "jar",
    defaultWeeksUntilExpiration: 1,
    defaultStorageLocation: "Refrigerator",
  },
  peanutButterSandwhich: {
    displayName: "Peanut Butter Sandwhich",
    container: "Pyrex",
    defaultWeeksUntilExpiration: 1,
    defaultStorageLocation: "Refrigerator",
  },
  brownLentils: {
    displayName: "Brown Lentils",
    container: "Bag",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Cabinet",
  },
  regularLentils: {
    displayName: "Regular Lentils",
    container: "Jar",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Freezer",
  },
  oregano: {
    displayName: "Oregano",
    container: "Shaker",
    defaultWeeksUntilExpiration: 52,
    defaultStorageLocation: "Cabinet",
  },
  basil: {
    displayName: "Basil",
    container: "Shaker",
    defaultWeeksUntilExpiration: 52,
    defaultStorageLocation: "Cabinet",
  },
  salt: {
    displayName: "Salt",
    container: "Shaker",
    defaultWeeksUntilExpiration: 104,
    defaultStorageLocation: "Cabinet",
  },
  mash: {
    displayName: "Mash",
    container: "Jar",
    defaultWeeksUntilExpiration: 52,
    defaultStorageLocation: "Deep Freezer",
  },
  regularLentils: {
    displayName: "Regular Lentils",
    container: "Jar",
    defaultWeeksUntilExpiration: 24,
    defaultStorageLocation: "Freezer",
  },
};

const preparedFood = {
  smoothie: {
    ingredients: [
      { id: "bananas", volume: 0.25 },
      { id: "peanutButter", volume: 0.1 },
      { id: "cocoPowder", volume: 0.1 },
      { id: "almondMilk", volume: 0.15 },
    ],
    yield: 1,
  },
  peanutButterSandwhich: {
    ingredients: [
      { id: "wheatBread", volume: 0.1 },
      { id: "peanutButter", volume: 0.1 },
    ],
    yield: 1,
  },
  regularLentils: {
    ingredients: [
      { id: "brownLentils", volume: 3 }, // makes you think how to store....
      { id: "oregano", volume: 0.1 },
      { id: "basil", volume: 0.1 },
      { id: "salt", volume: 0.15 },
      // { id: "mash", volume: 1, },
    ],
    yield: 7,
  },
};

module.exports = {
  preparedFood,
  foodItems,
};
