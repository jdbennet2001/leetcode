function numDecodings(s) {

    let ctr = 0;

    let hash = {}

    function traverse(str){

        console.log( ` ==> ${str}`)

        if ( str.length == 0)
            return 1;

        if (str in hash)
            return hash[str]

        let ctr = 0;

        for ( let i = 1; i<=26; i++){
            let i_to_s = i.toString();
            if( str.startsWith( i_to_s ) ){
                let string = str.slice(i_to_s.length)
                ctr = ctr +traverse(string)
            }

        }

        hash[str] = ctr;

        return ctr;

    }

    let count = traverse(s)
    return count

    
}

// console.log( numDecodings('126'))

console.log( numDecodings("111111111111111111111111111111111111111111111"))