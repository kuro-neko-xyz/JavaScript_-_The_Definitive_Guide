// const myObject = {
//   city: "Madrid",
//   greet() {
//     console.log(`Greetings from ${this.city}`);
//   },
// };

// myObject.greet();

// console.log(myObject.prototype);


// "use strict"

// let x = 0;
// let o = {
//   x: 0,
// };

// // true
// console.log(delete 2);

// // syntax error
// console.log(delete x);

// // type error
// console.log(delete Object.prototype);


// const o1 = {
//   x: 1,
// };

// const o2 = Object.create(o1);

// delete o1.x;

// console.log(o2.x);

// "use strict"

// var x = 1;

// console.log(globalThis.x);

// console.log(delete globalThis.x);

// console.log(globalThis.x);

// function f() {};

// console.log(globalThis.f);

// console.log(delete globalThis.f);

// console.log(globalThis.f);

// const o1 = {
//   x: 1,
// };

// const o2 = Object.create(o1);

// o2.x = 3;
// o2.y = 2;

// for (let i in o2) {
//   console.log(i);
// }

// const target = {
//   targetPropertyThatDoesntChange: "This target property doesn't change",
//   targetPropertyThatDoesChange: "This target property does change",
// }

// const firstSource = {
//   targetPropertyThatDoesChange: "This is a value from the first source",
//   firstSourcePropertyThatDoesntChange: "This value is from the first source",
//   firstSourcePropertyThatDoesChange: "This value is from the first source",
// }

// const secondSource = {
//   firstSourcePropertyThatDoesChange: "This value is from the second source",
// }

// Object.assign(target, firstSource, secondSource);

// console.log(target);

// function restrict(target, source) {
//   for (let key of Object.keys(target)) {
//     if (!(key in source)) {
//       delete target[key];
//     }
//   }

//   return target;
// }

// const target = {
//   x: 1,
//   y: 2,
// }

// const source = {
//   y: 3,
// }

// console.log(restrict(target, source));

// function substract(target, ...sources) {
//   for (let source of sources) {
//     for (let key of Object.keys(source)) {
//       delete target[key];
//     }
//   }

//   return target;
// }

// const target = {
//   x: 1,
//   y: 1,
//   z: 1,
// }

// const firstSource = {
//   x: 1,
// }

// const secondSource = {
//   y: 1,
// }

// console.log(substract(target, firstSource, secondSource));

// const o = {
//   foo: "bar",
//   1: 0,
// }

// console.log(JSON.stringify(o));

// const o = {
//   x: NaN,
//   y: -Infinity,
//   z: Infinity,
// }

// console.log(JSON.stringify(o));

// const o = {
//   date: new Date(),
// }

// const s = JSON.stringify(o);

// console.log(JSON.parse(s));

// const o = {
//   function: new Function(),
//   regexp: new RegExp(),
//   error: new Error(),
//   undefined: undefined,
// }

// console.log(JSON.stringify(o));

// let o = Object.create(Object.prototype);

// while (o) {
//   console.log(o);
//   o = Object.getPrototypeOf(o);
// }

// const o1 = {
//   x: 1,
//   y: 2,
// }

// const o2 = {
//   x: 1,
//   y: 2,
//   toString: () => 3,
// }

// console.log(o2 + 1);

// let point = {
//   x: 1000,
//   y: 2000,
//   toString: function() { return `(${this.x}, ${this.y})` },
//   toLocaleString: function() { return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})` }
// }

// console.log(point.toString());
// console.log(point.toLocaleString());

// const o1 = {
//   x: 1,
//   y: 2,
// }

// const o2 = {
//   x: 1,
//   y: 2,
//   toJSON: function() { return 3 }
// };

// console.log(JSON.stringify(o1));
// console.log(JSON.stringify(o2));

// const a = ["a", 1, "1"];

// console.log(JSON.stringify(a));

// const PROPERTY_NAME = "p1";
// function computePropertyName() { return "p" + 2 };

// let i = "p"

// const o = {
//   toString: function() { return "p4" },
//   toJSON: toString,
// }

// let p = {
//   [PROPERTY_NAME]: 1,
//   [computePropertyName()]: 2,
//   [i += 3]: 3,
//   [o]: 4,
// };

// console.log(JSON.stringify(p));

// let square = {
//   area() { return this.side * this.side },
//   side: 10
// };

// console.log(square.area());

// let o = {
//   dataProp: undefined,

//   get accessorProp() { return this.dataProp },
//   set accessorProp(value) { this.dataProp = value }
// }

// o.accessorProp = 2;
// console.log(o.accessorProp);

// let p = {
//   x: 1.0,
//   y: 1.0,

//   get r() { return Math.hypot(this.x, this.y); },
//   set r(newValue) {
//     let oldValue = Math.hypot(this.x, this.y);
//     let ratio = newValue / oldValue;
//     this.x *= ratio;
//     this.y *= ratio;
//   },

//   get theta() { return Math.atan2(this.y, this.x); }
// }

// console.log(p.r);
// console.log(p.theta);

// const serialnum = {
//   _n: 0,

//   get next() { return this._n++; },

//   set next(n) {
//     if (n > this._n) this._n = n;
//     else throw new Error("serial number can only be set to a larger value");
//   }
// }

// serialnum.next = 10;
// console.log(serialnum.next);

Object.defineProperty(Object.prototype, 'foo', {
  set(value) {
      console.log('SET', value);
  },
});
const obj = {foo: 123};

console.log({ ...obj });
console.log(Object.assign({}, obj));