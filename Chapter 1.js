// let points = [
//   { x: 0, y: 0 },
//   { x: 1, y: 1 }
// ];

// points.dist = function() {
//   let p1 = this[0];
//   let p2 = this[1];

//   let a = p2.x - p1.x;
//   let b = p2.y - p1.y;

//   return Math.sqrt(a * a + b * b);
// }

// let primes = [2, 3, 5, 7];
// primes[4] = 11;

// function sum(array) {
//   let sum = 0;
//   for (let x of array) {
//     sum += x;
//   }
//   return sum;
// }

// function factorial2(n) {
//   let i, product = 1;
//   for (i = 2; i <= n; i++)
//     product *= i;
//   return product;
// }

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   distance() {
//     return Math.sqrt(
//       this.x * this.x +
//       this.y * this.y
//     );
//   }
// }

// let p = new Point(1, 1);

// const map1 = new Map();

// map1.set({
//   a: 1
// }, {
//   b: 2
// });

const o = {
  functionOne: function () {
    console.log(this);
  },
  functionTwo: () => {
    console.log(this);
  }
}

o.functionOne();
o.functionTwo();