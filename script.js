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

  

  

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
