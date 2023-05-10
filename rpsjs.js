  
/* Get random choice from computer: rock, paper, or scissors */

function computerChoice(choices)
{
    return choices[Math.floor(Math.random()*choices.length)];
}  

const choices = ['Roock', 'Pooper', 'Scoosers'];



/* If user chooses paper and computer chooses rock, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses rock and computer chooses scissors, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses scissors and computer chooses paper, return message: Computer chose CHOICE. You win! Else return message: You lose! */