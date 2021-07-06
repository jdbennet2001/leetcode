function simplifyPath(path){

    let stack = []

    let path_tokens = path.split('/')
    path_tokens.forEach( token => {
        if ( token == '..')
            stack.pop();
        else if (token && token != '.')
            stack.push(token)
    })

    // console.log( JSON.stringify(stack) )

    return `/${stack.join('/')}`

}

let ans = simplifyPath("/a/./b/../../c/")
console.log( ans )