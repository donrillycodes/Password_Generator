
function generatePassword(length, includeLowercase, includeUppercase, inlcudeNumbers, includeSymbols) {
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChars = "abcdefghijvklmnopqrstuvwxyz";
    let characters = "/?-_*&%$#()@!";
    const numberChars = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeSymbols ? characters : "";
    allowedChars += inlcudeNumbers ? numberChars : "";

    if (length <= 0) {
        return `(passowrd length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return `(at least one character shouod be selected)`;
    }

    for (i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const inlcudeNumbers = true;
const includeSymbols = true;
const generatedPassword = document.getElementById("generatedPassword");



const password = generatePassword(passwordLength, includeLowercase, includeUppercase, inlcudeNumbers, includeSymbols);

generatedPassword.textContent = (`Geenrated passowrd: ${password}`);