/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < -2147483648 || x > 2147483647){
        return 0
    }
    nx = x<0?x * (-1):x

    // 1st way
    // num=0;
    // while (nx>0){
    //     s = (""+nx).length -1
    //     n = nx%10;
    //     num += n*(10**s)
    //     nx = Math.floor(nx/10);
    // }
    // num = x<0 ? num*(-1) : num;
    // 2nd way
    num = Number((""+nx).split("").reverse().join(""));
    num = x<0? num*-1 : num;
    if(num < -2147483648 || num > 2147483647){
        return 0
    }
    return num;
};