function isValidIP(s){

    if ( isValidIP4(s) )
        return "IPv4"
    else if ( isValidIP6(s) )
        return "IPv6"
    else
        return "Neither"

}

// todo: docs
const TOKENS_IN_IP4 = 4
const TOKENS_IN_IP6 = 8
const IP6_TOKEN_LENGTH = 4;
function isValidIP4(s){
    let tokens = s.split('.')

    if ( tokens.length != TOKENS_IN_IP4 )
        return false

    let valid = tokens.every( token =>{
        if ( !token ) return false;                             // No empty string
        if ( token.length > 1 && token.charAt(0) == 0 ) return false;               // No leading zeros
        if ( !validChars(token, '0123456789')) return false     // Invalid characters
        let value = parseInt( token, 10)
        if (isNaN(value) || value > 255) return false;          // Valid range
        return true;      
    })

    return valid;
}

// Return true if all valid chars
function validChars(s, charset){
    for ( let i = 0; i < s.length; i++){
        if (!charset.includes(s.charAt(i)))
            return false;
    }
    return true;
}

function isValidIP6(s){

    let tokens = s.split(':')

    if ( tokens.length != TOKENS_IN_IP6 )
        return false

    let valid = tokens.every( token =>{
        if ( !token ) return false; // No empty token
        if ( token.length > IP6_TOKEN_LENGTH ) return false;               // All tokens are the correct length
        if ( !validChars(token, '0123456789abcdefABCDEF')) return false     // Valid characters
        return true;      
    })

    return valid;
}

let valid = isValidIP( "192.0.0.1" )
console.log( valid )

