var addBinary = function(a, b) {
    let carry_bit = 0

    let length = Math.max( a.length, b.length )
    for ( let i = 0 ; i < length; i++){
        let a1 = a.length >= i ? a.charAt(a.length -1 - i) : 0
        let b1 = b.length >= i ? b.charAt(b.length -1 -i): 0

        // 0 = 0, 1 = 1, 2 = 10, 3 = 11

        let sum = carry_bit + parseInt(a1) + parseInt(b1)
    }


};

addBinary('1010', '1011')