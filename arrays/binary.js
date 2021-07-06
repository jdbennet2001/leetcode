
/*
 Add two binary numbers. Right to Left, with carry bit.
 Arithmetic notes:
    00 - 0
    01 - 1
    10 - 2
    11 - 3
 */
var addBinary = function(a, b) {

    let length = Math.max(a.length, b.length) + 1;
    let a1 = pad(a, length).split('')
    let b1 = pad(b, length).split('')

    let carry = 0;

    let ans = []

    for ( let i = length-1; i >= 0; i--){
        let ca1 = a1.pop()
        let cb1 = b1.pop()

        let sum =  parseInt(ca1)  + parseInt(cb1) + carry;

        if ( sum == 1 || sum == 3)
            ans.unshift(1)
        else 
            ans.unshift(0)

        if ( sum == 2 || sum == 3)
            carry = 1
        else 
            carry = 0;

    }

    let result =  ans.join('')
    if (result.startsWith('0'))
    {
        result = result.slice(1)
    }
    return result;
    

};

function pad(string, length){
    while ( string.length < length){
        string = '0' + string;
    }
    return string;
}


let ans = addBinary('1010', '1011')
console.log( ans )