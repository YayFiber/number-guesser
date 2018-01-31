// all my variables
var resetButton = document.querySelector('#reset-button');
var clearButton = document.querySelector('#clear-button');
var submitButton = document.querySelector('#submit-button');
var inputField = document.querySelector('#userGuess');
var indicatorText = document.querySelector('#indicator');
var lastGuess = document.querySelector('h2');
// My number generator -- runs as page loads
// var number = Math.floor(Math.random() * 100 + 1);

var minimum = 1;
var maximum = 100;

function randomNumber(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumber(minimum, maximum);
console.log("min = " + minimum);
console.log("max = " + maximum);
console.log("correct answer is " + number);

// this sets the reset and clear button as disabled by default
resetButton.disabled=true;
clearButton.disabled=true;

//the submit button -- the bulk of my program
submitButton.addEventListener('click', function() {
  var input = parseInt(inputField.value);
  lastGuess.innerText = input;
  if (input === number) {
    indicatorText.innerText = "BOOM!";
    resetButton.innerText = 'Pssssst. Hit me to play again.';
    resetButton.disabled=false;
    minimum = minimum - 10;
    maximum = maximum + 10;
  } else if (input < minimum || input > maximum) {
    alert("Please enter a number between " + minimum + " and " + maximum + " :)");
    indicatorText.innerText = "Guess within the range."
  } else if (input > number) {
    indicatorText.innerText = "That guess is too high, try again.";
  } else if (input < number) {
    indicatorText.innerText = "That guess is too low, try again.";
  } else if (input = "NaN") {
    alert("Please enter an integer :)");
    lastGuess.innerText = "N/A"
  }
})

// clear button
clearButton.addEventListener('click', function() {
  inputField.value ='';
  clearButton.disabled=true;
})

inputField.addEventListener('keydown', function() {
  clearButton.disabled=false;
})

// reset button
resetButton.addEventListener('click', function() {
  indicatorText.innerText = 'Guess again!';
  randomNumber(minimum, maximum); 
  console.log("min = " + minimum);
  console.log("max = " + maximum);
  console.log("correct answer is " + number);
  inputField.value ='';
  resetButton.innerText = 'Reset';
  resetButton.disabled=true;
  clearButton.disabled=true;
})

//work with this to get a new, better random number generator
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   number = Math.floor(Math.random() * (max - min + 1)) + min;
// }