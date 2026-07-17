/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    newArr = [... new Set(nums)]
    return nums.length > newArr.length
};