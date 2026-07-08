/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // let k = 0
    // for (let i in nums){
    //     if (nums[i]!=val){
    //         nums[k] = nums[i]
    //         k+=1
    //     }
    // }
    // return k
    const filteredArr = nums.filter((e)=> e!= val);
    for(i in nums){
        nums[i] = filteredArr[i]
    }
    return filteredArr.length;
};