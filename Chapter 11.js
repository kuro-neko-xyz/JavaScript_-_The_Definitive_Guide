// const array = [1, 2, 3];
// const set = new Set()
// console.log(set.size);
// set.add(array);
// console.log(set.size);
// set.delete(array);
// console.log(set.size);

// const array = Uint8Array.from([-2, 0, 2.5, "a"]);
// const array2 = Uint8ClampedArray.from([-2, 0, 2.5, "a"]);
// console.log(array);
// console.log(array2);

// const buffer = new ArrayBuffer(2);
// const test = new Uint8Array(buffer);
// const test2 = new Uint16Array(buffer);
// test[0] = 1;
// test[1] = 1;
// console.log(test2[0]);

// const sieveOfEratosthenes = (n) => {
//   let a = new Uint8Array(n + 1);
//   let p = 2;
//   let max = Math.sqrt(n);
//   while (p <= max) {
//     for (let i = 2 * p; i <= n; i += p) {
//       a[i] = 1;
//     }
//     while (a[++p] /* do nothing */);
//   }

//   while (a[n]) n--;

//   return n;
// };

// const startTime = new Date();
// const n = 1_000_000_000;
// const result = sieveOfEratosthenes(n);
// const endTime = new Date();
// console.log(`The largest prime number less than ${n} is ${result}`);
// console.log(`Execution time: ${endTime - startTime} ms`);

// const array = new Uint32Array(1);
// const dataView = new DataView(array.buffer); // [0, 0, 0, 0]
// dataView.setUint16(0, 1, true); // [1, 0, 0, 0]
// console.log(dataView.getUint8(0)); // 1
// console.log(dataView.getUint8(1)); // 0
// console.log(dataView.getUint8(2)); // 0
// console.log(dataView.getUint8(3)); // 0
// console.log(dataView.getUint16(0, false)); // 1

// const regex = new RegExp(/[^]*/);

// console.log(regex.test("abc")); // true

// const words = /\b\p{Alphabetic}+\b/gu;
// const text = "This is a naïve test of the matchAll() method.";

// for (let word of text.matchAll(words)) {
//   console.log(`found '${word[0]}' at index ${word.index}.`);
// }

console.log("---");
console.log("1. The RegExp.prototype.test() method");

const regex_1 = /^[yY]ol(ingo|o)$/;

console.log(regex_1.test("yolo")); // true
console.log(regex_1.test("Yolingo")); // true
console.log(regex_1.test("yol")); // false
console.log(regex_1.test("yolinga")); // false

console.log("---");
console.log("2. The String.prototype.match() method");

const str_2 = "yolo Yolingo yol yoloing";

const globalRegex_2 = /[yY]ol(?<test>ingo|o)/g;
const globalMatch_2 = str_2.match(globalRegex_2);

console.log(globalMatch_2); // [ 'yolo', 'Yolingo', 'yolo' ]

const nonGlobalRegex_2 = RegExp(globalRegex_2.source, "");
const nonGlobalMatch_2 = str_2.match(nonGlobalRegex_2);

console.log(nonGlobalMatch_2); // [ 'yolo', 'o', index: 0, input: 'yolo Yolingo yol yoloing', groups: { test: 'o' } ]

console.log("---");
console.log("3. The String.prototype.matchAll() method");

const str_3 = "yolo Yolingo yol yoloing";

const regex_3 = /[yY]ol(?<test>ingo|o)/g;
const matchAll_3 = str_3.matchAll(regex_3);

for (const match of matchAll_3) {
  console.log(match);
}

console.log("---");
console.log("4. The RegExp.prototype.exec() method");

const regex_4 = /[yY]ol(?<test>ingo|o)/g;
const str_4 = "yolo Yolingo yol yoloing";

let execMatch_4;

while ((execMatch_4 = regex_4.exec(str_4)) !== null) {
  console.log(execMatch_4);
}

console.log(regex_4.lastIndex); // 0

console.log("---");
console.log("5. The Date() constructor");

const date_5 = new Date(2025, 6);

