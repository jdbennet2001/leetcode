// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)

/*
 Check if a given tree is a valid binary tree.
 

 */
function is_valid(root){

    if ( !root )
        return true;

    let val = Math.min;

    let is_Valid = true;

    function traverse(node){
    
        if ( node.left )
            traverse(node.left)

        if (node.val > val){
            val = node.val;
        }
        else{
            is_Valid = false;
            return false;
        }
    
        if ( node.right)
            traverse(node.right)
        
    }

    traverse(root);

    return is_Valid


}