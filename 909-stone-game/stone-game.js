/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    alice = 0;
    bob = 0;
    for(let i = 1; i< piles.length; i++){
        pile1 = piles[i-1];
        pile2 = piles[piles.length-i];
        if(pile1> pile2){
            alice = alice + pile1;
            bob = bob + pile2
        }else{
            alice = alice + pile2
            bob = bob + pile1
        }
        if(i == Math.floor(piles.length-1/2)){
            break;
        }
    }
    return alice>bob
};