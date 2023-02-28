let low = document.getElementById('low')
let upp = document.getElementById('up') // Checkbox up ID
let num = document.getElementById('num') // Checkbox num ID
let spec = document.getElementById('spec') // Checkbox spec ID



let generateBtn = document.querySelector("#generate"); // Button ID


function writePassword() {


    let password = generatePassword();
    let passwordText = document.querySelector("#password"); // text area ID

    passwordText.value = password; // function will run in the text area to display new password

}


generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    let lowerPrompt = prompt('Do you want to use lowercase?'),
        upperPrompt = prompt('Do you want to use uppercase?'),
        numberPrompt = prompt('Do you want to use numbers?'),
        symbolPrompt = prompt('Do you want to use symbols?'),
        lengthPrompt = prompt('How long do you want your password?'),
        lowChar = 'abcdefghijklmnopqrstuvwxyz',
        upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXY',
        numChar = '0123456789',
        specChar = '!@#$%^&*(){}:',
        returnValue = "",
        usedChars = '';

    if (lowerPrompt.toLowerCase() === 'yes') {
        usedChars += lowChar
    }
    if (upperPrompt.toLowerCase() === 'yes') {
        usedChars += upChar
    }
    if (numberPrompt.toLowerCase() === 'yes') {
        usedChars += numChar
    }
    if (symbolPrompt.toLowerCase() === 'yes') {
        usedChars += specChar
    }
    if (lengthPrompt < 8) {
        alert('Your password must be longer than 8 characters.')

    } else {



    for (let i=0; i<lengthPrompt; i++) {
        returnValue += usedChars.charAt(Math.floor(Math.random() * usedChars.length))
    }

    return returnValue

    }
}
