var nextGreaterElement = function(nums1, nums2) {
    let hash = {}
    // Look up table for target array
    for ( let i = 0; i < nums2.length; i++){
        let val = nums2[i];
        hash[val] = i;
    }

    //Map nums1 to target array
    let indices = nums1.map( num =>{
        let pos = hash[num]
        let val = next(nums2, pos)
        return val;
    })

    return indices;
};

//todo document
function next(arr, index){

    let value = arr[index];
    for( let i = index +1; i < arr.length; i++){
        if ( arr[i] > value )
            return arr[i]
    }
    return -1;

}

// let pos = next([1,2,3,4], 3);
// console.log( pos )

// let ans = nextGreaterElement([2,4], [1,2,3,4])
let ans = nextGreaterElement( [4,1,2], [1,3,4,2])
console.log( ans )