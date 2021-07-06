function wordBreak(s, wordDict) {

    let match = 0

    function traverse(s, wordDict){

        if (s.length == 0)
            match = true;

        wordDict.forEach(word =>{

            if ( s.startsWith(word) ){
                let str = s.slice(word.length)
                traverse(str, wordDict)
            }
        })

    }

    traverse(s, wordDict)
    return match;

}


let output = wordBreak('leetcode', ['leet', 'code'])
console.log( output )