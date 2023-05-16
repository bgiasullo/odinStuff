  
/* Get random choice from computer: rock, paper, or scissors */


const choices = ['Roock', 'Pooper', 'Scoosers'];
console.log(computerChoice(choices));

function computerChoice(choices)
{
    return choices[Math.floor(Math.random()*choices.length)];
}  

function seeComputer()
{
    document.getElementById("computerChose").innerHTML = "Computer has chosen.";
    document.getElementById("nowYou").innerHTML = "Now you choose...";
} 


/* If user chooses paper and computer chooses rock, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses rock and computer chooses scissors, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses scissors and computer chooses paper, return message: Computer chose CHOICE. You win! Else return message: You lose! */