// Assignment Code
var generateBtn = document.querySelector("#generate");

let length;
let lowercase;
let uppercase;
let numeric;
let special;

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  length = window.prompt(`Select password length: 
  (Please enter a numeric value between 8 and 128)`, "8");
  window.alert("The following boxes will ask you what type of characters you want to include in your password. You must select at least one type out of the four.");
  lowercase = window.confirm("Click 'OK' to include lowercase characters");
  uppercase = window.confirm("Click 'OK' to include uppercase characters");
  numeric = window.confirm("Click 'OK' to include numerical characters");
  special = window.confirm("Click 'OK' to include special characters");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
