const options = ["rock", "paper", "scissors"];
let countUser = 0; let countComputer = 0;


function round(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                countComputer += 1;
                return ("You Lose! Paper beats Rock");
            }
            else if (computerSelection == "scissors") {
                countUser += 1;
                return ("You Win! Rock beats Scissors");
            }
            else {
                return ("Tie");
            }
        case "paper":
            if (computerSelection == "scissors") {
                countComputer += 1;
                return ("You Lose! Scissors beats Paper");
            }
            else if (computerSelection == "rock") {
                countUser += 1;
                return ("You Win! Paper beats Rock");
            }
            else {
                return ("Tie");
            }
        case "scissors":
            if (computerSelection == "rock") {
                countComputer += 1;
                return ("You Lose! Rock beats Scissors");
            }
            else if (computerSelection == "paper") {
                countUser += 1;
                return ("You Win! Scissors beats Paper");
            }
            else {
                return ("Tie");
            }
    }
}

function game() {

    //Computer's random choosing
    function getComputerChoice() {
        return (options[(Math.floor(Math.random() * options.length))]);
    };

    //The player chooses here without the possibility of making a mistake
    let playerSelection;
    let finalSelection;
    do {
        playerSelection = prompt("Choose an option: rock , paper or scissors.").toLowerCase();
        if (options.includes(playerSelection)) {
            finalSelection = playerSelection;
        }
        else {
            alert("Invalid option, try again.");
        }
    }
    while (finalSelection !== playerSelection);
    console.log(finalSelection);
    console.log(playerSelection);


    let computerSelection = getComputerChoice();

    console.log(round(finalSelection, computerSelection));
    console.log("Score User: " + countUser + " || Score Computer: " + countComputer);


}

for (var i = 0; i <= 5; i++) {
    game();
}
if (countUser>countComputer){
    console.log("You are the winner!");
}
else if(countUser<countComputer){
    console.log("The computer won!");
}
else{
    console.log("It's a draw!");
}


