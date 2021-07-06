function lengthOfLongestSubstringKDistinct(s, k){
    let max =0;
    for ( let i = 0; i < (s.length - max); i++){
        let length = windowLength( s.slice(i), k)
        max = Math.max(length, max)
    }
    return max;
}

// TODO: DOC
function windowLength(s, k){
    let set = new Set();

    let ctr = 0;

    for ( let i = 0; i < s.length; i++ ){
        set.add( s.charAt(i))
        if ( set.size > k )
            return ctr;
        else ctr++
    }

    return s.length;

}

let ans = lengthOfLongestSubstringKDistinct('eceba', 2)
console.log( ans )