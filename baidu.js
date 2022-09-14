// // let s = 'baiduoxiaojiabankanjiaran';
// // let l = 0;
// // let r = 6;
// // let count = 0;
// // let check = function(s){
// //     let repeat = [];
// //     let y = ['a','e','i','o','u'];
// //     for(let i=0; i<s.length; i++){
// //         if(repeat.indexOf(s[i]) !== -1){
// //             return false;
// //         }else{
// //             repeat.push(s[i]);
// //         }
// //         if(i === 0 || i === 3){
// //             if(y.indexOf(s[i]) !== -1){
// //                 return false;
// //             }
// //         }else{
// //             if(y.indexOf(s[i]) === -1){
// //                 return false;
// //             }
// //         }

// //     }
// //     return true;
// // }
// // while(r < s.length){
// //     if(check(s.slice(l,r))){
// //         count++;
// //     }
// //     l++;
// //     r++;
// // }
// // count

// // let time = parseInt(readline());
// // let arr = readline().split('').map(item => parseInt(item));
// let arr = [1,1,1];
// console.log(arr)

// // let check = function (arr) {
// //     let l = 0;
// //     let r = 1;
// //     // let pre = 0;
// //     while (r < arr.length) {
// //         if (arr[l] !== arr[r]) {
// //             [arr[l], arr[r]] = [arr[r], arr[l]];
// //         } else {
// //             if (l-1 >= 0 && arr[l] !== arr[l - 1]) {
// //                 if (arr[l] === 0) {
// //                     arr[l] = 1;
// //                     arr[r] = 1;
// //                 } else {
// //                     arr[l] = 0;
// //                     arr[r] = 0;
// //                 }
// //             }
// //         }
// //         l++;
// //         r++;
// //         // pre++;
// //     }
// //     console.log(arr);
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] != arr[0]) {
// //             return false;
// //         }
// //     }
// //     return true;
// // }
// // console.log(check(arr))

// let fn = function(arr){
//     let one = 0;
//     let zero = 0;
//     for(const item of arr){
//         if(item === 1){
//             one++
//         }else{
//             zero++;
//         }
//     }
//     if(zero === 0 || one === 0){
//         return true;
//     }
//     if(one % 2 === 0){
//         return true;
//     }else if(zero % 2 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(fn(arr))

let arr = [0,0,0,0,1]
let len = arr.length;
// let l = 0;
// let r = 2;
// let cost = 0;
// while(r < len){
//     while(arr[l] >= 1 && arr[l+1] >= 2 && arr[r]>=3){
//         arr[l] = arr[l]-1;
//         arr[l+1] = arr[l+1]-2;
//         arr[r] = arr[r]-3;
//         cost += 5;
//     }
//     l++;
//     r++;
// }
// for(let item of arr){
//     cost += item;
// }
// console.log(arr)
// console.log(cost)

// let len = parseInt(readline());
// let arr = readline().split(' ').map(item => parseInt(item));
// console.log(arr);
let l = 0;
let r = 2;
let cost = 0;
while(r < len){
    while(arr[l] >= 1 && arr[l+1] >= 2 && arr[r]>=3){
        arr[l] = arr[l]-1;
        arr[l+1] = arr[l+1]-2;
        arr[r] = arr[r]-3;
        cost += 5;
    }
    l++;
    r++;
}
for(let item of arr){
    cost += item;
}
console.log(parseInt(cost))

let a = BigInt(10).toString();
a = Math.pow(10, 9);
b = parseInt(a)
b