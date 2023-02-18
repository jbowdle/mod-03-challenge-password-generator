// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables to store user choices
let length;
let lowercase;
let uppercase;
let numeric;
let special;

// Available characters within each set of options
const lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialList = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

const promptUser = function() {
  length = Number(window.prompt(`Select password length: 
  (Please enter a numeric value between 8 and 128)`, "8"));

  // Putting these dialog boxes in a function will prevent the upcoming length validation from breaking the code.
  const confirmCharacter = function() {
    lowercase = window.confirm("Click 'OK' to include lowercase characters");
    uppercase = window.confirm("Click 'OK' to include uppercase characters");
    numeric = window.confirm("Click 'OK' to include numerical characters");
    special = window.confirm("Click 'OK' to include special characters");

    // Validation. If the user selects no characters to use, it will restart the confirmCharacter function until at least one has been chosen.
    if (!lowercase && !uppercase && !numeric && !special) {
      window.alert("You must choose at least one of the four character types to include in your password to continue.");
      confirmCharacter();
    }
  }

  // Length validation. If failed, will restart the loop. If passed, will move on to have user confirm characters.
  if ((length < 8) || 
  (length > 128) ||
  (isNaN(length))) {
    window.alert("You must enter a NUMERIC value between 8 and 128");
    writePassword();
  } else {
    window.alert("The following boxes will ask you what type of characters you want to include in your password. You must select at least one type out of the four.");
    confirmCharacter();
  }
}

const generatePassword = function() {
  promptUser();
  let password = "";

  // All chosen characters will be put in this array by the subsequent if statements
  let characterStorage = [];

  if (lowercase) {
    for (const character of lowercaseList) {
      characterStorage += character;
    }
  }

  if (uppercase) {
    for (const character of uppercaseList) {
      characterStorage += character;
    }
  }

  if (numeric) {
    for (const character of numericList) {
      characterStorage += character;
    }
  }

  if (special) {
    for (const character of specialList) {
      characterStorage += character;
    }
  }

  // for loop generates password from available characters
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characterStorage.length);
    password += characterStorage.slice(randomNum, randomNum + 1);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
