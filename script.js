// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

// Arrays containing the letters, numbers and special characters
var upper = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
var lower = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var numerical = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var special = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[");

// var randomUpper = upper.charAt(Math.floor(Math.random() * upper.length));
// var randomLower = lower.charAt(Math.floor(Math.random() * lower.length));
// var randomSpecial = special.charAt(Math.floor(Math.random() * special.length));
// var randomNumbers = numerical.charAt(Math.floor(Math.random() * numerical.length));
// var options = ["randomUpper", "randomLower", "randomSpecial", "randomNumbers"];


// Prompt to ask how many characters for the password
function generatePassword() {
  var amount = (prompt("How many characters would you like your password to contain?"));

  // Creating a loop in case the person says a number below 8 or above 128 
  while(amount <=7 || amount >= 129) {
    alert("Password must be between 8-128 characters");
    var amount = (prompt("How many characters would you like your password to contain?"));
  }

  if (amount >= 8 || amount <= 129) {
    var passLength = parseInt(passLength);
  

// Asking what needs to be included in the password
var confirmUpper = confirm("Click OK to confirm including uppercase letters");
var confirmLower = confirm("Click OK to confirm including lowercase letters");
var confirmNumber = confirm("Click OK to confirm including numeric characters");
var confirmSpecial = confirm("Click OK to confirm including special characters");
var choices = [];

// Checking what's confirmed 

if (confirmUpper){
  for (i = 0, i < upper.length; i++;) {
    choices.push(randomUpper[i]);
  }
}
  
if (confirmLower){
  for (i = 0, i < lower.length; i++;) {
    choices.push(randomLower[i]);
  }
}
if (confirmNumber) {
  for (i = 0, i < numerical.length; i++;) {
    choices.push(randomNumbers[i]);
  }
}
if (confirmSpecial)
for (i = 0, i < special.length; i++;) {
  choices.push(randomSpecial[i]);
};
}

console.log(choices);

// Write password to the #password input

// {password = choices.charAt(Math.floor(Math.random() * amount.length))
// }

 var randomPass = "";
  for (i = 0; i < amount; i++) {
    choices[
        Math.floor(Math.random() * choices.length)];
    randomPass +=
       choices[
           Math.floor(Math.random() * choices.length)
       ];
   }
return randomPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);