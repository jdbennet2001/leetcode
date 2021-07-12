var intersection = function(nums1, nums2) {
    
    let hash = {}
    nums1.forEach(element => { hash[element] = true; });

    let result = {}
    nums2.forEach(element => {
        if (hash[element]) result[element] = true;
    })

    return Object.keys(result)

};

let result = intersection([4,9,5], [9,4,9,8,4])
console.log( result)