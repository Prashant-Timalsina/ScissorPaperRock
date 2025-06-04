
let playerScore = 0
let computerScore = 0

const computerChoice = ['rock', 'scissor', 'paper']
const icons = {
    rock: '✊ Rock',
    scissor: '✌️ Scissor',
    paper: '🖐️ Paper'
}

function play(playerChoice){
    document.querySelectorAll('.ch').forEach(card =>card.classList.remove('selected'));
    document.querySelector(`.ch.${playerChoice}`).classList.add('selected');

    const compChoice = computerChoice[Math.floor(Math.random() *3)]

    document.querySelector('.computerChoice').textContent = icons[compChoice];

    if(playerChoice === compChoice){
        document.querySelector('.result').textContent = "Draw";
    }
    else if(
        (playerChoice === 'rock' && compChoice === 'scissor')||
        (playerChoice === 'scissor' && compChoice === 'paper')||
        (playerChoice === 'paper' && compChoice === 'rock')
    ){
        document.querySelector('.result').textContent = "You win";
        playerScore++;
    }
    else{
        document.querySelector('.result').textContent = "You Lost";
        computerScore++;
    }

    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".computerScore").textContent = computerScore;
}

function reset(){
    playerScore=0
    computerScore=0
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".computerScore").textContent = computerScore;
    document.querySelector(".computerChoice").textContent = "After You"
    document.querySelector(".result").textContent = "Pick Your Choice"
    document.querySelectorAll(".ch").forEach(card =>card.classList.remove("selected"))
}
