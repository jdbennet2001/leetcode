function permutation(arr){
    let results = []

    function add(prefix, tokens){
            
        if (tokens.length == 0)
            return results.push(prefix)

        let hash = {}

        for ( let i = 0; i < tokens.length; i++){
            let remaining = tokens.slice()
            let token = remaining.splice(i, 1)
            add( prefix.concat(token), remaining )
        }    
    }

    add([], arr)

    return results;
}

let ans = permutation(['a', 'b', 'c'])
console.log( JSON.stringify(ans) )