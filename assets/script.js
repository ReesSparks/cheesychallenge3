// Assignment code here
const characters = {
  uppercase: 'ABCEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  specialChar: '!@#$%^^&*()',
  numbers: '1234567890'
}
var result = "";
var password = "";

function generatePassword() {
  var length = window.prompt("how many characters?")
  if (length < 8 || length > 128){
    window.alert("must choose length between 8 and 128 characters")
    return ""
  }

  var uppercase = window.confirm("do you want capital letters?")
  
  if (uppercase){
    result += characters.uppercase
  }

  var specialChar = window.confirm("special characters? ")
  
  if (specialChar){
    result += characters.specialChar
  }
  
  var lowercase = window.confirm("lowercase letters?")
  if (lowercase){
    result += characters.lowercase
  }
  
  
  var numbers = window.confirm("include numbers?")
  if (numbers){
    result += characters.numbers
  }

  return password
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