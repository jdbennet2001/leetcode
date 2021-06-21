// Move disks from source to destination using a buffer
function move(from, to, spare){

    function shift(count, from, to, spare){

        if ( count == 1 ){       // Base case (source.length == 0)?
            console.log( `${from} ==> ${to}`)
            let disk = from.pop();
            return to.push(disk)
        }


        shift( count-1, from, spare, to)
        shift( 1, from, to, spare)
        shift(count -1, spare, to, from )

        return {from, to, spare}

    }

    let ans = shift(from.length, from, to, spare)
    return ans;

}


let {from, to, spare} = move([1,2,3,4], [], [])

console.log(`Complete ${to}` )