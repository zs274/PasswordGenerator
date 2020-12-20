// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays containing the letters, numbers and special characters, and empty arrays to store the possible characters and final password
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "["];
var possibleChars = [];
var finalPass = "";

// Prompt to ask how many characters for the password and tur
function generatePassword() {
  var amount = parseInt(prompt("How many characters would you like your password to contain?"));

  // Creating a loop depending on what number the person inputs, if it's below 8 or above 128 they'll be alerted, if it's between 8-128 then the function carries out as it should
  if (amount >= 8 && amount <= 128) {

    // Confirming what the user wants in the password 
    var confirmUpper = confirm("Click OK to confirm including uppercase letters");
    var confirmLower = confirm("Click OK to confirm including lowercase letters");
    var confirmNumber = confirm("Click OK to confirm including numeric characters");
    var confirmSpecial = confirm("Click OK to confirm including special characters");

    // Depending on what they confirmed, the arrays will be pushed into one array containing all of the items, also using console.log to make sure it's checking properly 
    if (confirmUpper) {
      Array.prototype.push.apply(possibleChars, upper);
    }
    console.log("confirmUpper ", confirmUpper);

    if (confirmLower) {
      Array.prototype.push.apply(possibleChars, lower);
    }
    console.log("confirmLower ", confirmLower);

    if (confirmNumber) {
      Array.prototype.push.apply(possibleChars, numerical);
    }
    console.log("confirmNumber ", confirmNumber);

    if (confirmSpecial) {
      Array.prototype.push.apply(possibleChars, special);
    }

    console.log("confirmSpecial ", confirmSpecial);
    console.log("possibleChars ", possibleChars);

    // Using Math.random to pick random items from the possibleChars array which is then what's used to make the password
    for (i = 0; i < amount; i++) {
      var randomPass = Math.floor(Math.random() * possibleChars.length);
      finalPass += possibleChars[randomPass];
    }

    return finalPass;

  } else {
    alert("Password must be between 8-128 characters");

  }
} 