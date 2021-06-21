// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
function is_valid(root){

    if ( !root )
        return true;

    let val = (root.val===undefined ? 0 : root.val)
    let left = (root.left===undefined ? null : root.left)
    let right = (root.right===undefined ? null : root.right)

    if ( left && left.val > val)
        return false;

    if (right && right.val < val)
        return false;

    return is_valid(left) && is_valid(right)

}