// set is a bit similar to array but it not contain duplicate elements
const setItem = new Set(["Raj", "Ravi", "Raj"]);

setItem.add("Amancha"); // add item

setItem.delete("Ravi"); // remove item

console.log(setItem.has("Raj")); // check if element exists or not

const values = setItem.values();

for (const element of values) {
  console.log(element);
}

console.log(values.next().value); // get next value
console.log(values.next().value); // get next value
console.log(values.next().done); // to check if next complete

const keys = setItem.keys();

for (const element of keys) {
  console.log(element);
}

console.log(keys.next().value);
console.log(keys.next().value);
console.log(keys.next().done);

const entries = setItem.entries();

for (const element of entries) {
  console.log(element);
}

console.log(setItem);

// convert set to Array

const array = Array.from(setItem);

console.log(array);
