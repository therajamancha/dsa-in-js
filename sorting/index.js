// bubble sort
/* 
let data = [40, 30, 12, 25];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);
 */

// select sort
/* 
let data = [20, 12, 53, 3];

for (let i = 0; i < data.length; i++) {
  let minId = i;
  for (let j = i + 1; j < data.length; j++) {
    if (data[j] < data[minId]) {
      minId = j;
    }
  }
  let temp = data[minId];
  data[minId] = data[i];
  data[i] = temp;
}

console.log(data);
 */

// insertion sort

const data = [4, 1];

for (let i = 1; i < data.length; i++) {
  let current = data[i], // 1
    prev = i - 1; // 0

  // 4 > 1
  while (prev >= 0 && data[prev] > current) {
    data[prev + 1] = data[prev];
    // 1 = 4
    prev--; // prev = -1
  }
  // [4 , 4]

  // prev (-1) + 1 = 0 data[0] = 1
  data[prev + 1] = current;
}

console.log(data);
