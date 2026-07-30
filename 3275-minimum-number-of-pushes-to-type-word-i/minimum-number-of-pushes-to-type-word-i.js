/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    // keypad = [
    //     ["a","b","c"],
    //     ["d", "e", "f"],
    //     ["g", "h", "i"],
    //     ["j", "k", "l"],
    //     ["m", "n", "o"],
    //     ["p", "q", "r", "s"],
    //     ["t", "u", "v"],
    //     ["w", "x", "y", "z"]
    // ];
    // keypad2={
    //     "a": 1,
    //     "b": 2,
    //     "c": 3,
    //     "d": 1,
    //     "e": 2,
    //     "f": 3,
    //     "g": 1,
    //     "h": 2,
    //     "i": 3,
    //     "j": 1,
    //     "k": 2,
    //     "l": 3,
    //     "m": 1,
    //     "n": 2,
    //     "o": 3,
    //     "p": 1,
    //     "q": 2,
    //     "r": 3,
    //     "s": 4,
    //     "t": 1,
    //     "u": 2,
    //     "v": 3,
    //     "w": 1,
    //     "x": 2,
    //     "y": 3,
    //     "z": 4,
    // }
    // sum = 0;
    // for (let l of word){
    //     if(l in keypad2){
    //     sum = sum + keypad2[l]
    //     }
    // }
    // return sum;
    sum = 0;
    for (let i = 0; i < word.length; i++){
        push = Math.floor(i/8) + 1
        sum = sum + push;
    }
    return sum;
};