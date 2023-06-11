// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var numbers = ['1','2','3','4','5','6','7','8','9',

]
var finale = []
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
var length = prompt ("How long do you want your password to be?")

var UperChar = confirm ("Do you want upcase characters?")
if(UperChar === true){
  //what to do if it was yes
  finale = finale.concat(upperCasedCharacters)

}
var LowerChar = confirm ("Do you want lowercase characters?")
if(LowerChar === true){
  finale = finale.concat(lowerCasedCharacters)
}
var Sym = confirm ("Would like to have symbols?")
if(Sym === true){
  finale = finale.concat(specialCharacters)
}
var Num = confirm ("Would like to have numbers?")
if(Num === true){
  finale = finale.concat(numbers)
}

console.log(finale)

for (var i =0; i< length; i++){
  console.log(Math.random());
  

}
}

generateBtn.addEventListener("click", writePassword);
console.log(Math.floor(Math.random()* 20));
