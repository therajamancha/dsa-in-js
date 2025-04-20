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