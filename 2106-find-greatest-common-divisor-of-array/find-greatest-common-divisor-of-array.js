/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const findDeviser = (n)=>{
        const devisors = []
        for (let i = 1; i<=n; i++){
            n%i == 0? devisors.push(i):""
        }
        return devisors
    }

    newNums = nums.sort((a,b)=> a-b)
    smallDevisors =new Set(findDeviser(newNums[0]))
    commonDevisors = findDeviser(newNums[newNums.length-1]).filter((n)=> smallDevisors.has(n))
    console.log(nums)
    console.log(newNums)
    console.log(newNums[0])
    console.log(newNums[newNums.length-1])
    console.log(smallDevisors)
    console.log(findDeviser(newNums[newNums.length-1]))
    console.log(commonDevisors)
    return commonDevisors[commonDevisors.length-1]
}