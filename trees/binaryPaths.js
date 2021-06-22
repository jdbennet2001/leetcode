function binaryPaths(root){

    let paths = []

    function traverse(path, node){

        // Base case, nowhere left to walk
        if ( !node.left && !node.right ){
            let trail = path.push(node.val)
            return paths.push(trail)
        }

        path = path.concat(node.val)

        if ( node.left )
            traverse( path, node.left)
        
        if ( node.right)
            traverse(path, node.right)
            
    }

    return traverse([], root)

}

let paths = binaryPaths(root);