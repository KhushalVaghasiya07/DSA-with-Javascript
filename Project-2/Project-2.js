// 1. WAP for Reverse Link List.

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SingleLinklist {
//     constructor() {
//         this.head = null;
//     }

//     push(val) {
//         let temp = new Node(val);

//         if (!this.head) {
//             this.head = temp;
//             return;
//         }

//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = temp;
//     }

//     display() {
//         let result = [];
//         let current = this.head;

//         while (current !== null) {
//             result.push(current.data);
//             current = current.next;
//         }
//         console.log(result);
//     }

//     reverselist() {
//         let prev = null;
//         let current = this.head;
//         let next = null;

//         while (current !== null) {
//             next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         this.head = prev;
//     }
// }

// let addData = new SingleLinklist();

// addData.push(100);
// addData.push(200);
// addData.push(300);
// addData.push(400);
// addData.push(500);

// console.log("Original List:");
// addData.display();

// addData.reverselist();

// console.log("Reversed List:");
// addData.display();

// =============================
/*Expected Output :-

Original List:
[100, 200, 300, 400, 500]

Reversed List:
[500, 400, 300, 200, 100]

*/
// =============================

// =======================================================================================

// 2. WAP for Given Link List is Palindrome or not

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class SingleLinklist {
//   constructor() {
//     this.head = null;
//   }

//   push(val) {
//     let temp = new Node(val);

//     if (!this.head) {
//       this.head = temp;
//       return;
//     }

//     let current = this.head;
//     while (current.next !== null) {
//       current = current.next;
//     }
//     current.next = temp;
//   }

//   display() {
//     let result = [];
//     let current = this.head;

//     while (current !== null) {
//       result.push(current.data);
//       current = current.next;
//     }
//     console.log(result);
//   }

//   isPalindrome() {
//     let values = [];
//     let current = this.head;

//     while (current !== null) {
//       values.push(current.data);
//       current = current.next;
//     }

//     let left = 0;
//     let right = values.length - 1;

//     while (left < right) {
//       if (values[left] !== values[right]) {
//         console.log("The linked list is not a palindrome.");
//         return false;
//       }
//       left++;
//       right--;
//     }
//     console.log("The linked list is a palindrome.");
//     return true;
//   }
// }

// let addData = new SingleLinklist();

// addData.push(1);
// addData.push(2);
// addData.push(3);
// addData.push(2);
// addData.push(1);

// console.log("Original List:");
// addData.display();

// addData.isPalindrome();

/*

Expected Output :-
    
Original List:
[1 , 2 , 3 , 2 , 1]
The linked list is a palindrome.

*/



// =======================================================================================

// 3.WAP for Removing Node Element at any Position in given Link list.

// class Node {
//         constructor(data) {
//             this.data = data;
//             this.next = null;
//         }
//     }

//     class SingleLinklist {
//         constructor() {
//             this.head = null;
//         }

//         push(val) {
//             let temp = new Node(val);

//             if (!this.head) {
//                 this.head = temp;
//                 return;
//             }

//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = temp;
//         }

//         display() {
//             let result = [];
//             let current = this.head;

//             while (current !== null) {
//                 result.push(current.data);
//                 current = current.next;
//             }
//             console.log(result);
//         }

//         removeAt(position) {
//             if (!this.head) {
//                 console.log("List is empty.");
//                 return;
//             }

//             if (position === 0) {
//                 this.head = this.head.next;
//                 return;
//             }

//             let current = this.head;
//             let prev = null;
//             let count = 0;

//             while (current !== null && count < position) {
//                 prev = current;
//                 current = current.next;
//                 count++;
//             }

//             if (current === null) {
//                 console.log("Position out of range.");
//                 return;
//             }

//             prev.next = current.next;
//         }
//     }

//     let addData = new SingleLinklist();

//     addData.push(10);
//     addData.push(20);
//     addData.push(30);
//     addData.push(40);
//     addData.push(50);

//     console.log("Original List:");
//     addData.display();
    
    
//     console.log("Updated List:");
//     addData.removeAt(2);
//     addData.display();

/*
Expected Output :-

Original List:
[10, 20, 30, 40, 50]

Updated List:
[10, 20, 40, 50]

*/


// =======================================================================================

// 4. WAP for Circular Link list. (append, remove functionality)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//     }

//     modify(value, action) {
//         if (action === 'push') {
//             let newNode = new Node(value);
//             if (!this.head) {
//                 this.head = newNode;
//                 newNode.next = this.head;
//                 return;
//             }
//             let current = this.head;
//             while (current.next !== this.head) {
//                 current = current.next;
//             }
//             current.next = newNode;
//             newNode.next = this.head;
//         }
//         else if (action === 'remove') {
//             if (!this.head) return;
//             let current = this.head;
//             let prev = null;

//             if (current.data === value) {
//                 if (current.next === this.head) {
//                     this.head = null;
//                     return;
//                 }
//                 let temp = this.head;
//                 while (temp.next !== this.head) {
//                     temp = temp.next;
//                 }
//                 this.head = this.head.next;
//                 temp.next = this.head;
//                 return;
//             }

//             do {
//                 prev = current;
//                 current = current.next;
//                 if (current.data === value) {
//                     prev.next = current.next;
//                     return;
//                 }
//             } while (current !== this.head);
//         }
//     }

//     display() {
//         if (!this.head) {
//             console.log("List is empty");
//             return;
//         }

//         let current = this.head;
//         let result = [];
//         do {
//             result.push(current.data);
//             current = current.next;
//         } while (current !== this.head);
//         console.log(result);
//     }
// }

// let circularList = new CircularLinkedList();
// circularList.modify(10, 'push');
// circularList.modify(20, 'push');
// circularList.modify(30, 'push');
// circularList.modify(40, 'push');

// console.log("Original Circular Linked List:");
// circularList.display();

// circularList.modify(20, 'remove');
// circularList.display();

// circularList.modify(10, 'remove');
// circularList.display();

/*
Expected Output :-

Original Circular Linked List :-

[10, 20, 30, 40]
[10, 30, 40]
[30, 40]

*/