const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", function(name) {
        console.log(`${name} is the dudes name`);
});

rl.question("Where do you live? ", function(name) {
    console.log(`${name} is the dudes lives`);
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
