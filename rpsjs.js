  
/* Get random choice from computer: rock, paper, or scissors */


const choices = ['Roock', 'Pooper', 'Scoosers'];

console.log(computerChoice(choices));

function computerChoice(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}  

function roock() {
    document.getElementById("computerChose").innerHTML = "Computer chose " + computerChoice(choices);
    document.getElementById("youChose").innerHTML = "You chose Roock";
}


if (computerChoice(choices) === 'Roock') {
    document.getElementById('results').innerHTML = "It's a tie. Foo!";
} else if (computerChoice(choices) === 'Pooper') {
    document.getElementById('results').innerHTML = "Pooper boots roock. You lose.";
} else {
    document.getElementById('results').innerHTML = "Roock boops Scoosers. You win!";
}


/* If user chooses paper and computer chooses rock, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses rock and computer chooses scissors, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses scissors and computer chooses paper, return message: Computer chose CHOICE. You win! Else return message: You lose! */