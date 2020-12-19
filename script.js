// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Arrays containing the letters, numbers and special characters
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "["];

// Prompt to ask how many characters for the password
function generatePassword() {
  var amount = parseInt(prompt("How many characters would you like your password to contain?"));
  // debugger;
  // Creating a loop in case the person says a number below 8 or above 128 
  if (amount >= 8 && amount <= 128) {

    var confirmUpper = confirm("Click OK to confirm including uppercase letters");
    var confirmLower = confirm("Click OK to confirm including lowercase letters");
    var confirmNumber = confirm("Click OK to confirm including numeric characters");
    var confirmSpecial = confirm("Click OK to confirm including special characters");
    var choices = {
      amount,
      confirmUpper,
      confirmLower,
      confirmSpecial,
      confirmNumber
    };

    if (confirmUpper) {
      for (i = 0, i < upper.length; i++;) {
        choices.push(upper[i]);
      }
    }

    if (confirmLower) {
      for (i = 0, i < lower.length; i++;) {
        choices.push(lower[i]);
      }
    }

    if (confirmNumber) {
      for (i = 0, i < numerical.length; i++;) {
        choices.push(numerical[i]);
      }
    }


    if (confirmSpecial) {
      for (i = 0, i < special.length; i++;) {
        choices.push(special[i]);
      };

      console.log("confirmUpper ", confirmUpper);
      console.log("confirmLower ", confirmLower);
      console.log("confirmNumber ", confirmNumber);
      console.log("confirmSpecial ", confirmSpecial);
    }



} else {
  alert("Password must be between 8-128 characters");

}
}
//   // Asking what needs to be included in the password

//   // Checking what's confirmed 







// console.log(choices);

// // Write password to the #password input

// // {password = choices.charAt(Math.floor(Math.random() * amount.length))
// // }

// var passChoices = JSON.stringify(choices);
// var password = JSON.parse(passChoices)

// var password = "";
// for (i = 0; i < passLength; i++) {
//   choices[
//     Math.floor(Math.random() * passChoices.length)];
//   password +=
//     choices[
//     Math.floor(Math.random() * passChoices.length)
//     ];

//   return password;
// }