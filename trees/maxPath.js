function maxPathSum(node){

    let max = Math.min;

    // Let's do a post order traversal of the tree
    function traverse(node){

        if ( !node )            // Base case
            return 0;

        let left = traverse(node.left)
        let right = traverse(node.right)

        let tree_value =  left + right + node.val;
        max = Math.max(max, tree_value);

    }

    traverse(node)

    return max;

}

