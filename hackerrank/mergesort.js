/* Implement merge sort */
function msort(arr){
 
    if ( arr.length == 1)
        return arr;

    // Divide and conquer
    let middle = Math.round(arr.length/2)
    let left = arr.slice(0, middle)
    let right = arr.slice( middle)

    left = msort(left)
    right = msort(right)

    return merge(left, right)
}

// Merge, and return, two sorted arrays
function merge(left, right){
    let result = []

    while( left.length && right.length){

        let element;
        if (left[0] < right[0])
            element = left.shift()
        else
            element = right.shift()
        result.push(element)
    }

    // Remaining elements
    if (left.length)
        result = result.concat(left)
    else
        result = result.concat(right)

    return result;
}

// let merged = merge([1, 3, 8], [2, 6, 9])
// console.log( merged )


let sorted = msort([3, 4, 7,5, 6, 2, 1])
console.log( sorted)