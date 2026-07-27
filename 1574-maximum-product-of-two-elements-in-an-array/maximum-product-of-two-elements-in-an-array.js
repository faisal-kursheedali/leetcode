/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    newArr = nums.sort((a,b)=> a-b)
    return (newArr[newArr.length-2] -1 ) * (newArr[newArr.length-1] -1 )
};