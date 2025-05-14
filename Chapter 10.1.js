// const path = './Chapter 10';

// const BitSet = require(path).BitSet;

// const test = new BitSet(8);
// test.insert(7);
// console.log(test.has(7));
// test.remove(7);
// console.log(test.has(7));

// const path = './Chapter 10.mjs';

// import(path).then(({BitSet}) => {
//   const bitSet = new BitSet(8);

//   bitSet.insert(7);
//   console.log(bitSet.has(7));
// })

const url = new URL("../cats", "http://www.example.com/dogs");
console.log(url);