function checkArraySum(nums, k){

    for ( let i = 0; i < nums.length-1; i++ ){
        let sum = nums[i];
        for ( let j = i+1; j < nums.length; j++){
            sum = sum + nums[j];
            if ( sum % k == 0)
                return true;
        }
    }

    return false;

}

console.log( checkArraySum([23,2,6,4,7], 6))