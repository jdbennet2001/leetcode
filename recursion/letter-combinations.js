let keypad = {
    '2' : ['a', 'b', 'c'],
    '3' : ['d', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : [ 'j', 'k', 'l'],
    '6' : ['m', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z']
}

function letterCombinations (digits) {
    
    if (digits.length == 0)
        return []

    let keys = digits.split('')
    let codes = combinations(keys)
    return codes
}

function combinations(digits){

    if (digits.length == 0)
        return ['']

    let digit = digits.shift()
    let chars = keypad[digit]
    let suffixes = combinations(digits)

    let results = [];
    chars.forEach(char => {
        suffixes.forEach( suffix =>{
            results.push(char.concat(suffix))
        })
    })
    return results;

}

let output = letterCombinations('23')
console.log( output )