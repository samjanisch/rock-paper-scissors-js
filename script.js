const gameArray = ["Rock", "Paper", "Scissors"]; 
function computerPlay() {
   return gameArray[Math.floor(Math.random() * gameArray.length)];
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', playRound => {
        playerSelection = button.id
    })
})

function playRound(playerSelection, computerSelection) {

    
    if (playerSelection == computerSelection) {
        return console.log("That's a tie! You both threw " + playerSelection)
    } else if (playerSelection == "Rock" & computerSelection == "Scissors") {
        console.log("You win! Rock crushes Scissors!")
        return true
    } else if (playerSelection == "Rock" & computerSelection == "Paper") {
        console.log("You lose! Paper covers Rock")
        return false
    } else if (playerSelection == "Scissors" & computerSelection == "Rock") {
        console.log("You lose! Rock crushes Scissors")
        return false
    } else if (playerSelection == "Scissors" & computerSelection == "Paper") {
        console.log("You win! Scissors cuts Paper")
        return true
    } else if (playerSelection == "Paper" & computerSelection == "Rock") {
        console.log("You win! Paper covers Rock")
        return true
    }else if (playerSelection == "Paper" & computerSelection == "Scissors") {
        console.log("You lose! Paper covers Rock")
        return false
    }
}


function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
    }
    
    function game() {
        let i = 0;
        let userScore = 0;
        let computerScore = 0;
        
            let playerSelection = capitalize(buttons);
            let computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection) == true) {
                userScore ++;
            } else if (playRound(playerSelection, computerSelection) == false){
                computerScore ++;
            } else {
                userScore ++;
                computerScore++;
            }
            console.log("User: " + userScore)
            console.log("Computer: " + computerScore)
            i = i + 1
        
        if (userScore > computerScore) {
            return console.log("Congrats! You win!")
        } else {
            return console.log("Sorry, you didn't win this time.")
        }
        
    }
    game()