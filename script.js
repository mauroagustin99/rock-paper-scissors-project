const options = ["rock", "paper", "scissors"];
let countUser = 0; let countComputer = 0;



function round(playerSelection, computerSelection) {

    switch (playerSelection) {
        case ("Rock"):
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
        case ("Paper"):
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
        case ("Scissors"):
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
    //

    const buttons = document.querySelectorAll('button');

    const container = document.querySelector('.content');
    const selection = document.createElement('div');
    const result = document.createElement('div');
    const score = document.createElement('div');

    container.appendChild(selection);
    container.appendChild(result);
    container.appendChild(score);

    buttons.forEach((button) => {

        button.addEventListener('click', () => {

            let playerSelection = (button.textContent);
            let computerSelection = getComputerChoice();


            result.textContent = round(playerSelection, computerSelection);
            selection.textContent = "You chose: " + playerSelection + " -- The computer chose: " + computerSelection;
            score.textContent = "Score User: " + countUser + " || Score Computer: " + countComputer;
            
        });

    });

}
game();

/* 
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
*/



