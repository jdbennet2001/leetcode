function login(arr){

    let results = []

    function add(prefix, tokens){
            
        if (tokens.length == 0)
            return results.push(prefix)

        let hash = {}

        for ( let i = 0; i < tokens.length; i++){
            let remaining = tokens.slice()
            let token = remaining.splice(i, 1)
            if ( token in hash)
                continue
            hash[token] = true
            add( prefix.concat(token), remaining )
        }    
    }

    add([], arr)

    return results;

}

let passwords = login([1, 1, 2])
console.log( JSON.stringify(passwords) )

