// 1.Write a program for Stack Operation Program (Insert, Delete, isEmpty, TopElement, Length) - 4 mark.

// class stack {
//   constructor() {
//     this.data = [];
//     this.a = []
//   }

//   Push(val) {
//     return (this.data[this.data.length] = val);
//   }

//   Pop() {
//     return (this.data.length -= 1);
//   }

//   isEmpty() {
//     if (this.data.length == 0) {
//       return console.log("Stack is Empty");
//     } else {
//       return console.log("Stack isn't Empty");
//     }
//   }
//   TopElement() {
//     return this.data[this.data.length - 1];
//   }

//   stakelength() {
//     return console.log(this.data.length);
//   }

//   display() {
//     console.log(this.data);
//   }
// }

// let mystack = new stack();

// mystack.Push(100);
// mystack.Push(200);
// mystack.Push(300);
// mystack.Push(400);
// mystack.Push(500);
// mystack.display();

// mystack.Pop();
// mystack.display();

// mystack.isEmpty();
// mystack.display();

// mystack.stakelength();

// output :- [100, 200, 300, 400, 500]
//           [100, 200, 300, 400]
//           Stack isn't Empty
//          [100, 200, 300, 400]
//           4

// ===================================================================================

// 2.Write a program for Next Greater Element using Stack. - 3 mark

// class Greaterstake {
//   constructor() {
//     this.arr = [];
//   }

//   GreterElement(nums) {
//     let result = new Array(nums.length).fill(-1); 

//     for (let i = 0; i < nums.length; i++) {
//       while (this.arr.length > 0 && nums[this.arr[this.arr.length - 1]] < nums[i]) {
//         result[this.arr.pop()] = nums[i];
//       }
//       this.arr.push(i);
//     }
//     return result;
//   }
// }

// let GTstake = new Greaterstake();
// let nums = [5, 7, 6, 2, 3, 5, 7, 9];
// console.log(GTstake.GreterElement(nums));

// output: -[6, 6, 7, 3, 5, 7, 9, -1];

// ===================================================================================

// 3.Write a program for a reverse string using Stack. - 3 mark

// class reversestack {
//   constructor() {
//     this.a = [];
//   }
//   stackreverse(str) {
//     for (let i = 0; i < str.length; i++) {
//       this.a.push(str[i]);
//     }
//     //  hello
//     let res = "";
//     while (this.a.length > 0) {
//       res += this.a.pop();
//     }

//     return (this.a = res);
//   }
//   display() {
//     console.log(this.data);
//   }
// }

// let revstk = new reversestack();

// console.log(revstk.stackreverse("Hello World"));

// output :- dlroW olleH

// let arr = [2,4,2,5,7,8]
// let res = new Array(arr.length).fill(-1);

// console.log(res);
