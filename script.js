// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Asks for various prompts to creat the password 
function generatePassword() {

  var randPassword;


  // Only accepts correct prompt inputs otherwise keeps asking
  let passLength = prompt("Between 8 and 128 characters, how long would you like your password to be?");


  while (isCorrectPrompt(passLength) === false) {

    passLength = prompt("That was an incorrect input, please try again." + "\r\n" + "\r\n" + "Between 8 and 128 characters, how long would you like your password to be?");

  };



  // Only accepts correct prompt inputs otherwise keeps asking. If response is null, it becomes an empty string.
  let passLowerCase = prompt("Would you like to use lowercase letters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase() || '';

  

  while (isCorrectPromptYesNo(passLowerCase) === false) {

    passLowerCase = prompt("That was an incorrect input, please try again." + "\r\n" + "\r\n" + "Would you like to use lowercase letters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase() || '';

  };


  // Only accepts correct prompt inputs otherwise keeps asking. If response is null, it becomes an empty string.
  let passUpperCase = prompt("Would you like to use uppercase letters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLocaleLowerCase() || '';

  while (isCorrectPromptYesNo(passUpperCase) === false) {

    passUpperCase = prompt("That was an incorrect input, please try again" + "\r\n" + "\r\n" + "Would you like to use uppercase letters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLocaleLowerCase() || '';


  }

  // Only accepts correct prompt inputs otherwise keeps asking. If response is null, it becomes an empty string.
  let numeric = prompt("Would you like to use numbers?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase() || '';

  while (isCorrectPromptYesNo(numeric) === false) {

    numeric = prompt("That was an incorrect input, please try again" + "\r\n" + "\r\n" + "Would you like to use numbers?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLocaleLowerCase() || '';

  }


  // Only accepts correct prompt inputs otherwise keeps asking. If response is null, it becomes an empty string.
  let specialChar = prompt("Would you like to use special characters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase() || '';

  while (isCorrectPromptYesNo(specialChar) === false) {
    specialChar = prompt("That was an incorrect input, please try again" + "\r\n" + "\r\n" + "Would you like to use special characters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase()|| '';


  }



  return randPassword;

}


// Checks to see if the length prompt is within acceptable bounds and ends if the user presses cancel 
function isCorrectPrompt(x) {
  if (x === null) {
    return false;

  } else if (x >= 8 && x <= 128) {
    return true;


  } else {
    return false;
  }
}

// Checks to see if the prompt is yes or no 
function isCorrectPromptYesNo(y) {
  
  if (y === '') {
    return false;

  } else if (y === "yes" || y === "no") {
    return true;


  } else {
    return false;
  }
}