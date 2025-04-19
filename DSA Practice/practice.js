// var containsDuplicate = function (nums) {

//   let left = 0;
//   let right = nums.length - 1;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == nums[i + 1]) {
//       return true;
//     }
//     if (nums[i] != nums[i + 1]) {
//       left = left + 1;
//       if (nums[i] == left) {
//         return true;
//       }
//       else{
//         return false;
//       }
//     }
//   }
//   return false;
// };

// let nums = [1, 2, 3, 4];
// console.log(containsDuplicate(nums));


// var rotateString = function(s, goal) {
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j < goal.length; j++) {
//           if (s[i] == goal[j]) {
//             return false            
//           }
//           return true;
//         }
//     }
// };

// let s = "abcde";
// let goal = "daeab";

// console.log(rotateString(s,goal));

function spiralMatrix(n) {
  
}