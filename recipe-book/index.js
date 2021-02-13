const readline = require("readline");
const questionPromise = require("./question-promise");

(async function () {
    const ingredients = {
      bread: {
        displayName: "Bread",
      }
    };

    const recipes = {
      peanutbutterSurprise: {
        ingredients: [
          {id: "bread", amount: 2}
        ]
      }
    };

    const selectedRecipes = [
      "peanutbutterSurprise"
    ];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(`
    1. Show List
    2. Add to List
    `);
    const response = await questionPromise(rl, "What to do?");

    switch (response) {
        case "1": {
            for (let i of selectedRecipes) {
              for (let j of recipes[i].ingredients) {
                const displayName = ingredients[j.id].displayName;
                const amount = j.amount;
                console.log(displayName + ": " + amount);
              }
            }
        }
    }


    rl.close();


    rl.on("close", function () {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });

})()