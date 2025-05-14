// for (let i = 0; i < 10; i++) console.log(i);

// let a = 0

// if (a++) console.log(a);
// else console.log("Zero")

// let n = 2;

// console.log(`You have ${n} new message${n - 1 ? 's' : ''}`)

// let a = 0;

// switch(a++) {
//   case ++a: console.log("Something");
//   break;
//   case 0: console.log("Zero");
//   break;
//   case a = 3: console.log("One");
//   break;
// }

// console.log(a) // Should be 2

// const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let datum of data) sum += datum;

// console.log(sum);

// const o = {x: 1, y: 2, z: 3};
// const a = [];
// let i = 0;

// for (a[i++] in o);

// console.log(a);

// test: console.log('yolo');

// tast: test: console.log('yalo');

// label: for(let i = 0; i < 5; i++) {
//   if (i === 3) continue label;
//   console.log(i);
// };

// console.log("**********");

// let i = 0;
// label: while(i < 5) {
//   if (i === 3) continue label;
//   console.log(i);
//   i++;
// }

// function getRandomError() {
//   const random = Math.random();
  
//   if (random >= 0.5) {
//     throw new Error("Random Error");
//   }
// }

// test: try {
//   console.log('1st');
//   getRandomError();
//   console.log('2nd');
// }
// catch(e) {
//   console.log('3rd');
//   console.log(e);
//   console.log('4th');
// }
// finally {
//   console.log('5th');
// }

// let i = 0;

// test: try {
//     console.log(i++);
//     if (i === 1) break test;
//     console.log("***");
// }
// finally {
//   console.log("finally");
// }

// try {
//   nonExistantFunction();
// }
// catch (error) {
//   console.log(error);
// }

// function innerFunction() {
//   try {
//     throw new Error("Error in inner function.");
//   }
//   finally {
//     console.log("End of inner function.");
//   }
// }

// outerBlock: try {
//   innerFunction();
// }
// catch (error) {
//   console.log(error);
// }
// finally {
//   console.log("End of outer block");
// }

// function innerFunction() {
//   try {
//     throw new Error("Error in inner function's try block.");
//   }
//   catch (error) {
//     console.log("Inner catch executes between errors.");
//     console.log(error)
//   }
//   finally {
//     throw new Error("Error in inner function's finally block.");
//   }
// }

// outerBlock: try {
//   innerFunction();
// }
// catch (error) {
//   console.log(error);
// }
// finally {
//   console.log("End of outer block");
// }

// function innerFunction() {
//   try {
//     throw new Error("Error in inner function's try block.");
//   }
//   finally {
//     return "Succesfully executed inner block!";
//   }
// }

// outerBlock: try {
//   const temp = innerFunction();
//   console.log(temp);
// }
// catch (error) {
//   console.log(error);
// }
// finally {
//   console.log("End of outer block");
// }

// for (let i = 0; i < 7; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// console.log('***')

// let i = 0;
// while (i < 7) {
//   try {
//     if (i === 3) continue;
//     console.log(i);
//   }
//   finally {
//     i++;
//   }
// }

// for (let i = 0; i < 7; i++, console.log(i, "*")) {
//   if (i === 3) break;
//   console.log(i);
// }

// console.log('***')

// let i = 0;
// while (i < 7) {
//   try {
//     if (i === 3) break;
//     console.log(i);
//   }
//   finally {
//     i++, console.log(i, "*");
//   }
// }

// "use strict"

// x = 10;

// console.log(x);


// function test() {
//   console.log("Test");
// }
  
// const test = function() {
//   console.log("Test");
// }

// test();

// console.log(a);

// let a = "Test";

// console.log(recursiveFactiorial(10));

// function recursiveFactiorial(x) {
//   if (x === 1) return x;
//   return x * recursiveFactiorial(x - 1);
// }

// const recursiveFactiorial = function(x) {
//   if (x === 1) return x;
//   return x * recursiveFactiorial(x - 1);
// }

// console.log(recursiveFactiorial(10));

let o = {
  for: "test",
}

console.log(o.for);