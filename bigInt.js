/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const numStr = digits.join('')
    const numBig = BigInt(numStr)
    const resBig = numBig + BigInt(1) // 或者 + 1n 也行
    return resBig.toString().split('').map(Number)
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))