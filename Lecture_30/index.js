/* random password generator */

function generatePassword(length, LowerCase, UpperCase, Numbers, Symbols) {
    const lowChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const symbolChars = "~`'!@#$%^&*()_+-=[]{}|;:,.<>?|";

    let allowedChars = "";
    let password = "";

    allowedChars += LowerCase ? lowChars : "";
    allowedChars += UpperCase ? upperChars : "";
    allowedChars += Numbers ? numChars : "";
    allowedChars += Symbols ? symbolChars : "";

    console.log(`User must choose password from: ${allowedChars}`);

    if (length <= 0) {
        return "Password length must be greater than 0";
    }
    if (allowedChars.length === 0) {
        return "Must select at least one character type";
    }

    for (let index = 0; index < length; index++) {
        const randomIdx = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIdx];
    }

    return password;
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);