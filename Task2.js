// Sqaure of a number

let number = 5;
let square = Math.pow(number, 2);

console.log(square);


// Swapping of two numbers


let a = 5;
let b = 10;


console.log("Before swap:");
console.log("a =", a); 
console.log("b =", b); 


let temp = a;
a = b;
b = temp;


console.log("After swap:");
console.log("a =", a); 
console.log("b =", b); 



// Addition of 3 numbers

let number1 = 5;
let number2 = 10;
let number3 = 15;

let sum = number1 + number2 + number3;

console.log(sum); 

// Celsius to Fahrenheit conversion

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit); 


// Meter to miles

let meters = 5000;
let miles = meters / 1609.34;

console.log(miles); 


// Pounds to kg

function poundsToKilograms(pounds) {
    return pounds * 0.45359237;
  }
  
  
  const pounds = 150;
  const kilograms = poundsToKilograms(pounds);
  console.log(kilograms); 


// Batting average

function calculateBattingAverage(runs, dismissals) {
    if (dismissals === 0) {
      return 0; 
    }
  
    return (runs / dismissals).toFixed(3);
  }
  
  
  const totalRuns = 500;
  const totalDismissals = 20;
  const battingAverage = calculateBattingAverage(totalRuns, totalDismissals);
  console.log(battingAverage); 

// Calculate Simple Interest

function calculateSimpleInterest(principal, rate, time) {
    const interest = (principal * rate * time) / 100;
    return interest.toFixed(2);
  }
  
  
  const principalAmount = 1000; 
  const interestRate = 5; 
  const timePeriod = 2; 
  const simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);
  console.log(simpleInterest); 


  //Calculate area of an equilateral triangle

  function calculateEquilateralTriangleArea(sideLength) {
    const area = (Math.sqrt(3) / 4) * Math.pow(sideLength, 2);
    return area.toFixed(2); 
  }
  
 
  const side = 5; 
  const triangleArea = calculateEquilateralTriangleArea(side);
  console.log(triangleArea); 
  
  
  
  



