/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    nCopyMain = n;
    let value = n%10;
    while(n>0){
        d = n%10
        n = Math.floor(n/10)
        console.log("n:"+n)
        nCopy = nCopyMain
        while(nCopy>0){
           d2 = nCopy%10
           nCopy = Math.floor(nCopy / 10); 
           console.log(d)
           console.log(d2)
           console.log("nCopy:"+nCopy)
           console.log(value)
           if (n === nCopy) continue;
           value =  d*d2>value? d*d2 : value
        }
    }
    return value;
};