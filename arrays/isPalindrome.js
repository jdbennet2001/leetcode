
/*
 TODO: Document
 - inputs
 - returns
 - algorithm
 */
function isPalindrome(s){

    //TODO: Use hashmap
    let chars = 'thequickbrownfoxjumpsoverthelazydogTHEQUICKBROWNFOXJUMPSOVERTHELAZYDOG1234567890'

    // Filter all non-alphanumeric data from string
    let str = s.split('').filter( ch =>{
        let inc =  chars.includes(ch);
        return inc;
    })


    // Map to lower case
    str = str.map( ch => {return ch.toLowerCase() })

    
    // Walk string, comparing left hand char to right hand char. 
    for ( let i = 0; i < Math.floor(str.length/2); i++){
        let start = str[i]
        let end = str[str.length -1 -i]
        let match = start == end;
        console.log( `${i} => ${start} - ${end}, ${match}`);

        if ( ! match )
            return false;

    }

    return true;

}

let test = "H8Co9Y8` FhB0MZ?cFd !? H?!YD'Pz7w?Ntiz86,LaEm't!H9 r!? 9q'.sWKS  !iA\".3Y1Gj8ev5S :.` ;7k.;.C?4 811s2K :e` s 'D?u7::::7u?D' s `e: K2;118 4?C.;.k7; `.: S5ve8jG1Y3.\"Ai!  SKW;.'q9 ?!r 9H!t'mEaL,68zitN?w7zP'DY!?H ?! dFc?ZM0BhF `8Y9oC8H"

// let test = 'Cattac'
let valid = isPalindrome(test)
console.log( `${test} => ${valid}`);