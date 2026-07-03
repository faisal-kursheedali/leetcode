/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 1 && strs[0]=="") return "";
    let prefix =[""];
    const arr = strs.sort();
    for (let i = 0; i<arr[0].length;i++){
        if(arr[0][i] != arr[arr.length-1][i]){
            return prefix.join("");
        }else{
            prefix.push(arr[0][i])
        }
    }
    return prefix.join("");
};