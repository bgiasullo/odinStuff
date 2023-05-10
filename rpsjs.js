  
/* Get random choice from computer: rock, paper, or scissors */

function computerChoice(choices)
{
  
return choices[Math.floor(Math.random()*choices.length)];
     
}

const choices = ['Roock', 'Pooper', 'Scoosers'];
console.log(random_item(choices));


function roock() {
    document.getElementById("youChose").innerHTML = "You chose roock!";
  }

  if (computerSelection = "Pooper") {
    document.getElementById("results").innerHTML = "Pooper beats roock! You lose. :(";
  } else {
    document.getElementById("results").innerHTML = "Roock beats scoosers! You win! :)";
}

function pooper() {
    document.getElementById("youChose").innerHTML = "You chose pooper!";
  }

function scoosers() {
    document.getElementById("youChose").innerHTML = "You chose scoosers!";
  }

/* Provide three buttons for the user to select rock, paper, or scissors. */

/* If user's choice equals computer's choice, return message: Computer chose CHOICE It's a tie! */

function playRound(playerSelection, computerSelection) {
    // your code here!
  }

/* If user chooses paper and computer chooses rock, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses rock and computer chooses scissors, return message: Computer chose CHOICE. You win! Else return message: You lose! */

/* If user chooses scissors and computer chooses paper, return message: Computer chose CHOICE. You win! Else return message: You lose! */