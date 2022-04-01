// Assignment Code
var generateBtn = document.querySelector("#generate");

//
var alphaLower = []
var alphaUpper= []
var specialChar= []
var number = []

let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers =  a string containing all digits "0 1,2,3,4,5,6,7,8,9"
let specialChars = "$#&^!"
let specialChars = "!#$%&()_,+=-*[]{}\|~`@"
let candidates = ""
let length = 0
let includeLower = false
let includeUpper = false
let includeSpecial = false
let includeNumer = false
let letter = ""


length = prompt "Enter password length:"
IF length < 8 OR length > 128
    alert "Password should be from 8 to 128 characters long."
    RETURN ""
END IF

includeLower = prompt "Use lowercase letters?"
IF includeLower = true
   add lowercase to candidates
   letter = random char from lowercase
   password = password + letter
END IF

includeUpper = prompt "Use uppercase letters?"
IF includeUpper = true
   add uppercase to candidates
   letter = random char from uppercase
   password = password + letter
END IF

includeSpecial = prompt "Use special characters?"
IF includeSpecial = true
   add specialChars to candidates
   letter = random char from special
   password = password + letter
END IF

includeNumbers = prompt "Use numbers?"
IF includeNumbers = true
   add numbers to candidates
   letter = random char from numbers
   password = password + letter
END IF

IF candidates.length === 0
    alert "You must choose at least one character type."
    RETURN ""
END IF

WHILE password.length < length
    letter = random char from candidates
    add letter to password
END WHILE

RETURN password



password = "mZ"
lowercase = "abcdefghijklmnopqrstuvwxyz"
uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numbers = "0123456789"
specialChars = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
candidates = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
length = 8
includeLower = true
includeUpper = true
includeSpecial = false
includeNumber = false
letter = "m"

computer prompts "Enter password length:"
user enters 8
length = 8
computer compares 8 < 8 OR 8 > 123 = false OR false = false
computer prompts "Use lowercase letters?"
user clicks "ok"
computer compares includeLower with true -> true
includeLower = true
computer adds lowercase to candidates
computer prompts "Use uppercase letters?"
user clicks "ok"
includeUpper = true
compare includeUpper to true -> true
computer adds uppercase to cadidates
skip (user cancels for numbers and specials)
pick a random char from candidates
letter = "m"
password = password + letter
pick a random char from candidates
letter = "Z"
password = password + letter

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
