// const o = {
//   _a: "",

//   get a() {
//     return this._a += "a";
//   },

//   set a(value) {
//     if (value.split("").every(item => item === "a")) {
//       this._a = value;
//     }
//   }
// }

// console.log(o.a);
// console.log(o.a);
// console.log(o.a);
// o.a = "aaaaaaaaaaaaaaa";
// console.log(o.a);
// o.a = "b";
// console.log(o.a);

// f();

// function f() {
//   console.log("test");
// }

// const test = function f() {
//   console.log(f.toString());
// }

// test();

// let tensquared = function(x){return x*x}(10)

// console.log(tensquared);

// const h = x => { value: x }

// let x = 10;

// function f(value) {
//   x = value;
// } 

// // f?.(++x);
// (f !== null && f !== undefined) ? f(++x) : undefined;

// console.log(x);

// function f() {
//   console.log(this);
// }

// const o = {
//   m() {
//     const test = () => {
//       console.log(this);
//     }
//     test();
//   },
// }

// // f();
// o.m();

// let o = {
//   m() {
//     f();

//     function f() {
//       console.log(this);
//     }
//   }
// }

// o["m"]();

// const o = {
//   timesTen: 0,

//   set v(value) {
//     this.timesTen = value * 10;
//   },
//   get v() {
//     return (this.timesTen / 10);
//   }
// }

// o.v = 1;
// console.log(o.timesTen);
// console.log(o.v);

// function max(first = -Infinity, ...rest) {
//   let maxValue = first;
//   for (let n of rest) {
//     if (n > maxValue) {
//       maxValue = n;
//     }
//   }
//   return maxValue;
// }

// console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));

// function max() {
//   let maxValue = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > maxValue) {
//       maxValue = arguments[i];
//     }
//   }
//   return maxValue;
// }

// console.log(max(1, 10, 100, 2, 3, 1000, 4, 5, 6));

// function timed(f) {
//   return function(...args) {
//     console.log(`Entering function ${f.name}`);
//     let startTime = Date.now();
//     try {
//       return f(...args);
//     }
//     finally {
//       console.log(`Exiting ${f.name} after ${Date.now() - startTime}ms`);
//     }
//   }
// }

// function benchmark(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(timed(benchmark)(1_000_000));

// function vectorMultiply({x, y}, scalar) {
//   return { x: x * scalar, y: y * scalar };
// }

// console.log(vectorMultiply({x: 1, y: 2}, 2));

// function test({x: x1 = 1, y: y1 = 2}) {
//   console.log(x1, y1);
// }

// test({x: 0, y: 0});
// test({});

// uniqueInteger.counter = 0;

// function uniqueInteger() {
//   return uniqueInteger.counter++;
// }

// console.log(uniqueInteger());
// console.log(uniqueInteger());

// const test = (function() {
//   console.log('yolo')
// });

// test();

// let scope = "global scope";

// function checkscope() {
//   let scope = "local scope";
//   function f() { 
//     let scope = "superlocal scope";
//     function g() {
//       return scope;
//     }
//     return g();
//    }
//   return f();
// }

// console.log(checkscope());

// let uniqueInteger = (function() {
//   let counter = 0;
//   return function() { return counter++ };
// })()

// console.log(uniqueInteger());
// console.log(uniqueInteger());

// function counter(n) {
//   return {
//     get count() { return n++ },
//     set count(m) {
//       if (m > n) {
//         n = m;
//       } else {
//         throw new Error("Count can only be set to a larger value");
//       }
//     }
//   }
// }

// let c = counter(1000);
// console.log(c.count);
// console.log(c.count);
// c.count = 2000;
// console.log(c.count);
// c.count = 2000;

// function addPrivateProperty(o, name, predicate) {
//   let value;

//   o[`get${name}`] = function() { return value };

//   o[`set${name}`] = function(v) {
//     if (predicate && !predicate(v)) {
//       throw new TypeError("Invalid value.")
//     }
//     value = v;
//   }
// }

