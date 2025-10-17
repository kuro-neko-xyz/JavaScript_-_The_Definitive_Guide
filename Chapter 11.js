// const array = [1, 2, 3];
// const set = new Set()
// console.log(set.size);
// set.add(array);
// console.log(set.size);
// set.delete(array);
// console.log(set.size);

// const array = Uint8Array.from([-2, 0, 2.5, "a"]);
// const array2 = Uint8ClampedArray.from([-2, 0, 2.5, "a"]);
// console.log(array);
// console.log(array2);

// const buffer = new ArrayBuffer(2);
// const test = new Uint8Array(buffer);
// const test2 = new Uint16Array(buffer);
// test[0] = 1;
// test[1] = 1;
// console.log(test2[0]);

// const sieveOfEratosthenes = (n) => {
//   let a = new Uint8Array(n + 1);
//   let p = 2;
//   let max = Math.sqrt(n);
//   while (p <= max) {
//     for (let i = 2 * p; i <= n; i += p) {
//       a[i] = 1;
//     }
//     while (a[++p] /* do nothing */);
//   }

//   while (a[n]) n--;

//   return n;
// };

// const startTime = new Date();
// const n = 1_000_000_000;
// const result = sieveOfEratosthenes(n);
// const endTime = new Date();
// console.log(`The largest prime number less than ${n} is ${result}`);
// console.log(`Execution time: ${endTime - startTime} ms`);

// const array = new Uint32Array(1);
// const dataView = new DataView(array.buffer); // [0, 0, 0, 0]
// dataView.setUint16(0, 1, true); // [1, 0, 0, 0]
// console.log(dataView.getUint8(0)); // 1
// console.log(dataView.getUint8(1)); // 0
// console.log(dataView.getUint8(2)); // 0
// console.log(dataView.getUint8(3)); // 0
// console.log(dataView.getUint16(0, false)); // 1

// const regex = new RegExp(/[^]*/);

// console.log(regex.test("abc")); // true

// const words = /\b\p{Alphabetic}+\b/gu;
// const text = "This is a naïve test of the matchAll() method.";

// for (let word of text.matchAll(words)) {
//   console.log(`found '${word[0]}' at index ${word.index}.`);
// }

console.log("---");
console.log("1. The RegExp.prototype.test() method");

const regex_1 = /^[yY]ol(ingo|o)$/;

console.log(regex_1.test("yolo")); // true
console.log(regex_1.test("Yolingo")); // true
console.log(regex_1.test("yol")); // false
console.log(regex_1.test("yolinga")); // false

console.log("---");

console.log("2. The String.prototype.match() method");

const str_2 = "yolo Yolingo yol yoloing";

const globalRegex_2 = /[yY]ol(?<test>ingo|o)/g;
const globalMatch_2 = str_2.match(globalRegex_2);

console.log(globalMatch_2); // [ 'yolo', 'Yolingo', 'yolo' ]

const nonGlobalRegex_2 = RegExp(globalRegex_2.source, "");
const nonGlobalMatch_2 = str_2.match(nonGlobalRegex_2);

console.log(nonGlobalMatch_2); // [ 'yolo', 'o', index: 0, input: 'yolo Yolingo yol yoloing', groups: undefined ]

console.log("---");
