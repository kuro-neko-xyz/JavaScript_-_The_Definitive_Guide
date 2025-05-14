// const modules = {};
// function require(moduleName) { return modules[moduleName]; }

// modules.BitSet = (function() {
//   let exports = {};

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

  export { BitSet };

//   return exports;
// })();

// const BitSet = require('BitSet');

// const test = new BitSet(8);
// test.insert(7);
// console.log(test.has(7));
// test.remove(7);
// console.log(test.has(7));