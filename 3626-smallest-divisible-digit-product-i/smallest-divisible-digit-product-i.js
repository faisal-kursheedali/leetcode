/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {

    const digitProduct= (num)=> {
        let result = 1;
        while(num>0){
            dig = num%10;
            result = result * dig
            num = Math.floor(num/10)
        }
        return result;
    }

    for (let i = n; true; i++){
        digitProductResult = digitProduct(i);
        if(digitProductResult%t == 0){
            return i
        }
    }
    
};