// const a = [..."I♥︎U"];
// const b = a.map(e => e.charCodeAt(0));
// const c = b.map(e => String.fromCharCode(e));

// console.log(c);

// const a = new Array(10);
// console.log(a[11]);

// let o = {};
// o[1] = "one";
// console.log(o["1"]);

// const a = ["one"];
// console.log(a["0"]);

// let o = {
//   "1": "one"
// };
// o[1] = "two";
// console.log(o);

// let a = [0];

// const symbol = Symbol("yolo");

// a[symbol] = "symbol";
// a["yolo"] = "test";

// console.log(a);
// console.log(a.length);

// a[2] = "test";

// console.log(a);
// console.log(a.length);

// let a1 = [,];
// let a2 = [undefined];
// console.log("0" in a1, a1[0]);
// console.log("0" in a2, a2[0]);

// let letters = [..."Hello world"];
// let everyother = "";

// for(let [index, letter] of letters.entries()) {
//   if (index % 2 === 0) everyother += letter;
// }

// console.log(everyother);

// const a = new Array(5);
// a.push(undefined);
// a.forEach((value, index) => console.log(index, value));

// const a = ["", false, , undefined, null];
// const b = a.filter(element => !(element == null))

// console.log(b)

// let a = [1,2,3,4,5];
// console.log(a.every(x => x < 10));
// console.log(a.every(x => x % 2 === 0));
// console.log(a.some(x => x % 2 === 0));
// console.log(a.some(isNaN));

// const a = [];
// const b = a.reduce((acc, cur) => acc + cur);

// const a = [1,2,3,4,5];
// const b = a.forEach(function(e) {
//   console.log(`${e} is part of ${this}`);
// }, {
//   toString() {return "This is this"}
// });

// const a = [1, [2, [3]]];
// console.log(a.flat());

// const a = [1]
// a.unshift(2);
// a.unshift([3, 4]);

// console.log(a);

// const a = [1, 2];
// a.shift();
// console.log(a.length);

// const a = [1, 2, 3, 4, 5];
// console.log(a.slice(-3, -2));
// console.log(a.slice(-1, -4));

// const x = "yolo";

// console.log(Number.isNaN(x));
// console.log(isNaN(x));

// const a = ["a", "b", "A", "B"];

// console.log(a.sort());
// console.log(a);

// const o = {
//   "0": "first",
//   "1": "second",
//   "length": 2
// };

// const a = Array.from(o);

// console.log(a);

const f = function(param) {
  console.log(param);
};

const a = [];

console.log(typeof a);