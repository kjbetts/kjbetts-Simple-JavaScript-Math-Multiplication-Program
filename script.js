'use strict'

// Variables that store the numbers
var number1 = prompt("Enter Number 1: ");
var number2 = prompt("Enter Number 2: ",);

// Variables are parsed into integers
var num1 = parseInt(number1);
var num2 = parseInt(number2);

// Function that adds the 2 numbers together
function multiplyTwoNumbers(num1, num2){
	return num1 * num2;
}

// Function is invoked and stores in variable answer
const answer = multiplyTwoNumbers(num1, num2);

// answer is shown in an alert window and logged to the console
alert(answer)
console.log(answer);