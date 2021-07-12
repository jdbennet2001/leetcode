var divide = function(dividend, divisor) {
    if ( dividend == 0)
        return 0;

    let top = Math.abs(dividend)
    let bottom = Math.abs(divisor)

    let ctr = 0;

    while ( top > bottom ){
        top = top - bottom;
        ctr++;
    }

    //Adjust the sign..
    if (( dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0 ))
        ctr = -1 * ctr;

    return ctr;

};

let ans = divide( 7 , -3)
console.log( ans )

