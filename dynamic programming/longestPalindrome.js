var longestPalindrome = function(str) {

    let answer = str.charAt(0)

    // Return the longest palindrome for a given string
    function palindrome(str){
        
        if (str.length == 1 )
            return str;
            
    }

    for ( let i = 0; i < str.length; i++ ){
        let candidate = str.slice( i)
        let p = palindrome(candidate)
        answer = (answer.length < p.length) ? p : answer
    }

    return answer;

}

let soln = longestPalindrome("babad")
console.log( soln )