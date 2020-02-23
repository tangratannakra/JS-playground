var isUnivalTree = function (root) {
    return walker(root, root.val);
};

function walker(root, val) {
    if (!root) return true;
    if (root.val != val) return false;


    if (!walker(root.left, val) || !walker(root.right, val)) {
        return false;
    }

    return true;
}