//Implement multiplaction with recursio

function mult( number, n){

    function add(number, n){
        if (n == 0)                         // Base case
            return 0    

        return number + add(number, n-1);   // Recursive case
    }

    return add(number,n)
}

console.log( mult(5, 4))