# ARRAY DATA STRUCTURE

Array traverse element and print one by one

```js
const data = [9, 45, 12, 8, 56, 34, 2, 3, 6, 43];

// for of loop may be use when you want to loop every element
for (x of data) {
  console.log(x);
}

// when you want the start index to be different in this case we are looping from left to right
for (let i = data.length - 1; i >= 0; i--) {
  console.log(data[i]);
}

// conditional based loop
let i = 0;
while (i < data.length) {
  console.log(data[i]);
  i++;
}

// when you want to loop at least one time event when condition not match
let j = 0;
do {
  console.log(data[j]);
  j++;
} while (j < data.length);
```

Add new element in position

```js
// with loop
let newElement = 32,
  position = 3,
  i = data.length - 1;
console.log(data);

while (i >= position) {
  data[i + 1] = data[i];
  if (i === position) {
    data[i] = newElement;
  }
  i--;
}

console.log(data);

// with array method
data.splice(1, 0, 222222);
console.log(data);
```

Remove element from the position in array

```js
// with loop
console.log(data);
let position = 3,
  index = position;

while (index < data.length - 1) {
  data[index] = data[index + 1];
  console.log(data[index]);
  index++;
}
// data.pop(); // inbuilt method
data.length = data.length - 1;
console.log(data);

// with array method
data.splice(position, 1);
console.log(data);
```

Search element's index in array

```js
// with loop
console.log(data);
let element = 12,
  index = -1;
for (let i = 0; i < data.length; i++) {
  if (data[i] === element) {
    index = i;
    break;
  }
}
console.log(index);

//with array method
console.log(data.indexOf(element));
```

Merge two array in one new array

```js
let a = [1, 2, 3, 4, 5],
  b = [6, 7, 8, 9, 0],
  c = [];

// with the help of loop

for (let i = 0; i < a.length; i++) {
  c[i] = a[i];
}

for (let j = 0; j < b.length; j++) {
  c[a.length + j] = b[j];
}

// with the help of inbuilt
c = a.concat(b);

// with array destructure
c = [...a, ...b];

console.log(a);
console.log(b);
console.log(c);
```

Merge two sorted array in sorted form

```js
let data1 = [3, 7, 12, 34, 56, 90],
  data2 = [4, 9, 25, 45],
  data3 = [],
  d1 = 0,
  d2 = 0,
  d3 = 0;

while (d1 < data1.length && d2 < data2.length) {
  if (data1[d1] < data2[d2]) {
    data3[d3] = data1[d1];
    d1++;
  } else {
    data3[d3] = data2[d2];
    d2++;
  }
  d3++;
}

if (data1.length < data2.length) {
  while (d2 < data2.length) {
    data3[d3] = data2[d2];
    d2++;
    d3++;
  }
} else {
  while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;
    d3++;
  }
}
console.log(data3);
```