// const o = {};

// addPrivateProperty(o, "Name", x => typeof x === "string");

// o.setName("Frank");
// console.log(o.getName());
// o.setName(0);
// console.log(o.getName());

// function constfuncs() {
//   let funcs = [];
//   // for (var i = 0; i < 10; i++) {
//   for (let i = 0; i < 10; i++) {
//     funcs[i] = () => i;
//   }
//   return funcs;
// }

// let funcs = constfuncs();
// console.log(funcs[5]());

// for (let i = 0; i < 10; i++) {
//   let j = Math.random();
//   console.log(j);
// }

// function test() {

// }

// const test2 = () => {};

// console.log((() => {}).name);

// function test() {
//   console.log('yolo');
// }

// const test2 = function () {
//   console.log('yolo');
// }

// const test3 = () => {
//   console.log('yolo');
// }

// console.log(test.prototype);
// console.log(test2.prototype);
// console.log(test3.prototype);

// function test() {
//   console.log(this);
// }

// const o = {
//   a: 1,
// }

// test.call(o);

// function trace(o, m) {
//   let original = o[m];
//   o[m] = function(...args) {
//     console.log(new Date(), "Entering:", m);
//     let result = original.call(this, ...args);
//     console.log(new Date(), "Exiting:", m);
//     return result;
//   };
// }

// const o = {
//   m() {
//     console.log('yolo');
//   }
// }

// trace(o, "m");
// o.m();

// function f(y) { return this.x + y };
// let o = { x: 1 };
// let g = f.bind(o);
// console.log(g(2));
// let p = { x: 10, g };
// console.log(p.g(2));

// const f = () => {
//   console.log(this);
// }

// const o = {
//   a: 1
// };

// const g = f.bind(o);

// g();

// const f = function() {};

// const o = {};

// const g = f.bind(o);

// const h = g.bind(o);

// console.log(h.name);

// console.log(console.log.toString());

// f();

// function f() {
//   console.log('yolo');
// }

// let scope = "global";

// function constructFunction() {
//   let scope = "local";
//   return new Function("return scope");
// }

// console.log(constructFunction()());

// let test = 1;

// const f = new Function("test = 2; return;")
// f();

// console.log(test);

// function not(f) {
//   return function(...args) {
//     const result = f(...args);
//     return !result;
//   }
// }

// const even = x => x % 2 === 0;
// const odd = not(even);

// const a = [1, 3, 5, 7, 9];

// console.log(a.every(odd));

// function compose(f, g) {
//   return function(...args) {
//     return f(g(...args));
//   }
// }

// const sum = (x, y) => x + y;
// const square = (x) => x * x;

// const squareOfSum = compose(square, sum);

// console.log(squareOfSum(2, 3));

// const uniqueInteger = (function () {
//   counter = 0;
//   return function () { 
//     return counter++;
//    }
// })();

// console.log(uniqueInteger());
// console.log(uniqueInteger());

// function test() {
//   console.log(this);
// }

// test();

// Function.prototype.partialRight = function (o, ...outerArgs) {
//   const self = this;

//   return function(...innerArgs) {
//     const args = [...innerArgs, outerArgs];
//     return self.apply(o, args);
//   }
// }

// function substraction(a, b) {
//   return a - b;
// }

// const substractOne = substraction.partialRight(this, 1);
// console.log(substractOne(2));
// console.log(substractOne(0));

// Number.prototype.cubeRoot = function () {
//   return Math.pow(this, 1 / 3);
// }

// const eight = 8;

// console.log(eight.cubeRoot());

function factorial(n) {
  if (Number.isInteger(n) && n > 0) {
    if (!(n in factorial)) {
      factorial[n] = n * factorial(n - 1)
    }
    return factorial[n];
  }
  else {
    throw new Error("Yada yada");
  };
}

factorial[1] = 1;

console.log(factorial(10));

console.log(factorial[5]);