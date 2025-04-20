// Searching algorithm

// There are two way of searching algorithm one is linear search and second is binary search

// LINEAR SEARCH:- in linear we search element one by one

// BINARY SEARCH:- in binary search we search element in half in binary there is also two way one is iterative ans recursive

// NOTE: binary search only work in sorted array

// LINEAR SEARCH EXAMPLE:-

// the big o of f(n) is O(n) because worst case of having a elem is last index which is array's length itself
/* 
const data = [4, 62, 74, 36, 42, 94, 22, 53, 2],
  elem = 94;

let index = -1;

for (let i = 0; i < data.length; i++) {
  if (data[i] === elem) {
    index = i;
    break;
  }
}
console.log(index);
 */

// BINARY SEARCH EXAMPLE(iterative):-
/* 
const data = [2, 4, 6, 8, 10, 12, 14, 16],
  elem = 6;

let start = 0,
  end = data.length - 1,
  index = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === elem) {
    index = mid;
    break;
  } else if (data[mid] < elem) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(index);
 */

// BINARY SEARCH EXAMPLE(recursive):-

const data = [2, 4, 6, 8, 10, 12, 14, 16],
  elem = 16;

let start = 0,
  end = data.length - 1,
  index = -1;

const binaryFind = () => {
  let mid = Math.floor((start + end) / 2);
  if (data[mid] === elem) {
    index = mid;
    return;
  } else if (data[mid] < elem) {
    start = mid + 1;
    binaryFind();
  } else {
    end = mid - 1;
    binaryFind();
  }
};

binaryFind();
console.log(index);
