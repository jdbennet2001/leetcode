// Permutations

function permute(nums){

    if (nums.length == 1)
        return nums;

    let results = []

    nums.forEach( num => {
        let rest = nums.filter( x => {return x != num} )
        let suffixes = permute(rest);
        suffixes.forEach(suffix =>{
            results.push( [num].concat(suffix))
        })
    })

    return results;

}

let output = permute( [1])
console.log( output )