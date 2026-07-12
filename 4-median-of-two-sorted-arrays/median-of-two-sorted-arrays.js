/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let isEven = (num) => num % 2 === 0;

    sum = 0;
    arr = [...nums1, ...nums2]
    arr.sort((a,b)=> Number(a)-Number(b));
    console.log(arr)
    index = Math.floor(arr.length / 2)
    if(isEven(arr.length)){
    return (arr[index-1] + arr[index])/2
    }else{
    return arr[index]
    }
    // arr.map((e)=>{
    //     sum += e;
    // })
    // console.log(sum)
    // console.log(arr.length)
    // console.log(sum/arr.length)

    // return sum/arr.length;
};