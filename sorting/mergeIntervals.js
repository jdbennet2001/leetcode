function merge(intervals){

    function start(arr){
        return arr[0]
    }
    
    function end(arr){
        return arr[1]
    }
    
    //TODO: Document this, merge into parent scope
    function join(arr1, arr2){
        let lower = Math.min( start(arr1), start(arr2) )
        let upper = Math.max( end(arr1), end(arr2) )
        return [lower, upper]
    }

    // Sort by first element
    let elements = intervals.sort( (a,b) => {
        return a[0] - b[0]
    })

    let stack = []
    let current;

    elements.forEach(interval => {
        if ( current == undefined)
            current = interval;
        else if ( start(interval) >= start(current) && start(interval) <= end(current))
            current = join( current, interval )
        else{
            stack.push(current)
            current = interval
        }

    })

    stack.push(current)
    return stack;

}



// let m1 = merge([[1,4], [2,5], [7,9]])
// console.log( JSON.stringify(m1) )

let ans = merge( [[1,3],[2,6],[8,10],[15,18]] )
console.log( JSON.stringify(ans) )
