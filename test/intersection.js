var arraysIntersection = function(arr1, arr2, arr3) {
    
    let freq = {}
    arr1.forEach( item => { freq[item] = freq[item] ? freq[item] + 1 :1 })
    arr2.forEach( item => { freq[item] = freq[item] ? freq[item] + 1 :1 })
    arr3.forEach( item => { freq[item] = freq[item] ? freq[item] + 1 :1 })

    let keys = Object.keys(freq).filter( key => {
        return freq[key] == 3
    })

    return keys;
};

let arr1 = [1,2,3,4,5];
let arr2 = [1,2,5,7,9] 
let arr3 = [1,3,4,5,8]

let intersection = arraysIntersection(arr1, arr2, arr3)
console.log( intersection )