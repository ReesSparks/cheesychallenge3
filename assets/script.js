// Assignment code here
function generatePassword() {
  var length = window.prompt("how many characters?")
  
  var uppercase = window.confirm("do you want capital letters?")
  var specialChar = window.confirm("special characters? ")
  var lowercase = window.confirm("lowercase letters?")
  var numbers = window.confirm("include numbers?")
  

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);