/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < -2147483648 || x > 2147483647){
        return 0
    }
    num=0;
    nx = x<0?x * (-1):x
    while (nx>0){
        s = (""+nx).length -1
        n = nx%10;
        num += n*(10**s)
        nx = Math.floor(nx/10);
    }
    num = x<0 ? num*(-1) : num;
    if(num < -2147483648 || num > 2147483647){
        return 0
    }
    return num;
};