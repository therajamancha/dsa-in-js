# STACK DATA STRUCTURE

- Stack is linear form of data structure first in last out, last in first out (lifo fifo)

- Similar to a stack of plate where you just able to get top most plate

`NOTE:-` Always fix MAX VALUE as it is standard way

`OPERATION:-` push (new add), pop (remove element), isEmpty, isPick, printStack

Create a stack with functional based approch

```js
const data = [];
let currentSize = data.length,
  max = 5;

function stackPush(item) {
  if (currentSize < max) {
    data[currentSize++] = item;
    return true;
  } else {
    console.error("Stack Is Full");
    return false;
  }
}

function stackPop() {
  if (currentSize > 0) {
    const popped = data[--currentSize];
    data.length = currentSize;
    return popped;
  } else {
    console.error("Stack Is Already Empty");
    return null;
  }
}

stackPush(22);
stackPush(54);
stackPush(64);
stackPush(36);
stackPop();
stackPop();
stackPop();
stackPush(35);
stackPush(75);
stackPush(62);

console.log(data);
```

Reverse a word with the help of functional based stack

```js
const stack = [];
let stackSize = stack.length,
  word = "hello";
word = word.split("");

const stackPush = (item) => {
  stack[stackSize] = item;
  stackSize++;
};

const stackPop = () => {
  let lastItem = stack.at(-1);
  stackSize--;
  stack.length = stackSize;
  return lastItem;
};

const reverseWord = (array) => {
  for (const char of array) {
    stackPush(char);
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = stackPop();
  }
};

reverseWord(word);

word = word.join("");

console.log(word);
```

Stack with the help of the class and its method

```js
class Stack {
  constructor(size) {
    this.stack = [];
    this.maxSize = size;
  }
  push(item) {
    if (this.maxSize && this.stack.length >= this.maxSize) {
      console.error("Stack is Full");
      return;
    }
    this.stack.push(item);
  }
  pop() {
    if (this.stack.length === 0) {
      console.error("Stack is Empty");
      return;
    }
    return this.stack.pop();
  }
  peek() {
    return this.stack.at(-1);
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  show() {
    return [...this.stack];
  }
}
```

Create a function that expect string and return a reverse string using stack DS

```js
const reverseString = (string) => {
  string = string.split("");
  let stringStack = new Stack();
  for (const element of string) {
    stringStack.push(element);
  }

  for (let index = 0; index < string.length; index++) {
    string[index] = stringStack.pop();
  }
  return string.join("");
};

console.log(reverseString("Hello"));
```
