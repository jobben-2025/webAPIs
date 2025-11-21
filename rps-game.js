// Create object with all gameplay variations for string lookup:
const possibleResult = {
    "0:0": "It is a tie!",
    "1:1": "It is a tie!",
    "2:2": "It is a tie!",

    "0:1": "You won! Great achievement.",
    "1:2": "You won! Great achievement.",
    "2:0": "You won! Great achievement.",

    "0:2": "You lost this round!",
    "1:0": "You lost this round!",
    "2:1": "You lost this round!",
};

// Replace my if statements for lookup of numbers for entered strings:
const playedHand = {
    "rock": 0,
    "r": 0,
    
    "paper": 1,
    "p": 1,
    
    "scissors": 2,
    "s": 2,

    // Do a reverse-lookup in same object for string assignment at the end using same variable

    0: "rock",
    1: "paper",
    2: "scissor",
};

// Check arguments:
const args = process.argv.slice(2);
// console.log("Argument passed to game: ", args[0]);
console.log("")

// Check if user only provided 1 argument:
if (args.length !== 1) {
    console.error('Please provide exactly one argument, "rock", "paper" or "scissors: "');
    process.exit(1); // clear process cleaner
}

// Convert argument to number:
let playerChoice = 3;
const playerInput = args[0].toLowerCase(); // use toLowerCase for any capital letters typed

playerChoice = playedHand[args]
// console.log("playerChoice by key: ", playerChoice)

// if (playerInput === "rock") {
//     playerChoice = 0;
// } else if (playerInput === "paper") {
//     playerChoice = 1;
// } else if (playerInput === "scissors") {
//     playerChoice = 2;
// }

if (playerChoice === 3) {
    console.error("Supplied argument not matching. Please use 'rock/r', 'paper/p', or 'scissors/s'.");
    process.exit(1);
} else {
    // Computer generates choice:
    let computerChoice = Math.floor(Math.random() * 3); // generate random no. 0-2

    // console.log("computerChoice: ", computerChoice);
    // console.log("playerChoice: ", playerChoice);

    // Create the key string and look up the result directly
    const matchKey = `${computerChoice}:${playerChoice}`;
    // console.log("Lookup matchKey: ", matchKey);

    const resultString = possibleResult[matchKey];

    // Gameplay ended, decision final (win,loss,tie), replace the computerChoice/playerChoice with strings:
    computerChoice = playedHand[computerChoice]
    playerChoice = playedHand[playerChoice]
    console.log("Computer chose: ", computerChoice);
    console.log("Player chose: ", playerChoice);

    // Final result output
    if (resultString) {
        console.log("")
        console.log("--- GAME RESULT ---");
        console.log(resultString);
        console.log("")
    } else {
        console.error("Error: Could not find result for key:", matchKey);
    }
}

console.log("Game ended - you successfully returned to shell.");