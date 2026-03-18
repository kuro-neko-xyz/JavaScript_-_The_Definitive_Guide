console.log("---");
console.log("1. Decomposed iterator");

const array_1 = [99];

const iterator_1 = array_1[Symbol.iterator]();

console.log(iterator_1.next());
console.log(iterator_1.next());

// for (let i = iterator_1.next(); !i.done; i = iterator_1.next()) {
//   console.log(i.value);
// }

console.log("---");
console.log("2. Partially used iterator");

const array_2 = [1, 2, 3, 4, 5];
const iterator_2 = array_2[Symbol.iterator]();

iterator_2.next();

const newArray_2 = Array.from(iterator_2);
const oldArray_2 = Array.from(array_2);

console.log(newArray_2); // [2, 3, 4, 5]
console.log(oldArray_2); // [1, 2, 3, 4, 5]

console.log("---");
console.log("3. An iterable Range object");

class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  toString() {
    return `{x | ${this.from} <= x <= ${this.to}}`;
  }

  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    const last = Math.floor(this.to);

    return {
      next() {
        if (next <= last) {
          return { value: next++, done: false };
        }
        return {
          done: true,
        };
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

const r = new Range(1, 10);

console.log(`${r}`);
console.log(...r);

console.log("---");
console.log("4. Iterable map function");

const map = (iterable, f) => {
  const iterator = iterable[Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      const { done, value } = iterator.next();
      return done ? { done, value } : { done, value: f(value) };
    },
  };
};

const array_4 = [1, 2, 3, 4, 5];
const squaredArray_4 = map(array_4, (x) => x * x);

console.log(`${squaredArray_4}`);
console.log(...squaredArray_4);

console.log("---");
console.log("5. Iterable filter function");

const filter = (iterable, f) => {
  const iterator = iterable[Symbol.iterator]();

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      for (;;) {
        let { done, value } = iterator.next();
        if (done || f(value)) {
          return { done, value };
        }
      }
    },
  };
};

const array_5 = [1, 2, 3, 4, 5];
const evenArray_5 = filter(array_5, (x) => x % 2 === 0);

console.log(`${evenArray_5}`);
console.log(...evenArray_5);
