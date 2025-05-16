const array = [1, 2, 3];
const set = new Set()
console.log(set.size);
set.add(array);
console.log(set.size);
set.delete(array);
console.log(set.size);