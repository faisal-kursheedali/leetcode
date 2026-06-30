/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    const lastword = s.split(" ").filter((e)=> e.length!=0??e).reverse()[0]
    return lastword.length;
    
};