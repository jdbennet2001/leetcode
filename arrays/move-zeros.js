var assert = require('assert');

var moveZeroes = function(nums=[]) {
    let numbers = []
    let zeros = []

    nums.forEach(num => {
        if (num)
            numbers.push(num)
        else
            zeros.push(num)    
    })

    return numbers.concat(zeros)
};

let res = moveZeroes( [0,1,0,3,12])

console.log( res )
