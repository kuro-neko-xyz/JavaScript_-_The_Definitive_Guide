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

console.log("---");
console.log(
  "6. String.prototype.match() & String.prototype.matchAll() [REVIEW]",
);

const regex_6 = /y(o|a)lo(aventuras)?/;
const string_6 = "yolo yalo yoloaventuras";
const array_6 = string_6.match(regex_6);

console.log(array_6);
console.log(array_6.index);

const regex_6_1 = new RegExp(regex_6.source, "g");

const iterator_6 = string_6.matchAll(regex_6_1);

for (let i of iterator_6) {
  console.log(i);
}

console.log("---");
console.log("7. Lazy Iterator");

const words = (s) => {
  const regex_7 = /\s+|$/g;
  regex_7.lastIndex = s.match(/[^ ]/).index;

  return {
    [Symbol.iterator]() {
      return this;
    },

    next() {
      const start_7 = regex_7.lastIndex;

      if (start_7 < s.length) {
        let match_7 = regex_7.exec(s);
        if (match_7) {
          return {
            value: s.slice(start_7, match_7.index),
          };
        }
      }
      return {
        done: true,
      };
    },
  };
};

const string_7 = " abc def  ghi! ";
const iterator_7 = words(string_7);

console.log(iterator_7.next());
console.log(iterator_7.next());
console.log(iterator_7.next());

console.log("---");
console.log("8. Iterator objects return method");

class Iterable_8 {
  [Symbol.iterator]() {
    let init = 0;

    return {
      next() {
        if (init < 5) {
          return { value: init++, done: false };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log("Cleaning up!");
        return { done: true };
      },
    };
  }
}

const iterable_8 = new Iterable_8();

for (let i of iterable_8) {
  console.log(i);
  if (i > 2) {
    break;
  }
}

console.log("---");
console.log("9. Generator functions");

function* generator_9() {
  yield 2;
  yield 3;
  yield 5;
  yield 7;
}

const primes_9 = generator_9();

for (let p of primes_9) {
  console.log(p);
}

console.log("---");
console.log("10. Generator functions with parameters");

const range_10 = function* (from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
};

const r_10 = range_10(1, 10);

console.log(...r_10);

console.log("---");
console.log("11. Generator methods");

class range_11 {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  *[Symbol.iterator]() {
    for (let i = Math.ceil(this.from); i <= this.to; i++) yield i;
  }
}

const r_11 = new range_11(1, 11);

console.log(...r_11);

console.log("---");
console.log("12. Generator functions that generate their values");

const fibonacci_12 = function* () {
  let x = 0,
    y = 1;

  for (;;) {
    yield y;
    [x, y] = [y, x + y];
  }
};

const nthFibonacci_12 = (n) => {
  for (let i of fibonacci_12()) {
    if (n-- <= 0) return i;
  }
};

console.log(nthFibonacci_12(0));
console.log(nthFibonacci_12(1));
console.log(nthFibonacci_12(2));
console.log(nthFibonacci_12(3));
console.log(nthFibonacci_12(4));
console.log(nthFibonacci_12(5));
console.log(nthFibonacci_12(20));

function* take_12(n, iterable) {
  let i = iterable[Symbol.iterator]();

  while (n-- > 0) {
    let next = i.next();
    if (next.done) return;
    else yield next.value;
  }
}

console.log(...take_12(5, fibonacci_12()));

const zip_12 = function* (...iterables) {
  let index = 0;
  let iterators = iterables.map((iterable) => iterable[Symbol.iterator]());

  while (iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }

    let next = iterators[index].next();

    if (next.done) {
      iterators.splice(index, 1);
    } else {
      yield next.value;
      index++;
    }
  }
};

console.log(...zip_12("abc", [1, 2, 3]));

console.log("---");
console.log("13. yield* does not work within forEach()");

function* sequence_13(...iterables) {
  // iterables.forEach((iterable) => yield* iterable); <-- This does not work because yield* is not valid in a non-generator function
  for (let iterable of iterables) {
    yield* iterable;
  }
}

console.log(...sequence_13("abc", [1, 2, 3]));
