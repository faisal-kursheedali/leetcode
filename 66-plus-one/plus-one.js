/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr = digits.join("").toString().split("").reverse();
    let incr = 1;
    // let result = 0;
    let res =[];
    console.log(arr)
    for (let i = 0; i< arr.length; i++){
        let num = Number(arr[i]);
        if (num == 9 && incr == 1){
            console.log(num)
            num = 0;
            incr = 1;
            console.log("arr.length", arr.length)
            if (arr.length-1 == i){
                arr.push(0)
            }
            console.log("arr.length", arr.length)
        }else{
            num = num + incr;
            incr = 0
        }
        // console.log(i)
        // console.log(arr[i])
        // console.log('YYYYYYY')
        // console.log("result", result)
        // console.log("num:",num)
        // console.log("i:",i)
        // console.log("10**i:",10**i)
        // console.log("num*(10**i)",num*(10**i))
        // console.log("result+(num*(10**i))", result + (num*(10**i)))

    //   result = result + (num*10**i )
      res.push(num)
    }
    // return result;
    return res.reverse();
    // console.log(BigInt(+digits.join("")))
    // console.log((BigInt(+digits.join(""))+1n))
    // console.log((BigInt(+digits.join(""))+1n).toString())
    // console.log((BigInt(+digits.join(""))+1n).toString().split(""))
    // console.log((BigInt(+digits.join(""))+1n).toString().split("").map(e=> Number(e)))
    // return (BigInt(+digits.join(""))+1n).toString().split("").map(e=> Number(e))
};