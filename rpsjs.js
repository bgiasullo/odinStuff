
const choices = ['roock', 'pooper', 'scoosers'];

  function getComputerChoice(choices) {
 return choices[Math.floor(Math.random()*choices.length)];
}

console.log(getComputerChoice(choices));

let computerChoice = getComputerChoice(choices);

function roock() {
    document.getElementById("start").innerHTML = "You chose roock. Computer chose " + computerChoice + ".";
  if (computerChoice == 'roock') {
    results = "It's a tie, ya dangus.";
    }
  else if (computerChoice == 'pooper')
    {
    results = "Pooper boops roock. You lose.";
    }
    else if (computerChoice == 'scoosers') {
        results = 'Roock boots scoosers. You win! &#127881;'
    }
  document.getElementById("results").innerHTML = results;
  }

  function pooper() {
    document.getElementById("start").innerHTML = "You chose pooper. Computer chose " + computerChoice + ".";
  if (computerChoice == 'pooper') {
    results = "It's a tie, ya dangus.";
    }
  else if (computerChoice == 'roock')
    {
    results = "Pooper boops roock. You win! &#127881;";
    }
    else if (computerChoice == 'scoosers') {
        results = 'Scoosers boots pooper. You lose.'
    }
  document.getElementById("results").innerHTML = results;
  }

  function scoosers() {
    document.getElementById("start").innerHTML = "You chose scoosers. Computer chose " + computerChoice + ".";
  if (computerChoice == 'scoosers') {
    results = "It's a tie, ya dangus.";
    }
  else if (computerChoice == 'roock')
    {
    results = "Roock boops scoosers. You lose.";
    }
    else if (computerChoice == 'pooper') {
        results = 'Scoosers boots pooper. You win! &#127881;'
    }
  document.getElementById("results").innerHTML = results;
  }

  