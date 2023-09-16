function getUniqueMessage() {
    const timestamp = Date.now();
    return `Congratulations! You guessed the password in ${guesses} ${guesses === 1 ? 'guess' : 'guesses'}. Timestamp: ${timestamp}`;
}

const guess = document.getElementById("guess")
const output = document.getElementById("output")

const password = "tesseract";
function checkguess(){
    if(guess === password){
        unique_message = getUniqueMessage();
        output.innerHTML = unique_message;
        guess.disabled = true;
    }
}