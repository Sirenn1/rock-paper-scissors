let humanScore = 0;
let computerScore = 0;
let humanChoice = '';
let computerChoice = '';
let rounds = 0;
let prompt = '';

const rockButton = document.querySelector(".rock-button");
rockButton.addEventListener("click", () => {
    humanChoice = 'Rock';
    generateChoice();
});

const paperButton = document.querySelector(".paper-button");
paperButton.addEventListener("click", () => {
    humanChoice = 'Paper';
    generateChoice();
});

const scissorButton = document.querySelector(".scissor-button");
scissorButton.addEventListener("click", () => {
    humanChoice = 'Scissor';
    generateChoice();
});

function generateChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissor'];
    let index = Math.floor(Math.random() * 3);
    computerChoice = choiceArray[index];
    console.log(computerChoice);
    determineWinner();
}

function determineWinner() {
    if (computerChoice === humanChoice) {
        rounds++;
        prompt = "It's a tie";
    } else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissor') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissor' && computerChoice === 'Paper')
    ) {
        rounds++;
        humanScore++;
        prompt = "You Win";
    } else {
        rounds++;
        computerScore++;
        prompt = "Computer Wins";
    }
    updateDisplay();
}

const computerMove = document.createElement('div');
computerMove.innerText = `Computer's move: ${computerChoice}`;
console.log(`Computer Move : ${computerChoice}`);
document.body.appendChild(computerMove);

const message = document.createElement('div');
document.body.appendChild(message);

function updateDisplay() {
    roundDisplay.innerText = `Round(s) Played: ${rounds}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    message.innerText = `${prompt}!`;
    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    computerMove.innerText = `Computer's move: ${computerChoice}`;
}

const roundDisplay = document.createElement('div');
roundDisplay.innerText = `Round(s) Played: ${rounds}`;
document.body.appendChild(roundDisplay);

const cScoreDisplay = document.createElement('div');
cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
document.body.appendChild(cScoreDisplay);

const hScoreDisplay = document.createElement('div');
hScoreDisplay.innerText = `Human Score: ${humanScore}`;
document.body.appendChild(hScoreDisplay);
