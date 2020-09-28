// Assignment Code
var generateBtn = document.querySelector("#generate");
// ask user 5 questions.
//how many characters?
//do you want lowercase letters?
//do you want uppercase letters?
//do you want speacial charaters?
//do you want numbers?
var characters = prompt("How many charaters do you want in your password?")

var lowerCase = prompt("Do you want lowercase letters?")
var upperCase = prompt("Do you want uppsercase letters?")
var special = prompt("Do you want special characters?")
var number = prompt("Do you want numbers?")
var passwordCharacterOptions = ""

if(lowerCase === "yes"){
  passwordCharacterOptions += "abcdefghijlkmnopqrstuvwxyz"
}
if(upperCase ==="yes"){
  passwordCharacterOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if(special === "yes"){
  passwordCharacterOptions += "!@#$%^&*()_+-=?/.,><;:"
}
if(number === "yes"){
  passwordCharacterOptions += "0123456789"
}
function generatePassword(){
  var password = ""
for (i = 0;i < Number(characters);i++) {
 var randomNumber = Math.floor(Math.random()*passwordCharacterOptions.length)
password += passwordCharacterOptions[randomNumber]

}
return password
}


console.log(password)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
