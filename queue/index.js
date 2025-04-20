// Stack is linear form of data structure first in first out
// Similar to a queue of people in ticket counter where the first person gets ticket first

// Enqueue:- Add item into queue in front.

// Dequeue:- Remove item in queue from the front.

/* 
const queue = [];
let maxSize = 5,
  queueLength = queue.length;

const isEmpty = () => queueLength === 0;

const enqueue = (newItem) => {
  if (queueLength < maxSize) {
    // with custom logic
    queue[queueLength] = newItem;
    queueLength++;

    // with inbuilt method
    // queue.push()
  } else {
    console.error("Queue is full");
    return null;
  }
};

const dequeue = () => {
  if (!isEmpty()) {
    // with array method
    for (let index = 0; index < queue.length; index++) {
      queue[index] = queue[index + 1];
    }
    queueLength--;
    queue.length = queueLength;

    // with inbuilt method
    // queue.unshift()
  } else {
    console.error("Queue Is Already Empty");
    return null;
  }
};

const rear = () => {
  if (isEmpty()) {
    console.error("Queue is Empty");
  } else {
    console.log(queue[queueLength - 1]);
    // console.log(queue.at(-1));
  }
};

const front = () => {
  if (isEmpty()) {
    console.error("Queue is Empty");
  } else {
    console.log(queue[0]);
  }
};

const display = () => {
  console.log(queue);
};

enqueue(1);
enqueue(2);
enqueue(3);
front();
rear();

display();
 */

// class based approach for queue with inbuilt methods

class Queue {
  constructor(size) {
    this.maxSize = size;
    this.queue = [];
  }
  display() {
    return [...this.queue];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  isFull() {
    return this.maxSize ? this.queue.length === this.maxSize : false;
  }
  rear() {
    return this.queue.at(-1);
  }
  front() {
    return this.queue.at(0);
  }
  enqueue(newItem) {
    if (this.isFull()) {
      console.error("Queue is already full");
      return false;
    } else {
      this.queue.push(newItem);
      return true;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.error("Queue is empty");
      return false;
    } else {
      return this.queue.shift();
    }
  }
  size() {
    return this.queue.length;
  }
}

const queue = new Queue(3);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
