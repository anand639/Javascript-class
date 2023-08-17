// 1. JavaScript Program to Find the Square Root

// ** Template Literal in Javascript = dynamic data

// To write the variable name we use camel casing
// 1.
// let humanName = prompt("Enter your name");

// console.log(`Your name is ${humanName}`);

// ==============
// 2. to calculate age

// let birthYear = parseInt(prompt('What is your year of birth'));

// let currentAge = 2023 - birthYear;

// let ageAsOn = parseInt(prompt('Enter the year of desired age'));

// let realAge = ageAsOn - birthYear;

// console.log(`you have enter ${birthYear} year`);
// console.log(`You want to know your age as on ${ageAsOn}`);
// console.log(`your age will be ${realAge} years`);

// 4. JavaScript Program to Convert Kilometers to Miles  and Vice Versa

// const km = parseInt(prompt("Enter the kilometer"));
// const mile = parseInt(prompt("Enter the miles"));
// input from user
// const kilo = mile / 0.62;
// const miles = km * 0.62;

// console.log(`${km} kilometers is equal to ${miles} miles`);
// console.log(`${mile} miles is equal to ${kilo} kilometer`);

// ================

// 5. Javascript Program to Convert Celsius to Fahrenheit

// let c = parseInt(prompt("Enter the degree celsius"))
// let f = (c*(9/5)) + 32
// console.log(`${c} degree celsius is equal to ${f} fahrenheit `);

// Convert fahrenheit to celcius

// ==============

// 6.  Javascript Program to Generate a Random Number

// const a = Math.random();
// console.log(`the random number is ${a}`);

// Random number between 1 to 20

// const b = Math.random() * (19) + 1
// console.log(`Random value between 1 and 20 is ${b}`);

// =========

// Random number in range
// const min = parseInt(prompt("enter starting number"));
// const max = parseInt(prompt("enter ending number"));

// const min = 1455;
// const max = 67546;

// const randomRange = Math.random() * (max - min + 1) + min;
// console.log(`Random value between ${min} and ${max} is ${randomRange}`);
// ==================


// javascript if-else statements

// 1. positive or negative 

// let number = -10; 
// if(number>0) {
//     console.log(`${number} number is positive`);
// }
// else {
//     console.log(`${number} number is negative`);
// }

// let number = prompt("Enter the number"); 
// if(number>0) {
//     console.log(`${number} number is positive`);
// }
// else {
//     console.log(`${number} number is negative`);
// }

// ============ 

// Person is a valid voter or not 

// let age = parseInt(prompt("Enter your age"));

// if(age>=18) {
//     console.log("congratulations!! You are valid to vote");
// }

// else {
//     console.log("You are not a valid voter");
// }

// =============== 

// score >=90 ====> Excellent 
// score 70-89 ===> great job 
// score 50-69 ====> Keep it up 
// score 40-49 ===>  good 
// score 1-39 ==>> need improvement 

// let  score = 30;
// if (score >=90) {
//     console.log("Excellent marks");
// }
// else if (score >=70) {
//     console.log("Good Job");
// }
// else if (score >=50) {
//     console.log("Keep it up");
// }
// else {
//     console.log ("Need Improvement") ;
// }