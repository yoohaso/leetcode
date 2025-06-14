/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let prevNode: TreeNode | null = null;
    let minDiff = Infinity;

    function dfs(currentNode: TreeNode | null) {
        if (!currentNode) {
            return;
        }

        if (prevNode !== null) {
            const diff = Math.abs(prevNode.val - currentNode.val);
            minDiff = Math.min(minDiff, diff);
        }

        prevNode = currentNode;
        
        dfs(currentNode.left);
        dfs(currentNode.right);
    }

    dfs(root);

    return minDiff;
};
