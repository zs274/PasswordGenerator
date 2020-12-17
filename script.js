// Assignment Code
var generateBtn = document.querySelector("#generate");

var upper = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
var lower = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
var number = ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
var special = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[")

var length = "";
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;

function generatePassword() {
  var length = (prompt("How many characters would you like your password to contain?"));

  while(length <=7 || length >= 129) {
    alert("Password must be between 8-128 characters");
    var length = (prompt("How many characters would you like your password to contain?"));
  } 

var confirmUpper = confirm("Click OK to confirm including uppercase letters");
var confirmLower = confirm("Click OK to confirm including lowercase letters");
var confirmNumber = confirm("Click OK to confirm including numeric characters");
var confirmSpecial = confirm("Click OK to confirm including special characters");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
