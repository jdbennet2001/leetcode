var twoSumLessThanK = function(nums, k) {
    
    let sum = -1;

    for ( let i = 0; i < nums.length; i++){
        for ( let j = 0; j < nums.length; j++){
            if ( i == j) continue;   //Sanity check
            let acc = nums[i] + nums[j]
            if ( acc > sum && acc < k)
                sum = acc
        }
    }

    return sum

};

let sum = twoSumLessThanK([34,23,1,24,75,33,54,8], 60)
console.log( sum )