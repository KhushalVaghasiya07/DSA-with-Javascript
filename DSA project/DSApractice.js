// function kanades(arr) {
//     let current = 0; 
//     let max = arr[0];

//     for(let i = 0 ; i < arr.length ; i++){
//         current = current + arr[i]; 

//         if (current > max) {
//             max = current;
//         }
//         else if(current < 0){
//             current = 0;
//         }
//     }
//     return max;
// }
// let data = [12,34,-32,45,67,8,23,-6];
// console.log(kanades(data));



function kanadesDoWhile(arr) {
    let current = 0;
    let max = arr[0];
    let i = 0;

    do {
        current += arr[i];

        if (current > max) {
            max = current;
        }
        if (current < 0) {
            current = 0;
        }

        i++;
    } while (i < arr.length);

    return max;
}

let data = [-2];
console.log(kanadesDoWhile(data));
