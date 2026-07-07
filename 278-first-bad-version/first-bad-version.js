/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // let k = n>3? Math.floor(n/2):n;
        // let middleVersion = isBadVersion(k);
        // let i = middleVersion?1: k; 
        // let j = middleVersion ?k :n;

        // console.log(middleVersion)
        // console.log(k)
        // console.log(i)
        // console.log(j)
        // for (i; i<=j; i++){
        // console.log(i)

        //     if (isBadVersion(i)){
        //         return i;
        //     }
        // }
        // ⭐️⭐️⭐️⭐️⭐️
        // let i = 1
        // let j = n;
        // let k = Math.ceil(n/2);
        // for (i; i<= j;_){
        //     let middleValue = isBadVersion(k)
        //     console.log(i)
        //     console.log(j)
        //     console.log(k)
        //     console.log(middleValue)
        //     console.log("i===j")
        //     console.log(i===j)
        //     if(middleValue == true){
        //         j = k;
        //     }else{
        //         i = k;
        //     }
        //     if(i===j) break
        //     k = Math.ceil((i+j)/2)
        // }
        // return i;
        let left = 1;
let right = n;

while (left < right) {
    let mid = left + Math.floor((right - left) / 2);

    if (isBadVersion(mid)) {
        right = mid;
    } else {
        left = mid + 1;
    }
}

return left;
    };
};