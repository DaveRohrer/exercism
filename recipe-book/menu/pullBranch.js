const pullBranch = [
  {
    displayString: `
Pulled food from...
  [F]Freezer
  [D]Deep Freezer
  [C]Cabinet
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[p]$/,
  },
  {
    displayString: `
Pulled food to...
  [F]Freezer
  [D]Deep Freezer
  [R]Refrigerator
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[p],[fdc]$/,
  },
  {
    displayString: `
Please enter the abbreviation of the food you pulled
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[p],[fdc],[fdr]$/,
  },
  {
    displayString: `
Please enter the number of containers you pulled
  [Back]Back to Previous Screen
  [Exit]Exit
  `,
    regexp: /^[p],[fdc],[fdr],\w+$/,
  },
];

module.exports = pullBranch;
