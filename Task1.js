//Declare four variables without assigning values and print them in console

var a;
var b;
var c;
var d;
console.log(a,b,c,d)

// How to get value of the variable myvar as output
// var myvar= 1;
// console.log("myvar");

var myvar =1;
console.log(myvar);

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

var firstName = prompt("Enter the firstname")
var lastName = prompt("Enter the lastname");
var maritalStatus = prompt("Enter your marital status")
var country = prompt("Enter your country");
var age = prompt("Enter your age")

console.log(firstName);
console.log(lastName);
console.log(maritalStatus);
console.log(country)
console.log(age)

// Declare variables to store your first name, last name, marital status, country and age in a single line

var firstName = prompt("Enter the firstname")
var lastName = prompt("Enter the lastname");
var maritalStatus = prompt("Enter your marital status")
var country = prompt("Enter your country");
var age = prompt("Enter your age")

console.log(firstName,lastName,maritalStatus,country,age)


//  Declare variables and assign string, boolean, undefined and null data types


var str = 'Hi Javascript';
var a = 10
var b=10
Boolean(a==b);
var a = undefined;
var n= null;


// Write 6 statement which provide truthy & falsey values.

// Truthy Value

let nameOf = "John";
if (nameOf) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

// Falsy value

let age = 0;
if (age) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

// Truthy value

let arr = [1, 2, 3];
if (arr.length) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

// falsy value

let emptyArr = [];
if (emptyArr) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

// Truthy value

let obj = { name: "John" };
if (obj) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

// Falsy value

let nullValue = null;
if (nullValue) {
  console.log("Truthy value");
} else {
  console.log("Falsey value");
}

