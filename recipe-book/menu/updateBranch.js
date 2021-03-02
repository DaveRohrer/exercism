const updateBranch = [
  {
    displayString: `
Where was the container you are updating stored?
  [F]Freezer
  [D]Deep Freezer
  [R]Refridgerator
  [C]Cabinet
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[u]$/,
  },
  {
    displayString: `
Please enter the abbreviation of the container you are updating
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[u],[fdrc]$/,
  },
  {
    displayString: `
Please enter the percent of food remaining in the container
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[u],[fdrc],\w+$/,
  },
];

module.exports = updateBranch;
