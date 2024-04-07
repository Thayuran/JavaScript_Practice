
// 1. Write a program to calculate the area of a rectangle using variables to store the length and width.

let width=6;
let height=24;

let cal=width*height;
console.log(cal);

// 2. Create a simple calculator program that takes two numbers as input and performs arithmetic operations (+, -, *, /) on them.

const number1 = prompt("Enter the first number:");
const number2 = prompt("Enter the second number:");

function add(num1, num2) {
  return Number(num1) +   Number(num2);
}

function subtract(num1, num2) {
  return num2 - num1;
}


function multiply(num1, num2) {
  return num1 * num2;
}


function divide(num1, num2) {
  if (num2 === 0) {
    console.log("Error: Division by zero is not allowed.");
    return null;
  }
  return num1 / num2;
}

console.log("Addition: " + add(number1, number2));
console.log("Subtraction: " + subtract(number1, number2));
console.log("Multiplication: " + multiply(number1, number2));
const result = divide(number1, number2);
if (result !== null) {
  console.log("Division: " + result);
}


// 3. Develop a js program that asks the user for their name and greets them with a personalized message

function greetUser() {
    var userName = prompt("What is your name?");
    
    if (userName) {
        console.log("Hello, " + userName + "! Welcome!");
    } else {
        console.log("Hello! Welcome!");
    }
}

greetUser();

// 4. Write a program that takes a number as input and converts it to a string, then back to a number.

