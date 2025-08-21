/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const step = nums.length > k ? k : k % nums.length;
    const toMoveFowardNums = nums.splice(nums.length - step, step)
    nums.unshift(...toMoveFowardNums);
};
