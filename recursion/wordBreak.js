function wordBreak(s, wordDict) {
    
    let strings = {}

    function traverse(words, s, wordDict){

        if ( s.length == 0 )    // Base case
           strings[ words.join(' ')] = true;

        wordDict.forEach(word =>{
            if ( s.startsWith(word)){
                let sentence = words.concat(word)
                let substring = s.slice(word.length)        // TODO: Should we use array indexing?
                traverse(sentence, substring, wordDict)
            }
        })

    }

    traverse([], s, wordDict)
    return Object.keys(strings)

};

console.log(  wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"]))