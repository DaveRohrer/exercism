const freezerContents = [
  // TODO Use JS dates or moment.js?
  { id: "peanutButter", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
];

const cabinetContents = [
  // TODO Use JS dates or moment.js?
  { id: "brownLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "brownLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "brownLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
];

const refridgeratorContents = [
  // TODO Use JS dates or moment.js?
  { id: "regularLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
];
const deepFreezerContents = [
  // TODO Use JS dates or moment.js?
  { id: "regularLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 3, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "peanutButter", volume: 1, expirationDate: "2021, 4, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "regularLentils", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "pistachios", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
  { id: "grapes", volume: 1, expirationDate: "2021, 5, 20" },
];

module.exports = {
  freezerContents,
  cabinetContents,
  refridgeratorContents,
  deepFreezerContents,
};
