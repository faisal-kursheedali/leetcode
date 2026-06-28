/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let rev = 0;
    let remainder = x;
    while(remainder>0){
        let last = remainder%10;
        remainder = Math.trunc(remainder/10)
        rev = rev*10+last
    }
    console.log(rev)
    console.log(x)
    return rev===x;
};