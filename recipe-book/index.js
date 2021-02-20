const readline = require("readline");
const questionPromise = require("./question-promise");
const { foodItems, preparedFood } = require("./foodItems");
const {
  freezerContents,
  cabinetContents,
  refridgeratorContents,
  deepFreezerContents,
} = require("./inventory");

//                                                                                                                                 |
(async function () {
  const showList = (selectedRecipes) => {
    for (let i of selectedRecipes) {
      console.log(`\n${i}:`);
      for (let j of preparedFood[i].ingredients) {
        const displayName = foodItems[j.id].displayName;
        const amount = j.volume;
        console.log(`\t${displayName}: ${amount}`);
      }
    }
  };

  const showInventory = (
    freezerContents,
    cabinetContents,
    refridgeratorContents,
    deepFreezerContents
  ) => {
    const inventory = freezerContents.reduce(
      (acc, { id, volume, expirationDate }) => {
        return (
          acc +
          `\nItem: ${foodItems[id].displayName} Amount: ${volume} ${foodItems[id].container} expiration: ${expirationDate}`
        );
      },
      ""
    );
    console.log(inventory);
  };

  const selectedRecipes = ["smoothie", "regularLentils"];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log(`
    1. Show List
    2. Add to List
    3. Show inventory
    `);
  const response = await questionPromise(rl, "What to do?");

  switch (response) {
    case "1":
      //showList(selectedRecipes);
      break;
    case "3":
      showInventory(
        freezerContents,
        cabinetContents,
        refridgeratorContents,
        deepFreezerContents
      );
      break;
  }

  rl.close();

  rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
})();
