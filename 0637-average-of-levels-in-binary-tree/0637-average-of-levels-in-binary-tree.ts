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

function averageOfLevels(root: TreeNode | null): number[] {
    const result: number[] = [];
    let queue: TreeNode[] = [root];

    while (queue.length !== 0) {
        const average = queue.reduce((acc, cur) => acc + cur.val, 0) / queue.length;
        result.push(average);
        let nextLevels = [];

        while (queue.length !== 0) {
            const currentNode = queue.pop();

            if (currentNode.left) {
                nextLevels.push(currentNode.left);
            }

            if (currentNode.right) {
                nextLevels.push(currentNode.right);
            }
        }

        queue = [...nextLevels];
        nextLevels = [];
    }

    return result;    
};
