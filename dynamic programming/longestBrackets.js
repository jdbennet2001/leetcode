
function path(str){

    let semaphore = 0;
    let distance = 0;   // # of chars in valid expression
    for (let i = 0; i < str.length; i++){

        let ch = str.charAt(i)
        if ( ch == '(')
            semaphore++;
        else if ( semaphore == 0 )
            return distance;
        else 
            semaphore--;

        if (semaphore == 0)
            distance = i+1;
    }

    return distance;

}

function longestBracket(s){

    let max = 0;

    for ( let i = 0; i < s.length; i++){
        let string = s.substring(i); 
        let length = path(string)
        max = Math.max(length, max)

        //Knuth... skip ahead when we've parsed a given block
        i = i + length
    }

    return max

}

//console.log( path('()(()') )

let brackets = "())())))))))))()(()))(()))())(()))()))(((())))()))(((())()())()(()))(()((())))((()(())))(())(()()))))())((())())))()()(()))())(((())((()((()(()()))(()(()((()())((())(()(()((((())())()(()()()"

console.log( longestBracket(brackets) )



// let len = longestBracket(")()())");