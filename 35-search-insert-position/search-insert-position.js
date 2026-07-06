/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0
    if (target > nums[nums.length-1]) return nums.length;
    let i= nums[Math.floor(nums.lenght/2)]>target ? Math.floor(nums.lenght/2) : 0
    let j= nums[Math.floor(nums.lenght/2)]<target ? Math.floor(nums.lenght/2) : nums.length
    let prev;
    for (i; i< j; i++){
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