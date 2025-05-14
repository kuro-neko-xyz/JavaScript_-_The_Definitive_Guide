const a1 = {};

const a2 = {b: {}};

let a3;
let index3 = 0;

try {
  a3[index3++] // index++ returns 0; a is undefined so a[0] throws TypeError
} catch(e) {
  // console.log(index3); // prints 1;
}

a3?.[index3++] // prints undefined; index3, as such, not altered
// console.log(index3);
// a3[index3++]; // TypeError;

const testArray = [function () {console.log(this)}];

// testArray[0]();

let f = null, x = 0;
try {
  f(x++);
} catch(e) {
  // console.log(x); // x === 1
}
f?.(x++);
// console.log(x) // x === 1

var a4 = 2;
delete a4;

const a5 = [1];
delete a5[0];

const i1 = -0b00000100;
const i2 = i1 << 1;
const i3 = i1 >> 3;
const i4 = i1 >>> 3;

const i5 = 1;
const i6 = 1n;

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.toString = function () {
  return 10;
}

Dog.prototype.valueOf = function () {
  return "10";
}

const dog = new Dog;

// console.log((a6 = 2) === 2);

const function1 = () => {
  console.log(this);
}

function function2() {
  console.log(this);
}

for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}