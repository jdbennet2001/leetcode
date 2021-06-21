//
function insertionSort(n, arr){

    for ( let i = 1; i < n; i++){
        let start = arr.slice(0,i)
        let element = arr[i]
        let end = arr.slice(i+1)
        arr = sort(start, element).concat(end)
    }

    return arr;

}

// Move an array element from i1 to i2
function sort( arr, value){

    for ( let i = 0; i < arr.length; i++){
        if ( value < arr[i]){
            arr.splice(i,0,value)
            return arr;
        }
    }

    // Add item to end of array, and return
    arr.push(value)
    return arr;

}

// let result = sort([1, 3, 4], 2)
// console.log( result )

 let sorted = insertionSort(7, [3, 4, 7,5, 6, 2, 1])
 console.log( sorted )