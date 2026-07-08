/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let numString = n.toString().replaceAll("0", "")
    let num = Number(numString)
    let numsArr = numString.split("")
    let sum = 0;
    for (let i of numsArr){
        sum = sum + Number(i)
    }
    return num * sum;
};