const readline = require("readline");
const questionPromise = require("./question-promise");
const FoodItem = require("./FoodItem");
//                                                                                                                                 |

(async function () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const handleRootMenuResponse = () => {};
  const pb = new FoodItem("Peanut Butter", "jar", 0.2, 24, "cabinet");
  const menuHandler = {
    currentMenu: `
    1. [P]Pull Food
    2. [D]Deposit Food
    3. [U]Update Container Levels
    4. [G]Manage Grocery List
    5. [X]Exit
    `,
    validResponses: ["1", "2", "3", "4", "5", "P", "D", "U", "G", "X"],
    responseFunction: console.log,
  };

  //menuHandler.responseFunction(menuHandler.currentMenu);
  const response = await questionPromise(rl, menuHandler.currentMenu);

  // switch (response) {
  //   case "1":
  //     menuHandler.responseFunction("partyTime");
  //     break;
  //   case "3":
  // }

  rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });

  rl.close();
})();
