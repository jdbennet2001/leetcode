function noRepeat(str){

    let max = 0;

    let map = {}
    for ( let i = 0; i< str.length; i++){
    
        if ( i > 0 )
            delete map[str.charAt(i-1)]

        map = uniqMap(str, i, {} )
        max = Math.max(Object.keys(map).length, max)
    }

    return max;
}

function uniqMap(str, start=0, map = {}){
    for ( let i = start + Object.keys(map).length; i < str.length; i++){
        let ch = str.charAt(i)
        if ( map[ch] )
            return map;
        else 
            map[ch] = true;
    }
    return map;
}

// console.log( uniqMap('aba', 0) )

let ans = noRepeat('aabccbb')
console.log( ans )