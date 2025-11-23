// RULES:
// For words that begin with consonant sounds, these are also known as consonant blends (two letters that make one sound: e.g., black, slack, clown). The initial consonant blend (or two letters) is moved to the end of the word, then "ay" is added, as in the following examples:[15]

// "pig" = "igpay"
// "latin" = "atinlay"
// "banana" = "ananabay"
// "black" = "ackblay"
// For words that begin with vowel sounds, "way" is added to the end:[15]

// "a" = "away"
// "open" = "openway"

// Example: node pigLatin.js "Pig Latin is hard to speak" # Output: Igpay Atinlay isway ardhay otay eakspay

const vowelList = ["a", "e", "i", "o", "u"]

// Check arguments:
const args = process.argv.slice(2);
// console.log("Argument passed to game: ", args[0]);
console.log("");

// Check if user only provided 1 argument:
if (args.length !== 1) {
    console.error('Please provide exactly one argument, "rock", "paper" or "scissors: "');
    process.exit(1); // clear process cleaner
}

// Check args content and disassemble into words for individual processing:
// console.log(args);

// Create 'properly formatted' object to convert to string later:
properArgs = {
    ThisString: args
}

// Old chunk for memory:
// const argsString = properArgs.ThisString[0]
// console.log(argsString)
// console.log(typeof argsString)
// const wordArray = argsString.split(" ");
// console.log(wordArray)

const outputSentence = [];

const wordArray = properArgs.ThisString[0].split(" ");
// console.log(wordArray)

for (let i = 0; i<wordArray.length; i++) {
    let word = wordArray[i];
    let letterFirst = "";       // reset for each word
    let letterSecond = "";
    
    let isCapitalized = false;
    if (word[0] === word[0].toLocaleUpperCase()) {
        isCapitalized = true;
    }
    
    letterFirst = word[0].toLocaleLowerCase();
    letterSecond = word[1].toLocaleLowerCase();
    word = word.toLocaleLowerCase();        // easier editing, changing letters
    
    if (!vowelList.includes(letterFirst) && vowelList.includes(letterSecond)) {
        // console.log("1st condition, cons+vowel: ", letterFirst, letterSecond, word);
        // !vowelList.includes(letterFirst) == consonant
        // vowelList.includes(letterFirst) == vowel
        word = word.slice(1,word.length);
        word = word + letterFirst + "ay";
        // console.log(word)
    } else if (!vowelList.includes(letterFirst) && !vowelList.includes(letterSecond)) {
        // console.log("2nd condition, cons+cons: ", letterFirst, letterSecond, word);
        word = word.slice(2,word.length);
        word = word + letterFirst + letterSecond + "ay";
        // console.log(word)
    } else if (vowelList.includes(letterFirst)) {
        // console.log("3nd condition, vowel+cons: ", letterFirst, letterSecond, word);
        word = word + "way";
        // console.log(word)
    }

    if (isCapitalized) {
        // word = word.toLocaleUpperCase();        // WHICH function for TITLE, first capital?
        const firstLetter = word.charAt(0).toUpperCase(); 
        const restOfString = word.slice(1);
        word = firstLetter + restOfString;
    }
    outputSentence.push(word);
    // console.log(outputSentence)
}

// Reconstruct sentence from array and OUTPUT to console:
outputSentenceString = "";
outputSentenceString = outputSentence.join(" ");
console.log(outputSentenceString);
console.log("")

process.exit(1); // clear process cleaner