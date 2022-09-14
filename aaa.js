// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
//  var findTargetSumWays = function(nums, target) {
//     let sum = 0;
//     for(const item of nums){
//         sum += item;
//     }
//     let dp = Array(nums.length).fill().map(() => new Array(sum*2+1).fill(0));
//     let zero = nums.length;
//     console.log(dp)
//     // 初始化
//     if(nums[0] === 0){
//         dp[0][sum] = 2;
//     }else{
//         dp[0][sum + nums[0]] = 1;
//         dp[0][sum - nums[0]] = 1;
//     }
//     console.log(dp)
//     // 画表
//     for(let i=1; i<nums.length; i++){
//         for(let j=-sum; j<=sum; j++){
//             if(j - nums[i] < -sum){
//                 // console.log(dp);
//                 dp[i][j+sum] = dp[i-1][j+nums[i]+sum];
//             }
//             else if(j + nums[i] > sum){
//                 dp[i][j+sum] = dp[i-1][j-nums[i]+sum];
//             }
//             else{
//                 dp[i][j+sum] = dp[i-1][j-nums[i]+sum]+dp[i-1][j+nums[i]+sum];
//             }
//             // dp[i][j+sum] = dp[i-1][j-nums[i]+sum]+dp[i-1][j+nums[i]+sum];
//         }
//     }
//     console.log(dp);
//     return dp[nums.length-1][target+sum];
// };

// console.log(findTargetSumWays([1,0],1))

// var wordBreak = function(s, wordDict) {
//     let dp = Array(s.length+1).fill(false);
//     dp[0] = true;
//     for(let i=1; i<=s.length; i++){
//         for(let j=i-1; j>=0; j--){
//             let qian = dp[j];
//             let hou = s.slice(j,i);
//             console.log(qian, hou, j)
//             if(qian && wordDict.includes(hou)){
//                 dp[i] = true;
//                 break;
//             }
//         }
//     }
//     console.log(dp);
//     if(dp.pop() === true){
//         return true;
//     }else{
//         return false;
//     }
// };

// wordBreak('leetcode', ["leet", "code"]);

// var singleNumber = function(nums) {
//     let res = nums[0];
//     if(nums.length > 0){
//         for(let i=1; i<nums.length; i++){
//             res = res ^ nums[i];
//             console.log(res);
//         }
//     }
    
//     return res;
// };

// singleNumber([4,1,2,1,2]);

var isUnique = function(astr) {
    let mark = 0;
    for(const item of astr){
        let move = item.charCodeAt() - 'a'.charCodeAt();
        console.log('move', move)
        if(mark & (1<<move) != 0){
            console.log('f', mark);
            return false;
        }else{
            mark = mark | (1<<move);
        }
    }
    console.log('end',mark);
    return true;
};

console.log(isUnique('abc'))