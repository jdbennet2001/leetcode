function validPalindrome(s){

    let parse_ctr = Math.floor(s.length /2)
    
    let mutex = false;
    
    for ( let i = 0; i < parse_ctr; i++){
        let front = s.charAt(i)
        let back = s.charAt(s.length-1-i)
        console.log( `${i} = > ${front}, ${back}`)
        if ( front != back )
            return false;
    }
    
    return true;

}

let ans = validPalindrome("baccab")
console.log( ans )