console.log(date_5.toISOString()); // 2025-07-01T00:00:00.000Z

console.log("---");
console.log("6. Date setters and getters");

const date_6 = new Date();

date_6.setFullYear(date_6.getFullYear() + 1);

console.log(date_6);

// You can append "UTC" to the method names to use the UTC time zone

console.log("---");
console.log('7. "negative" date values');

const date_7 = new Date(-1000000000000);

console.log(date_7.toISOString()); // 1938-04-24T22:13:20.000Z

console.log("---");
console.log("8. Example of custom Error class");

class HTTPError extends Error {
  constructor(status, statusText, url) {
    super(`${status} ${statusText}: ${url}`);
    this.status = status;
    this.statusText = statusText;
    this.url = url;
  }

  get name() {
    return "HTTPError";
  }
}

let error_8 = new HTTPError(404, "Not Found", "https://example.com");

console.log(error_8.status); // 404
console.log(error_8.message); // 404 Not Found: https://example.com
console.log(error_8.name); // HTTPError

console.log("---");
console.log("9. Testing the the JSON.stringify() method");

const uint_9 = new Uint8Array([1, 2, 3]);
const array_9 = [1, 2, 3];

const obj_9 = {
  uint: uint_9,
  array: array_9,
};

const json_9 = JSON.stringify(obj_9);

console.log(json_9); // {"uint":{"0":1,"1":2,"2":3},"array":[1,2,3]}

const reconstructedObj_9 = JSON.parse(json_9);

console.log(reconstructedObj_9);

console.log("---");
console.log("10. JSON.stringify()");

const obj_10 = {
  name: "Test Object",
  data: new Uint8Array([4, 5, 6]),
  toJSON() {
    return {
      name: this.name,
      data: Array.from(this.data),
    };
  },
};

console.log(JSON.stringify(obj_10)); // {"name":"Test Object","data":[4,5,6]}
console.log(JSON.stringify(obj_10, null, 2));
/*
{
  "name": "Test Object",
  "data": [
    4,
    5,
    6
  ]
}
*/

console.log("---");
console.log("11. JSON.parse() with reviver");

const reviver_11 = (key, value) => {
  if (key[0] === "_") {
    return undefined;
  }

  const ISODateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;

  if (typeof value === "string" && ISODateRegex.test(value)) {
    return new Date(value);
  }

  return value;
};

const json_11 = `{
  "name": "Test Object",
  "_private": "This should be removed",
  "createdAt": "2023-10-01T12:00:00.000Z"
}`;

const parsedObj_11 = JSON.parse(json_11, reviver_11);

console.log(parsedObj_11);

console.log("---");
console.log("12. JSON.stringify second argument");

const symbol_12 = Symbol("symbol");

const obj_12 = {
  name: "Test Object",
  value: 42,
  extra: "This should be excluded",
  [symbol_12]: "This is a symbol property",
};

const json_12 = JSON.stringify(obj_12, ["name", "value", symbol_12]);

console.log(json_12);
console.log(obj_12);

console.log("---");
console.log("13. console.trace");

const functionC = () => {
  console.trace();
};

const functionB = () => {
  functionC();
};

const functionA = () => {
  functionB();
};

functionA();

console.log("---");
console.log("14. console.count and console.countReset");

for (let i = 0; i < 3; i++) {
  console.count("Loop Count");
}

console.count("Not Loop Count");

console.count("Loop Count");

console.countReset("Loop Count");

console.count("Loop Count");

console.log("---");
console.log("15. console.group and console.groupEnd");

console.log("Start of the log");
console.group("Grouped Messages");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();
console.log("End of the log");

console.log("---");
console.log("16. console.time, console.timeLog and console.timeEnd");

console.time("Processing Time");
let sum = 0;

for (let i = 1; i <= 1_000_000; i++) {
  sum += i;
}

console.timeLog("Processing Time");

for (let i = 1; i <= 1_000_000; i++) {
  sum += i;
}

console.timeEnd("Processing Time");

console.log("---");
console.log("17. setTimeout(), setInterval() and clearInterval()");

let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(clock);
}, 10000);
