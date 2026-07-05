/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const  orgS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reversed = orgS.split(``).reverse().join(``);
    console.log(orgS, reversed)
    return orgS === reversed;
};