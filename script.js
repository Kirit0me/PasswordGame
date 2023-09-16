let guesses = 0;
const password = "tesseract";
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function getUniqueMessage() {
    const timestamp = getCurrentTime();
    return `Congratulations! You guessed the password in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}. Timestamp: ${timestamp}`;
}

const guess = document.getElementById("guess")
const output = document.getElementById("output")

function checkguess(){
    const user_guess = guess.value.toLowerCase();
    guesses++;

    if(user_guess === password){
        unique_message = getUniqueMessage();
        output.innerHTML = unique_message;
        guess.disabled = true;
    } else {
        output.innerHTML = 'Skill issue, Try again!'
    }
}