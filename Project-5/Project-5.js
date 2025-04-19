// 1. Circular Queue Implementation

class CircularQueue {
    constructor(capacity) {
      this.capacity = capacity;
      this.data = new Array(capacity);
      this.head = -1;
      this.tail = -1;
    }
  
    isEmpty() {
      return this.head === -1;
    }
  
    isFull() {
      return (this.tail + 1) % this.capacity === this.head;
    }
  
    insert(element) {
      if (this.isFull()) {
        console.log("Oops! The queue is full!");
        return;
      }
      if (this.isEmpty()) {
        this.head = 0;
        this.tail = 0;
      } else {
        this.tail = (this.tail + 1) % this.capacity;
      }
      this.data[this.tail] = element;
    }
  
    remove() {
      if (this.isEmpty()) {
        console.log("No elements left in the queue!");
        return;
      }
      let removedElement = this.data[this.head];
      if (this.head === this.tail) {
        this.head = -1;
        this.tail = -1;
      } else {
        this.head = (this.head + 1) % this.capacity;
      }
      console.log("Deleted element from queue:", removedElement);
      return removedElement;
    }
  
    frontElement() {
      if (this.isEmpty()) {
        console.log("Queue is empty!");
        return;
      }
      console.log("Front element is:", this.data[this.head]);
      return this.data[this.head];
    }
  
    printQueue() {
      let index = this.head;
      let queueElements = [];
      while (index !== this.tail) {
        queueElements.push(this.data[index]);
        index = (index + 1) % this.capacity;
      }
      queueElements.push(this.data[this.tail]);
      console.log(queueElements);
    }
}
  
const cq = new CircularQueue(5);
  
cq.insert(10);
cq.insert(20);
cq.insert(30);
cq.insert(40);
cq.insert(50);
cq.printQueue();

cq.remove();
cq.remove();
cq.printQueue();

cq.frontElement();
cq.printQueue();

// Output:
// [ 10, 20, 30, 40, 50 ]
// Deleted element from queue: 10
// Deleted element from queue: 20
// [ 30, 40, 50 ]
// Front element is: 30
// [ 30, 40, 50 ]

// ================================================================================================

// 2. Queue using Two Stacks

class CustomQueue {
    constructor() {
        this.stackOne = [];
        this.stackTwo = [];
    }

    addToQueue(value) {
        this.stackOne.push(value);
    }

    removeFromQueue() {
        while (this.stackOne.length > 1) {
            this.stackTwo.push(this.stackOne.pop());
        }

        let removedItem = this.stackOne.pop();

        while (this.stackTwo.length > 0) {
            this.stackOne.push(this.stackTwo.pop());
        }

        console.log("Element removed from queue:", removedItem);
    }

    topElement() {
        while (this.stackOne.length > 1) {
            this.stackTwo.push(this.stackOne.pop());
        }

        let peekElement = this.stackOne[0];

        while (this.stackTwo.length > 0) {
            this.stackOne.push(this.stackTwo.pop());
        }

        console.log("Top element in queue:", peekElement);
    }

    checkEmpty() {
        if (this.stackOne.length === 0) {
            console.log("The queue is currently empty!");
        } else {
            console.log("The queue has available slots!");
        }
    }

    showQueue() {
        console.log(this.stackOne);
    }
}

let myQueue = new CustomQueue();

myQueue.addToQueue(11);
myQueue.addToQueue(12);
myQueue.addToQueue(13);
myQueue.addToQueue(14);
myQueue.addToQueue(15);
myQueue.showQueue();

myQueue.removeFromQueue();
myQueue.removeFromQueue();
myQueue.showQueue();

myQueue.topElement();
myQueue.showQueue();

myQueue.checkEmpty();
myQueue.showQueue();

// Output:
// [ 11, 12, 13, 14, 15 ]
// Element removed from queue: 11
// Element removed from queue: 12
// [ 13, 14, 15 ]
// Top element in queue: 13
// [ 13, 14, 15 ]
// The queue has available slots!
// [ 13, 14, 15 ]

// ================================================================================================

// 3. Check if a Single Swap Can Make Strings Equal

let canBeEqual = function(str1, str2) {
    if (str1 === str2) {
        return true;
    } 
   let swapIndexes = [];

   for (let i = 0; i < str1.length; i++) {
       if (str1[i] !== str2[i]){
           swapIndexes.push(i);
       } 
       
       if (swapIndexes.length > 2){
           return false;
       } 
   }
   return swapIndexes.length === 2;
};

let str1 = "bank";
let str2 = "kanb";

console.log(canBeEqual(str1, str2));

// Output:
// true
