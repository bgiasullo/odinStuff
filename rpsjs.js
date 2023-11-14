let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['roock', 'pooper', 'scoosers']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'roock' && computerSelection == 'scoosers') ||
        (playerSelection == 'scoosers' && computerSelection == 'pooper') ||
        (playerSelection == 'pooper' && computerSelection == 'roock')) {
        
        playerScore += 1
        result = ('Player chose: ' + playerSelection + "<br>Computer chose: " + computerSelection + "<br><br>You win!"
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again.'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('Player chose: ' + playerSelection + "<br>Computer chose: " + computerSelection + "<br><br>It\'s a tie."
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('Player chose: ' + playerSelection + "<br> Computer chose: " + computerSelection + "<br><br>You lose!"
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>Computer won the game! Reload the page to play again.'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})