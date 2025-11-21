### 5-day project

# Participants: B
# Due date: 5-7 days
# Presentation: mandatory

# Project requirements:
FR001	Solo Project	The project must be completed individually without teammates.

FR002	Public GitHub Repository	Use a single public GitHub repository, kept public for instructor code inspection. No instructors added as collaborators.

FR003	Incremental Development with PRs	All updates to the main branch must be done exclusively through Pull Requests (PRs).

FR004	Code Presentation and Explanation	During the final presentation, the student must explain their code line by line to the class.


## Programs to create:

FR005	Rock Paper Scissors Game Implementation	Create a command-line Rock Paper Scissors game that: takes the player’s input from process.argv, randomly generates computer moves, determines the winner, and outputs the result.

Rock Paper Scissors
Description: Implement a basic Rock Paper Scissors game.
Requirements:
The program should take the player’s move as an input from process.argv.
The program should randomly generate a move for the computer.
Determine the winner based on the rules of Rock Paper Scissors.
Output the result (win, lose, or draw) to the console.

Example: node rockPaperScissors.js rock # Output: You chose rock. Computer chose scissors. You win!
https://en.wikipedia.org/wiki/Rock_paper_scissors


### rps-game.js
Run gamefile with arguments (rock, paper, scissors - or use r,p,s), for example: node rps-game.js p



FR006	Pig Latin Translator Implementation	Create a command-line Pig Latin translator that: takes input from process.argv, converts each word according to Pig Latin rules, and outputs the translated text.

English to Pig Latin Translator
Description: Create a program that translates English text to Pig Latin.
Requirements:
The program should take an English phrase as an input from process.argv.
Convert each word to Pig Latin:
If a word starts with a consonant and a vowel, put the first letter of the word at the end of the word and add “ay.”
Example: Happy = appyh + ay = appyhay
If a word starts with two consonants move the two consonants to the end of the word and add “ay.”
Example: Child = Ildch + ay = Ildchay
If a word starts with a vowel add the word “way” at the end of the word.
Example: Awesome = Awesome +way = Awesomeway
Output the translated phrase to the console.

Example: node pigLatin.js "Pig Latin is hard to speak" # Output: Igpay Atinlay isway ardhay otay eakspay
https://en.wikipedia.org/wiki/Pig_Latin



FR007	Caesar Cipher Implementation	Create a command-line Caesar Cipher encryption program that: takes a phrase and a shift number from process.argv, applies the shift (both positive and negative), and outputs the encrypted text.

Caesar Cipher
Description: Implement a basic Caesar Cipher encryption.
Requirements:
The program should take a phrase and a shift number as inputs from process.argv.
Encrypt the phrase by shifting each letter, based on its position in the english alphabet, by the specified number.
Case insensitive
A negative shift means shift to the left
A positive shift means shift to the right
Output the encrypted phrase to the console.

Example: node caesarCipher.js "hello world" 3 # Output: khoor zruog
https://en.wikipedia.org/wiki/Caesar_cipher



## PRJ-links:

Github:
    https://github.com/jobben-2025/webAPIs

Github-Pages:
    

Trello:
    https://trello.com/b/qAfXQHkY/webapis










