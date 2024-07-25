let humanScore = 0;
let computerScore = 0;

function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice;

    if (random === 0) {
        choice = "ROCK";
    } else if (random === 1) {
        choice = "PAPER";
    } else {
        choice = "SCISSORS";
    }

    return choice;
}

function humanChoice() {
    let getChoice;

    do {
        getChoice = prompt("Input your choice (ROCK, PAPER, SCISSORS or ! to end the program)").toUpperCase();
    } while (!["ROCK", "PAPER", "SCISSORS", "!"].includes(getChoice));

    return getChoice;
}

function game() {
    let humanChoiceResult;

    do {
        let computerChoiceResult = computerChoice();
        humanChoiceResult = humanChoice();

        if (humanChoiceResult === "!") {
            console.log(`Game ended.\nHuman: ${humanScore}\nComputer: ${computerScore}`);
            return; // Exit the function
        }

        console.log(`Computer chose: ${computerChoiceResult}`);
        console.log(`Human chose: ${humanChoiceResult}`);

        if (computerChoiceResult === humanChoiceResult) {
            console.log("It's a tie!");
        } else if (
            (computerChoiceResult === "ROCK" && humanChoiceResult === "SCISSORS") ||
            (computerChoiceResult === "SCISSORS" && humanChoiceResult === "PAPER") ||
            (computerChoiceResult === "PAPER" && humanChoiceResult === "ROCK")
        ) {
            console.log("Computer Wins");
            computerScore++;
        } else {
            console.log("Human Wins");
            humanScore++;
        }

    } while (humanChoiceResult !== "!"); // Corrected syntax for while loop

    // The following line is redundant and will never be reached, but it's left here for completeness
    console.log(`Game ended.\nHuman: ${humanScore}\nComputer: ${computerScore}`);
}

game();
