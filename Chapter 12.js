console.log("---");
console.log("1. Partially used iterator");

const array_1 = [10, 20, 30, 40, 50];
const iterator_1 = array_1[Symbol.iterator]();

iterator_1.next();

const newArray_1 = Array.from(iterator_1);

console.log(newArray_1); // [20, 30, 40, 50]