function closestValue(root, target) {
    
    let value = root.val;
    let distance = Math.abs(value - target)
    

    function traverse(node){

        let delta = Math.abs(node.val - target);

        if ( delta < distance ){
            value = node.val;
            distance = delta;
        }

        if ( node.left)
            traverse(node.left)

        if ( node.right)
            traverse(node.right)
    }

    traverse(root)

    return value;

}


let ans = 