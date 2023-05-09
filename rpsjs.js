  
/* Get random choice from computer: rock, paper, or scissors */
const choices = [
    "Roock", "Pooper", "Scoosers"
];

let getComputerChoice = choices [Math.floor(Math.random()*choices.length)];

console.log (getComputerChoice);

/* Provide three buttons for the user to select rock, paper, or scissors. */

/* If user's choice equals computer's choice, return message: Computer chose CHOICE It's a tie! */

/* If user chooses paper and computer chooses rock, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses rock and computer chooses scissors, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses scissors and computer chooses paper, return message: Computer chose CHOICE. You win! Else return message: You lose! */