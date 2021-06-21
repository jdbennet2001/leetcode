function is_palindrome(str){

    function check(chars){

        if (chars.length == 1 || chars.length == 0)         // Base case
            return true;
        
        let start = chars.shift()                           // Logic + recursion
        let end = chars.pop()

        console.log( `${start}, ${end} => ${chars}`)

        return (start == end) && check(chars)
    }

    return check(str.toLowerCase().split(''))                             // Preperation

}


console.log( is_palindrome('tattarrattat'))