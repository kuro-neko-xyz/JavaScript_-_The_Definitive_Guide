// function range(from, to) {
//   let r = Object.create(range.methods);

//   r.from = from;
//   r.to = to;

//   return r;
// }

// range.methods = {
//   includes(x) { return this.from <= x && x <= this.to; },
//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
//   toString() { return "(" + this.from + "..." + this.to + ")"; }
// }

// let r = range(1, 3);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);

// const o = {
//   prototype: "test"
// };

// console.log(o.prototype);

// function Range(from, to) {
//   console.log(new.target);

//   this.from = from;
//   this.to = to;
// }

// Range.prototype = {
//   includes(x) { return this.from <= x && x <= this.to; },
//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   },
//   toString() { return `(${this.from}...${this.to})`; }
// }

// let r = new Range(1,3);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);

// function f() {
//   console.log(this);
// };

// const o = {
//   test: "test"
// };

// const G = f.bind(o);

// const o2 = new G();

// console.log(o2 instanceof f);

// class Range {
//   constructor(from, to) {
//     this.from = from;
//     this.to = to;
//   }

//   includes(x) { return this.from <= x && x <= this.to; }

//   *[Symbol.iterator]() {
//     for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
//   }

//   toString() { return `(${this.from}...${this.to})`; }

//   static parse(s) {
//     let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
//     if (!matches) {
//       throw new TypeError(`Cannot parse Range from "${s}".`);
//     }

//     return new Range(parseInt(matches[1]), parseInt(matches[2]));
//   }
// }

// let r = new Range(1, 3);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);

// class Span extends Range {
//   constructor(start, length) {
//     if (length >= 0) {
//       super(start, start + length);
//     } else {
//       super(start + length, start);
//     }
//   }
// }

// let s = new Span(1, 2);
// console.log(s.includes(2));
// console.log(s.toString());
// console.log([...s]);

// let r = Range.parse('(1...10)');

// class Complex {
//   constructor(real, imaginary) {
//     this.r = real;
//     this.i = imaginary;
//   }

//   plus(that) {
//     return new Complex(this.r + that.r, this.i + that.i);
//   }

//   times(that) {
//     return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
//   }

//   static sum(c, d) {
//     return c.plus(d);
//   }

//   static product(c, d) {
//     return c.times(d);
//   }

//   get real() {
//     return this.r;
//   }

//   get imaginary() {
//     return this.i;
//   }

//   get magnitude() {
//     return Math.hypot(this.r, this.i);
//   }

//   toString() {
//     return `${this.r},${this.i}`;
//   }

//   equals(that) {
//     return that instanceof Complex && this.r === that.r && this.i === that.i;
//   }
// }

// Complex.ZERO = new Complex(0, 0);
// Complex.ONE = new Complex(1, 0);
// Complex.I = new Complex(0, 1);

// let c = new Complex(2, 3);
// let d = new Complex(c.i, c.r);

// console.log(c.plus(d).toString());
// console.log(c.magnitude);
// console.log(Complex.product(c, d));
// console.log(Complex.ZERO.toString());

// Number.prototype.times = function(f, _) {
//   let n = this.valueOf();
//   for (let i = 0; i < n; i++) {
//     f(i);
//   }
// }

// let n = 3;

// n.times(i => console.log(`hello ${i}`));

// class TypedMap extends Map {
//   constructor(keyType, valueType, entries) {
//     if (entries) {
//       for (let [k, v] of entries) {
//         if (typeof k !== keyType || typeof v !== valueType) {
//           throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
//         }
//       }
//     }

//     super(entries);
//     this.keyType = keyType;
//     this.valueType = valueType;
//   }

//   set(key, value) {
//     if(this.keyType && typeof key !== this.keyType) {
//       throw new TypeError(`${key} is not of type ${this.keyType}`);
//     }
//     if(this.valueType && typeof value !== this.valueType) {
//       throw new TypeError(`${value} is not of type ${this.valueType}`);
//     }

//     return super.get(key, value);
//   }
// }

// const test = new TypedMap("string", "string", [["1", "one"]]);

