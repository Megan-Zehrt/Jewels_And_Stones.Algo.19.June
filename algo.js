// 771. Jewels and Stones



// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".








/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    let list = new Set(jewels)
    let count = 0

    for(let stone of stones){
        if(list.has(stone)){
            count += 1
        }
    }

    return count
};