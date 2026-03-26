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
