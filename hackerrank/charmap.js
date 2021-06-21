let str = '{{[[(())]]}}'

function isBalanced(s){
    let brackets = s.split('')

    let stack = []
    let pairs = {'{':'}', '[':']', '(':')'}

    for ( let i = 0; i < s.length; i++){

        let bracket = s.charAt(i)
        
        if ( bracket in pairs )
            stack.push(bracket)
        else if (stack.length == 0){
            return 'NO'
        }
        else{
            let matching = stack.pop()
            if (pairs[matching] != bracket)
                return 'NO'
        }

    }

    if (stack.length > 0)
        return 'NO'
    else
        return 'YES'

}

console.log( isBalanced(str))