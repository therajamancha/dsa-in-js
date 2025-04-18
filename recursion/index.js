// basic recursion

const logSomething = (something) => {
  // head recursion
  console.log(something);
  if (something < 10) {
    logSomething(something + 1);
  }
  // tail recursion
};

logSomething(0);

// factorial with recursion
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5));

// indirect recursion

// create a indirect function and buy as much as apple that can be purchased with wallet amount
let wallet = 100,
  purchasedApple = 0,
  applePrice = 10;

const buyApple = (money) => {
  purchasedApple += 1;
  money -= applePrice;
  return buyMore(money);
};

const buyMore = (money) => {
  wallet = money;
  if (money >= applePrice) {
    return buyApple(money);
  }
  return `I Have ${purchasedApple} apple(s) and ${wallet} rupees in wallet`;
};

console.log(buyApple(wallet));

// reverse an array with the help of recursive function
let arrayList = [2, 4, 7, 3, 76, 5, 46],
  temp;
console.log(arrayList);
const reverseArray = (array, start, end) => {
  if (start <= end) {
    temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    reverseArray(array, start + 1, end - 1);
  }
};

reverseArray(arrayList, 0, arrayList.length - 1);
console.log(arrayList);
