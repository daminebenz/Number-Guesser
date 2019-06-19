let min = 1,
	max = 5,
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    inputBtnStyle = document.querySelector('.inputBtn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
})

guessBtn.addEventListener('click', function() {
	let guess = parseInt(guessInput.value);

	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
	}

	if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct !!`)
	} else {
		guessesLeft -= 1;

		if (guessesLeft === 0) {
            gameOver(false, `GAME IS OVER !! The winning number was ${winningNum}.`, 'red')
		} else {
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
		}
	}
});


function gameOver(won, msg){
	
	let color;
    won === true ? [color = 'green',borderColor = 'green'] : [color = 'red',borderColor = 'red'];
	message.style.color = color;
	guessInput.style.borderColor = color;
	guessInput.style.color = color;
	inputBtnStyle.style.color = color;
	inputBtnStyle.style.borderColor = color;
	guessBtn.value = 'Play Again';
	guessBtn.className = 'play-again';
	guessInput.disabled = true;
	
    setMessage(msg);
}

function getRandomNum(min, max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}