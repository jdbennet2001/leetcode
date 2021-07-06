function maxSum(arr, n){

    let max = 0;

    function sum( arr, start, length){
        let result = 0; 
        for ( let i = start; i < length+start; i++){
            result += arr[i]
        }
        return result;
    }

    let window = 0; 

    for ( let i = 0; i < arr.length - n + 1; i++ ){

        if ( i == 0 )
            window = sum(arr, 0, n)
        else 
            window = window - arr[i-1] + arr[i+n-1]

        console.log( `${i} => ${window}, ${max}`)    
        max = Math.max(max, window)
    }

    return max;

}

let max = maxSum([2, 1, 5, 1, 3, 2], 3 )
console.log( max )