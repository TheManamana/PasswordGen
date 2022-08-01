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
    specialChar = prompt("That was an incorrect input, please try again" + "\r\n" + "\r\n" + "Would you like to use special characters?" + "\r\n" + "\r\n" + "Please type 'yes' or 'no'.")?.toLowerCase() || '';


  }

  

  return createPassword(passLength, passLowerCase, passUpperCase, numeric, specialChar);

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

function createPassword(a, b, c, d, e) {

  // Ends the algorithm if every option was set as no 
  if (b === "no" && c === "no" && d === "no" && e === "no") {
    alert("You cannot have a password with no lowercase, no uppercase, no numerical and no special characters. Please press the generate button to try again.");

    return;
  } else {



    // Variable for the password that will be returned 
    var password = "";

    // Creates possible bank of characters 
    var lCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uCase = [];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var special = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '=', '?', '<', '>'];

    // Uses lCase to creat a new array with all uppercase alphabet 
    lCase.forEach(element => {
      uCase.push(element.toUpperCase());
    });


    var chooserOne = [""];
    var chooserTwo = [""];
    var chooserThree = [""];
    var chooserFour = [""];
    

    // Sets how many arrays we need to choose from based on which characters the user wants to use 
    var howManyChoosers = 0;

    if (b === "yes") {
      howManyChoosers = howManyChoosers + 1;
    }
    if (c === "yes") {
      howManyChoosers = howManyChoosers + 1;
    }
    if (d === "yes") {
      howManyChoosers = howManyChoosers + 1;
    }
    if (e === "yes") {
      howManyChoosers = howManyChoosers + 1;
    }


    for (z = 0; z < howManyChoosers; z++) {

      // Checks to see if chooserOne is empty and if a certain character option is requested. If both are true it sets chooserOne to that options array 
      if (z === 0 && b === "yes") {
        if (chooserOne.length < 2 || array == undefined) {
          chooserOne = lCase;
        }
      }
      if (z === 0 && c === "yes") {
        if (chooserOne.length < 2 || array == undefined) {
          chooserOne = uCase;
        }
      }
      if (z === 0 && d === "yes") {
        if (chooserOne.length < 2 || array == undefined) {
          chooserOne = numbers;
        }
      } if (z === 0 && e === "yes") {
        if (chooserOne.length < 2 || array == undefined) {
          chooserOne = special;
        }


        // Checks to see if chooserTwo is empty and if a certain character option is requested. If both are true it sets chooserOne to that options array              
        if (z === 1 && c === "yes") {
          if (chooserTwo.length < 2 || array == undefined) {
            chooserTwo = uCase;
          }
        }
        if (z === 1 && d === "yes") {
          if (chooserTwo.length < 2 || array == undefined) {
            chooserTwo = numbers;
          }
        } if (z === 1 && e === "yes") {
          if (chooserTwo.length < 2 || array == undefined) {
            chooserTwo = special;
          }
        }


        // Checks to see if chooserThree is empty and if a certain character option is requested. If both are true it sets chooserOne to that options array              
        if (z === 2 && d === "yes") {
          if (chooserThree.length < 2 || array == undefined) {
            chooserThree = numbers;
          }
        } if (z === 2 && e === "yes") {
          if (chooserThree.length < 2 || array == undefined) {
            chooserThree = special;
          }
        }



        // Checks to see if chooserFour is empty and if a certain character option is requested. If both are true it sets chooserOne to that options array              
        if (z === 3 && e === "yes") {
          if (chooserFour.length < 2 || array == undefined) {
            chooserFour = special;
          }
        }






      }

      var randomArrayNum;

      for (i = 0; i < a; i++) {

        randomArrayNum = Math.floor(Math.random() * howManyChoosers);


        if (randomArrayNum === 0) {



          password = password.concat(chooserOne[Math.floor(Math.random() * chooserOne.length)]);

        }


        

      }

    return password;

      console.log(lCase);
      console.log(uCase);






    }


  }

}