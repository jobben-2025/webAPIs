// Caesar Cipher
// Description: Implement a basic Caesar Cipher encryption.
// Requirements:
// The program should take a phrase and a shift number as inputs from process.argv.
// Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
// Case insensitive
// A negative shift means shift to the left
// A positive shift means shift to the right
// Output the encrypted phrase to the console.

// Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog

const ABCletters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
// Check arguments:
const args = process.argv.slice(2);
// args = [ 'hello world, is my long sentence', '3' ]

if (args.length !== 2) {
    console.error('Please provide exactly 2 arguments, "unencrypted text" and number (3,-2) only: "');
    process.exit(1); // clear process cleaner
}

// Collector for all letters after check/shift:
const outputSentence = [];

// assign sentence as words into array and number (integer) to shiftLetter
const inputString = args[0];
const shiftByNumber = args[1];

const outputArray = [];

for (i=0;i<inputString.length; i++) {
    let letterIndexPos = null;
    let letter = inputString[i];
    if (letter == " ") {
        outputArray.push(" ");
        continue
    } else if (letter) {
        // figure out index no. of letter, reassign/shift, push to outputArray
        letterIndexPos = ABCletters.indexOf(letter, 0);
        
        // shift Index:
        letterIndexPos = letterIndexPos + Number(shiftByNumber)
        
        if (letterIndexPos >25) {
            letterIndexPos -= 26;
        } else if (letterIndexPos < -26) {
            letterIndexPos +=26;
        }

        // reassign letter with new index-position:
        letter = ABCletters[letterIndexPos]

        // push letter into outputArray
        outputArray.push(letter);
        // console.log(letter);
    }
}

// use Array join to connect outputArray into 1 string
const outputString = outputArray.join("");
console.log("");
console.log(outputString);
console.log("");

// Example: node caesar-cipher.js "hello world" 3 # Output: khoor zruog