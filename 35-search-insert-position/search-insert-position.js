/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0
    if (target > nums[nums.length-1]) return nums.length;
    let prev;
    for (let i=0; i< nums.length; i++){
        let value = nums[i];
        if (value === target){
            return i
        }
        if (value > target && prev != null && target > prev){
            return i;
        }
        prev = value;
    }
    
};