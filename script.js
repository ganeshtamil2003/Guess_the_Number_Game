let randomNumber = Math.floor(Math.random() * 101); // Random number between 0 and 100
let attemptsLeft = 7;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attemptsLeft");

    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
        message.textContent = "Please enter a valid number between 0 and 100.";
        message.style.color = "red";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right. The number was ${randomNumber}.`;
        message.style.color = "green";
        resetGame();
        return;
    }

    attemptsLeft--;

    if (attemptsLeft === 0) {
        message.textContent = `Game over! The correct number was ${randomNumber}. Better luck next time!`;
        message.style.color = "red";
        resetGame();
        return;
    }

    if (userGuess > randomNumber) {
        message.textContent = "Your guess is too high.";
    } else {
        message.textContent = "Your guess is too low.";
    }

    message.style.color = "blue";
    attemptsDisplay.textContent = attemptsLeft;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 101);
    attemptsLeft = 5;
    document.getElementById("attemptsLeft").textContent = attemptsLeft;
    setTimeout(() => {
        document.getElementById("message").textContent = "Game reset! Start guessing again.";
        document.getElementById("message").style.color = "black";
    }, 3000);
}