// class Super {
//   constructor() {
//     console.log (new.target);
//   }
// }

// class Sub  extends Super{
//   constructor() {
//     super();
//   }
// }

// const s = new Sub();

// const obj = {
//   0: "test",
//   length: 1,
//   meth() { return true }
// }

// const arr = Array.from(obj);

// console.log(arr);

class AbstractSet {
  has(x) { throw new Error('Abstract method'); }
}

class AbstractEnumerableSet extends AbstractSet {
  get size() { throw new Error('Abstract method'); }
  [Symbol.iterator]() { throw new Error('Abstract method'); }

  isEmpty() { return this.size === 0; }
  toString() { return `{${Array.from(this).join(', ')}}`; } // Requires iterator

  equals(set) {
    if (!(set instanceof AbstractEnumerableSet)) return false;
    
    if (!this.size !== set.size) return false;
    
    for (let element of this) {
      if (!set.has(element)) return false;
    } // Requires iterator

    return true;
  }
}

class AbstractWriteableSet extends AbstractEnumerableSet {
  insert(x) { throw new Error('Abstract method'); }
  remove(x) { throw new Error('Abstract method'); }

  add(set) {
    for (let element of set) {
      this.insert(element);
    }
  }

  substract(set) {
    for (let element of set) {
      this.remove(element);
    }
  }

  intersect(set) {
    for (let element of this) {
      if (!set.has(element)) {
        this.remove(element);
      }
    }
  }
}

class BitSet extends AbstractWriteableSet {
  #max;
  #n;
  #numBytes;
  #data;

  constructor(max) { // i.e. initialize with a max of 8
    super();
    this.#max = max;
    this.#n = 0;
    this.#numBytes = Math.floor(max / 8) + 1; // i.e. #numBytes === 2
    this.#data = new Uint8Array(this.#numBytes); // i.e #data === [0, 0];
  }

  static #bits = new Uint8Array([1, 2, 4, 8, 16, 32, 64, 128]); //255 is the maximum non-signed integer that fits in 8 bits
  static #masks = new Uint8Array([~1, ~2, ~4, ~8, ~16, ~32, ~64, ~128]);

  #isValid(x) { return Number.isInteger(x) && x >= 0 && x <= this.#max; }

  #has(byte, bit) { return (this.#data[byte] & BitSet.#bits[bit]) !== 0 }

  has(x) { // i.e. has 8
    if (this.#isValid(x)) {
      let byte = Math.floor(x / 8); // i.e. byte === 1
      let bit = x % 8;              // i.e. bit === 0
      return this.#has(byte, bit);
    } else {
      return false;
    }
  }

  insert(x) { // i.e. insert 8; i.e. insert 7
    if (this.#isValid(x)) {
      let byte = Math.floor(x / 8); // i.e. byte === 1 // i.e. byte === 0
      let bit = x % 8;              // i.e. bit === 0  // i.e. bit === 7
      if (!this.#has(byte, bit)) {
        this.#data[byte] |= BitSet.#bits[bit]; // i.e. data === [0, 1] // i.e. data === [128, 1]; i.e. data[0] can store 7, 6, 5, 4, 3, 2, 1 
        this.#n++;
      }
    } else {
      throw new TypeError('Invalid set element: ' + x);
    }
  }

  remove(x) {
    if (this.#isValid(x)) {
      let byte = Math.floor(x / 8);
      let bit = x % 8;
      if (this.#has(byte, bit)) {
        this.#data[byte] &= BitSet.#masks[bit];
        this.#n--;
      }
    } else {
      throw new TypeError('Invalid set element: ' + x);
    }
  }

  get size() { return this.#n; }

  *[Symbol.iterator]() {
    for (let i = 0; i <= this.max; i++) {
      if (this.has(i)) {
        yield i;
      }
    }
  }
}

const test = new BitSet(8);
test.insert(7);
console.log(test.has(7));
console.log(test.size);
test.insert(6);
console.log(test.size);
test.remove(7);
console.log(test.has(7));
console.log(test.size);