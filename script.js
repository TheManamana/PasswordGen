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



function generatePassword(){

  var randPassword;

    let passLength = prompt("Between 8 and 128 characters, how long would you like your password to be?");

    let passLowerCase = prompt("Would you like to use lowercase letters?");

    let passUpperCase = prompt("Would you like to use uppercase letters?");

    let numeric = prompt("Would you like to use numbers?");

    let specialChar = prompt("Would you like to use special characters?");



return sign;

}