function convertNumber() {
    
    var numberInput = parseFloat(prompt("Enter a number:"));
    
   
    if (isNaN(numberInput)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

   
    var stringNumber = numberInput.toString();
    var convertedNumber = parseFloat(stringNumber);

    
    console.log("Original Number:", numberInput);
    console.log("Converted to String:", stringNumber);
    console.log("Converted Back to Number:", convertedNumber);
}

convertNumber();


// 5. Implement a program that calculates the circumference of a circle using a constant value for π.

const pi = 3.14;

function calculateCircumference(radius) {
    return 2 * pi * radius;
}

function mainfunction() {
    var radius = parseFloat(prompt("Enter the radius of the circle:"));

   
    var circumference = calculateCircumference(radius);

    console.log("The circumference of the circle with radius", radius, "is", circumference.toFixed(2));
}
mainfunction();



 // 6. Build a counter program that allows users to increment, decrement, and reset a counter value.  

 let counter = 0;
 const counterValueDisplay = document.getElementById("counterValue");
 
 function increment() {
   counter++;
   updateCounterDisplay();
 }
 
 function decrement() {
   counter--;
   updateCounterDisplay();
 }
 
 function reset() {
   counter = 0;
   updateCounterDisplay();
 }
 
 function updateCounterDisplay() {
   counterValueDisplay.textContent = counter;
 }



// 7. Utilize the Math object to generate random numbers within a specific range.

function getRandomNumber(mini, max) {
    
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * (max - mini);
    const result = scaledNumber + mini;
  
    return Math.floor(result);
  }
  
  const mini = 50;
  const max = 120;
  const randomNumInRange = getRandomNumber(mini, max);
  console.log("Minimum Range ="+mini);
  console.log("Maximum Range ="+max);
  console.log("Random number =",randomNumInRange);



  // 8. Create a program that generates a random number and asks the user to guess it. Provide hints if the guess is too high or too low.
  
  function guessTheNumber() 
  {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
  
    while (true) 
    {
      const userGuess = parseInt(prompt("Guess the number (between 1 and 100):"));
      attempts++;

      if (userGuess === randomNumber) {
        alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
        break;
      } else if (userGuess > randomNumber) {
        alert("Too high! Try again.");
      } else {
        alert("Too low! Try again.");
      }
    }
  }
  
  guessTheNumber();
  

  // 9. Write a program that checks whether a given number is even or odd using if statements.

const num = prompt("Enter a number:");
const numValue = Number(num);

if (numValue % 2 === 0) {
  console.log(numValue + " is an even number.");
} else {
  console.log(numValue + " is an odd number.");
}

// 10. Develop a program that checks if a checkbox is checked or unchecked 
//     and updates the display accordingly.

function Display() 
{
    const checkbox = document.getElementById("checkbox");
    const statusDisplay = document.getElementById("status");
  
    if (checkbox.checked) 
     {
      
      statusDisplay.textContent = "Checkbox is checked.";
     } 
    else
     {
      statusDisplay.textContent = "Checkbox is unchecked.";
     }
  }


// 11. Rewrite a simple if-else statement using the ternary operator.

  function checkEvenOrOdd() {
    
    const userInput = prompt("Enter a number:");
    const number = parseInt(userInput);
  
      const result = (number % 2 === 0) ? "Even" : "Odd";
      console.log(`${number} is ${result}.`);
   
  }
  
  checkEvenOrOdd();
  


  // 12. Implement a program that takes a day number (1-7) and 
  //     returns the corresponding day of the week using a switch statement.

const dayNum = prompt("Enter a day number (1-7):");
const dayValue = Number(dayNum);

let dayOfWeek;
switch (dayValue) {
  case 1:
    dayOfWeek = "Sunday";
    break;
  case 2:
    dayOfWeek = "Monday";
    break;
  case 3:
    dayOfWeek = "Tuesday";
    break;
  case 4:
    dayOfWeek = "Wednesday";
    break;
  case 5:
    dayOfWeek = "Thursday";
    break;
  case 6:
    dayOfWeek = "Friday";
    break;
  case 7:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Invalid day number";
}
console.log(dayOfWeek);



// 13. Create a program that takes a sentence as input and counts the number of vowels using string methods.

const sentence = prompt("Enter a sentence:");

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const vowelCount = countVowels(sentence);
console.log("Number of vowels in the sentence: " + vowelCount);


// 14. Write a program that extracts the domain name from a given URL using string slicing.

const url = prompt("Enter a URL:");

function extractDomain(url) {
  const startIndex = url.indexOf("//") + 2;
  const endIndex = url.indexOf("/", startIndex);

  let domain;
  if (endIndex === -1) {
    domain = url.slice(startIndex);
  } else {
    domain = url.slice(startIndex, endIndex);
  }

  return domain;
}

const domainName = extractDomain(url);
console.log("Domain name: " + domainName);



// 15. Use method chaining to manipulate a string 
//     (e.g., convert to uppercase, reverse, and then replace characters).

const UserString = prompt("Enter a string:");

function manipulateString(str) {
  const result = str
    .toUpperCase()
    .split("")
    .reverse()
    .join("")

  return result;
}

const updatedString = manipulateString(UserString);
console.log("Manipulated string: " + updatedString);


// 16. Develop a program that checks whether a person is eligible for voting based on age 
//     and nationality using logical operators.

const age = prompt("Enter your age:");
const nationality = prompt("Enter your nationality:");

function checkVotingEligibility(age, nationality) {
  const isEligible = age >= 18 && nationality === "Srilankan";

  return isEligible;
}

const votingEligibility = checkVotingEligibility(age, nationality);
if (votingEligibility) {
  console.log("You are eligible for voting.");
} else {
  console.log("You are not eligible for voting.");
}

// 17. Write a program that compares two values using strict equality and prints whether they are equal or not.


const num1 = prompt("Enter the first value:");
const num2 = prompt("Enter the second value:");

function compareValues(num1, num2)
 {
  const isEqual = num1 === num2;
  return isEqual;
 }

const areEqual = compareValues(num1, num2);
if (areEqual)
{
  console.log("The two values are equal.");
} 
else 
{
  console.log("The two values are not equal.");
}



// 18. Implement a program that counts down from a given number to 0 using a while loop.

const startingNumber = prompt("Enter the starting number:");

function countDown(startingNumber) {
  let currentNumber = startingNumber;
  while (currentNumber >= 0) {
    console.log(currentNumber);
    currentNumber--;
  }
}

countDown(startingNumber);



// 19. Create a program that prints all even numbers between 1 and 50 using a for loop.

for (let i = 2; i <= 50; i += 2) 
{
  console.log(i);
}





// 20. Extend the existing number guessing game to allow the user to specify the range of numbers.


const minNumber = prompt("Enter the minimum number:");
const maxNumber = prompt("Enter the maximum number:");


const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let numGuess = 0;


// 21. Write a function that takes two numbers as parameters and returns their sum.


function addNumbers(num1, num2) 
{
  return num1 + num2;
}

const sum = addNumbers(14,32);
console.log(sum); 


// 22. Demonstrate variable scope by declaring a variable inside and outside a function and try accessing them.


let globalVar = "This is a global variable";

function demonstrateScope() 
{
  let localVar= "This is a local variable";

  console.log("Inside the function:");
  console.log("Accessing global variable:", globalVar);
  console.log("Accessing local variable:", localVar);
}

console.log("Outside the function:");
console.log("Accessing global variable:", globalVar);

demonstrateScope();



// 23. Build a program that converts temperature from Celsius to Fahrenheit and vice versa using functions.


function celsiusToFahrenheit(celsius) 
{
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) 
{
  return (fahrenheit - 32) * 5/9;
}
 

const celsiusTemp = 34;
const fahrenheitTemp = 80;

console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F is equal to ${fahrenheitToCelsius(fahrenheitTemp)}°C`);




// 24. Create an array of numbers and write a program to find the sum of all the elements.

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) 
  {
    sum += arr[i];
  }
  return sum;
}

const total = sumArray(numbers);
console.log(`The sum of all the elements in the array is: ${total}`);

// 25. Use the spread operator to concatenate two arrays.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenatedArray = [...array1, ...array2];

console.log("The concatenated array is: "+concatenatedArray);



// 26. Write a function that takes a variable number of arguments and returns their sum using rest parameters.

function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  return sum;
}

const resultsum = sum(1, 2, 3, 4, 5);
console.log(`The sum of the numbers is: ${resultsum}`);


// 27. Develop a program that simulates rolling dice with a specified number of sides.


function rollDice(numSides) 
{
  return Math.floor(Math.random() * numSides) + 1;
}

const numRolls = 4;
const numSides = 7;

for (let i = 0; i < numRolls; i++) {
  const rollResult = rollDice(numSides);
  console.log(`Roll ${i+1} result: ${rollResult}`);
}



// 28. Build a program that generates a random password with a specified length.


function generatePassword(length) {
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allChars = lowerCaseChars + upperCaseChars + numbers + symbols;
  let password = '';

  for (let i = 0; i < length; i++)
  {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
}

const passwordLength = 10;
const randomPassword = generatePassword(passwordLength);
console.log(`The password is: ${randomPassword}`);


// 29. Write a function that takes another function as a callback and executes it after a certain delay.


function delay(callback, delayTime) {
  setTimeout(callback, delayTime);
}

function exampleCallback() 
{
  console.log('Callback function executed.');
}

const delayTime = 5000;
delay(exampleCallback, delayTime);


// 30. Use the forEach() method to iterate over an array and print each element to the console.

const array = [10,11, 12, 13, 14, 15];
array.forEach(function(element) 
{
  console.log(element);
});


// 31. Create a program that doubles each element in an array using the map() method.

const arrays = [1, 2, 3, 4, 5];

const doubledArray = array.map(function(element)
{
  return element * 2;
});

console.log(`The original array is: ${arrays}`);
console.log(`The doubled array is: ${doubledArray}`);

// 32. Write a program that filters out even numbers from an array using the filter() method.


const numarray = [1, 2, 3, 4, 5];
const filteredArray = array.filter(function(element) 
{
  return element % 2 !== 0;
});

console.log(`The original array is: ${numarray}`);
console.log(`The filtered array is: ${filteredArray}`);

// 33. Use the reduce() method to calculate the sum of all elements in an array.


const numberset = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of all elements:", sum);



// 34. Declare a function using a function expression and call it to print a message.

const printMessage = function(message) 
{
  console.log(message);
};

printMessage('Helloworld!');

// 35. Rewrite a simple function using arrow function syntax.

const greet = (name) => `Hello, ${name}!`;

console.log(greet('World'));