// Loops are used to execute a block of code repeatedly  as long as a certain condition is met.

//  There are mainly two types of loops in JavaScript:
//  1. for loops
//  2.  while loops

// 1. For Loops

// this is the formulae of loop
// for(initialization; condition; increment/decrement){
//     Code to be executed repeatedly
// }

// ============
// Lets make some programs of for loops
// 1. to print numbers from 1 to 10

// first step ==> i++ =  1
// second step==> i == 2

// first step ==> ++i =  1+1 = 2
// second step==> 2+1 == 3

// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

// death loop / infinite loop

// for (let i = 1; i>=1; i++) {
// 	console.log(i);
// }
// Never create such loops

// 2. print the table of 2 using for loop:

// i = 5
// i = i+2
// i+=2 ==> i = i + 2
// i-=2 ==> i = i - 2
// i*=2 ==> i = i * 2
// i/=2 ==> i = i / 2

// for (let i = 2; i<=20; i+=2){
//     console.log(i);
// }

// table of 8

// for(let a=8; a<=80; a+=8){
//     console.log(a);
// }

// ===========

// Multiplication Loop

// const num = 7;
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${num}*${i} = ${num * i}`);
// }

// num*i = value
// 7 * 1 == 7
// 7 * 2 == 14
// 7 * 3 == 21
// 7 * 4 == 28

// ==========
// const num = 49;
// for (let i = 1; i <= 10; i++) {
// 	console.log(`${num} * ${i} = ${num * i}`);
// }

// ===========
// calculate the factorial of a number

// 2 == 2*1
// 3 == 3*2*1
// 4 == 4*3*2*1
// 5 == 5*4*3*2*1
// 6 == 6*5*4*3*2*1

// const num = 8;
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
// factorial = factorial * i;
//     factorial *= i;
// }
// console.log(`Factorial of ${num} is ${factorial}`);

// ===========

// lets create some pattern using for loops

// console.log("   *   ");
// console.log("  ***  ");
// console.log(" ***** ");
// console.log("*******");
// console.log("   *   ");
// console.log("   *   ");
// console.log("   *   ");

// let size = 5;
// for (let i = 1; i <= size; i++) {
// 	let spaces = " ".repeat(size - 1);
// 	let dol = "@".repeat(2 * i - 1);
//     console.log(spaces + dol);
// }

// =============
// you want to know the sum of first 5 number?

// let sum = 0;
// for (let i = 1; i <= 20; i++) {
// 	// sum = sum + i;
// 	sum += i;
// }
// console.log(`Sum of numbers from 1 to 20 is = ${sum}`);

// ============== 

// check the sum of custom range: 
// let sum = 0;
// for (let i = 43; i <= 150; i++) {
// 	// sum = sum + i;
// 	sum += i;
// }
// console.log(`Sum of numbers from 43 to 150 is = ${sum}`);