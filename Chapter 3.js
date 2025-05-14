// const a = Symbol("test");
// const b = Symbol("test");
// const c = Symbol.for("test");
// const d = Symbol.for("test");

// let testObj = { a: 1 };

// const reassign = (obj) => {
//   obj = {
//     a: 2
//   };
// }

// const mutate = (obj) => {
//   obj.a = 3;
// }

// console.log(testObj);
// reassign(testObj);
// console.log(testObj);
// mutate(testObj);
// console.log(testObj);

// console.log(x);
// var x = 10;
// console.log(x);

// console.log(isNaN(NaN));
// console.log(isFinite(0));

// const test = "NaN";

// console.log(isNaN(test));
// console.log(Number.isNaN(test));

// const test = "0";

// console.log(isFinite(test));
// console.log(Number.isFinite(test));

// const test = "I♥︎U";

// console.log(test.length);

// for (let i of test) {
//   console.log(i);
// }

// console.log(String.raw`\n`.length)

// const stringOne = "string";
// const stringTwo = "string";
// const symbolOne = Symbol("symbol");
// const symbolTwo = Symbol("symbol");

// const o = {};

// o[stringOne] = "one";
// o[stringTwo] = "two";
// o[symbolOne] = "one";
// o[symbolTwo] = "two";

// console.log(o);

const test = Symbol({
  test: 42,
});
console.log(test.toString());