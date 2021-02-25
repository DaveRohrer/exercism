const depositBranch = [
  {
    displayString: `
Deposited food to...'
  [F]Freezer
  [D]Deep Freezer
  [R]Refridgerator
  [C]Cabinet
  [Back]Back to Previous Screen
  [Exit]Exit
    `,
    regexp: /^[d]$/,
  },
  {
    displayString: `
Please enter the abbreviation of the food you deposited
  [Back]Back to Previous Screen
  [Exit]Exit
    `,
    regexp: /^[d],[fdrc]$/,
  },
  {
    displayString: `
Please enter the number of containers you deposited
  [Back]Back to Previous Screen
  [Exit]Exit
   `,
    regexp: /^[d],[fdrc],\w+$/,
  },
];

module.exports = depositBranch;
