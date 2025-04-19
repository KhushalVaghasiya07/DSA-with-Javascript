// 1.WAP for array data sorting descending order using selection sort.
// let arr = [23,45,53,72,36,86,98];

// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] > arr[i]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);
// output :- [98, 86, 72, 53, 45, 36, 23]

// ===============================================================================================

// 2.WAP for array data sorting ascending order using Merge sort.
// let numbers = [64, 25, 12, 22, 11];

// function sortArray(numbers) {
//     if (numbers.length <= 1) {
//         return numbers;
//     }

//     let middle = Math.floor(numbers.length / 2);
//     let leftPart = numbers.slice(0, middle);
//     let rightPart = numbers.slice(middle);

//     let sortedLeft = sortArray(leftPart);
//     let sortedRight = sortArray(rightPart);

//     return combine(sortedLeft, sortedRight);
// }

// function combine(leftArr, rightArr) {
//     let mergedArray = [];
//     let x = 0, y = 0;

//     while (x < leftArr.length && y < rightArr.length) {
//         if (leftArr[x] < rightArr[y]) {
//             mergedArray.push(leftArr[x]);
//             x++;
//         } else {
//             mergedArray.push(rightArr[y]);
//             y++;
//         }
//     }

//     mergedArray = mergedArray.concat(leftArr.slice(x));
//     mergedArray = mergedArray.concat(rightArr.slice(y));

//     return mergedArray;
// }

// let sortedNumbers = sortArray(numbers);
// console.log(sortedNumbers);

// output :- [11, 12, 22, 25, 64]

// ===============================================================================================

// 3.WAP for 2-D array print and also print it's square array.

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log("Without Square");

// for (let i = 0; i < array.length; i++) {
//   let result = " ";
//   for (let j = 0; j < array.length; j++) {
//     result += array[i][j] + " ";
//   }
//   console.log(result);
// }

// console.log("With Square");

// for (let i = 0; i < array.length; i++) {
//   let result = " ";
//   for (let j = 0; j < array.length; j++) {
//     result += array[i][j] * 2 + " ";
//   }
//   console.log(result);
// }

// output :- Without Square
//             1 2 3
//             4 5 6
//             7 8 9
//           With Square
//             2 4 6
//             8 10 12
//             14 16 18

// =======================================================================

//4.WAP for array operations (like push and pop, slice) without its method

// Push Method Manually

// let array = [1,2,3,4,5,6,7];

// function arraypush(array,x){
//     array[array.length] = x;
//     return x;
// }

// arraypush(array, 8)
// console.log(array)

// output :- [1, 2, 3, 4, 5, 6, 7, 8]

// ===================================

// Pop Method Manually

// let array = [1,2,3,4,5,6,7];

// function arraypop() {
//    array.length =  array.length - 1;
//    return console.log(array);

// }

// arraypop();

// output :- [1, 2, 3, 4, 5, 6]

// ===================================

// Slice Method Manually

// let array = [1,2,3,4,5,6,7];

// function arraySlice(array , stPoint , ePoint){
//     let str = ""
//     for (let i = 0; i < array.length; i++) {
//          if (array[i] > stPoint && array[i] <= ePoint) {
//             str += array[i] + " "
//         }

//     }
//     console.log(str);
// }

// arraySlice(array,2,4)

// output :- 3 4

// function palindrome(x) {
//     let reversed = "";
// let str = String(x).toLowerCase();
//     for (let i = 0; i > str.length; i--) {

//     }
// }
// palindrome(125);


