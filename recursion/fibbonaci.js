function fibbonaci(count){

    let hash = {}

    function calculate(ctr){

        if ( ctr == 1 || ctr == 0)      //Base condition
            return 1                

        if (ctr in hash)                // Dynamic programming, use a hash to avoid duplicate caculation
            return hash[ctr]

        let ans =  hash[ctr] = calculate(ctr-1) + calculate(ctr-2)
        console.log( `${ctr} => ${ans}`)
        return ans;

    }

    return calculate(count) //N.B. Zero based indexing

}


let answer = fibbonaci(5);
console.log( answer )