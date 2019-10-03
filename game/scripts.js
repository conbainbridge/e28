let computerHand = ["rock", "paper", "scissors"];
let button = document.getElementById('shoot');
let gameResult = document.getElementById('game-result');
button.addEventListener('click', gamePlay);
function gamePlay() {
    let humanHand = document.querySelector('input[name="hand"]:checked').value;
    let i = Math.floor(Math.random() * 3);
    let response = 'The computer chose ' + computerHand[i] + '.';
    var index = 3;
    computerHand.append('test');
    if (computerHand[i] == 'rock' && humanHand == 'paper') {
        gameResult.innerHTML = response + ' <span class="win">You win this round!</span>';
    } else if (computerHand[i] == 'rock' && humanHand == 'scissors') {
        gameResult.innerHTML = response + ' <span class="lose">You lost this round.</span>';
    } else if (computerHand[i] == 'paper' && humanHand == 'rock') {
        gameResult.innerHTML = response + ' <span class="lose">You lost this round.</span>';
    } else if (computerHand[i] == 'paper' && humanHand == 'scissors') {
        gameResult.innerHTML = response + ' <span class="win">You win this round!</span>';
    } else if (computerHand[i] == 'scissors' && humanHand == 'paper') {
        gameResult.innerHTML = response + ' <span class="lose">You lost this round.</span>';
    } else if (computerHand[i] == 'scissors' && humanHand == 'rock') {
        gameResult.innerHTML = response + ' <span class="win">You win this round!</span>';
    } else if (computerHand[i] == humanHand) {
        gameResult.innerHTML = response + ' <span class="draw">That\'s a draw! Try again!</span>';
    }
}