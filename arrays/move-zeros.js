var assert = require('assert');

var moveZeroes = function(nums=[]) {

    for ( let i = nums.length -1; i >= 0; i--){
        if ( nums[i] == 0 ){
            nums.splice(i, 1)
            nums.push(0)
        }
    }

    return nums
};

let res = moveZeroes( [0,1,0,3,12])

console.log( res )
