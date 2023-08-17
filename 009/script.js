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