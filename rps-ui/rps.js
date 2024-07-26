console.log('rps.js script loaded');

let computerScore = 0;
let humanScore = 0;
let gameActive = true;
let hChoice = "";
let rounds = 0;

function generateChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(hChoice, cChoice) {
    if (hChoice === cChoice) {
        rounds++;
        return "It's a tie!";
    } else if (
        (hChoice === "Rock" && cChoice === "Scissor") ||
        (hChoice === "Paper" && cChoice === "Rock") ||
        (hChoice === "Scissor" && cChoice === "Paper")
    ) {
        humanScore++;
        rounds++;
        return "Human wins!";
    } else {
        computerScore++;
        rounds++;
        return "Computer wins!";
    }
}

function playGame(hChoice) {
    const cChoice = generateChoice();
    console.log(`Human choice: ${hChoice}`);
    console.log(`Computer choice: ${cChoice}`);
    const result = determineWinner(hChoice, cChoice);
    console.log(result);
    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    updateDisplay();
}

function humanChoice() {
    const rButton = document.querySelector(".rock");
    rButton.onclick = () => {
        hChoice = "Rock";
        console.log("Rock clicked");
        if (gameActive) playGame(hChoice);
    }

    const pButton = document.querySelector(".paper");
    pButton.onclick = () => {
        hChoice = "Paper";
        console.log("Paper clicked");
        if (gameActive) playGame(hChoice);
    }

    const sButton = document.querySelector(".scissor");
    sButton.onclick = () => {
        hChoice = "Scissor";
        console.log("Scissor clicked");
        if (gameActive) playGame(hChoice);
    }

    const qButton = document.querySelector(".quit");
    qButton.onclick = () => {
        console.log("Quitting Game...");
        gameActive = false;
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
        const gameEnd = document.createElement("div");
        gameEnd.innerText = 'Game Ended';
        document.body.appendChild(gameEnd);
        updateDisplay(); // Update display after game ends
    }
}

humanChoice();

// Create elements for displaying scores and rounds
const roundNum = document.createElement("div");
const hScore = document.createElement("div");
const cScore = document.createElement("div");

roundNum.id = "roundNum";
hScore.id = "hScore";
cScore.id = "cScore";

roundNum.innerHTML = `<br>Rounds: ${rounds}`;
hScore.innerHTML = `<br>Human: ${humanScore}`;
cScore.innerHTML = `<br>Computer: ${computerScore}`;

document.body.appendChild(roundNum);
document.body.appendChild(hScore);
document.body.appendChild(cScore);

function updateDisplay() {
    roundNum.innerHTML = `<br>Rounds: ${rounds}`;
    hScore.innerHTML = `<br>Human: ${humanScore}`;
    cScore.innerHTML = `<br>Computer: ${computerScore}`;
}
