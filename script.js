// Assignment Code
var generateBtn = document.querySelector("#generate");
// ask user 5 questions.
//how many characters?
//do you want lowercase letters?
//do you want uppercase letters?
//do you want speacial charaters?
//do you want numbers?




function generatePassword() {

  var characterLimit = prompt("How many charaters do you want in your password? Must be between 8 and 128 charactes.");
  if (characterLimit < 8 || characterLimit > 128) {
    return alert("please enter valid number");
  };
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppsercase letters?");
  var special = confirm("Do you want special characters?");
  var number = confirm("Do you want numbers?");
  var passwordCharacterOptions = ""
  if (lowerCase) {
    passwordCharacterOptions += "abcdefghijlkmnopqrstuvwxyz"
  };
  if (upperCase) {
    passwordCharacterOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };
  if (special) {
    passwordCharacterOptions += "!@#$%^&*()_+-=?/.,><;:"
  };
  if (number) {
    passwordCharacterOptions += "0123456789"
  };
  var password = ""
  for (i = 0; i < Number(characterLimit); i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacterOptions.length)
    password += passwordCharacterOptions[randomNumber]

  };
  return password
};


console.log(password)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
