/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const numStr = digits.join('')
    const numBig = BigInt(numStr)
    const resBig = numBig + BigInt(1) // ζθ + 1n δΉθ‘
    return resBig.toString().split('').map(item => parseInt(item))
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))