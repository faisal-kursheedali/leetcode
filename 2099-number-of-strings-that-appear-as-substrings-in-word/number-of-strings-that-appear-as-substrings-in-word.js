/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    for (let i of patterns){
        word.includes(i)? count+=1:"";
    }
    return count;
};