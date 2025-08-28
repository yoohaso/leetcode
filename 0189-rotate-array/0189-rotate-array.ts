/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const step = k % nums.length;
    const toRotateNums = nums.splice(nums.length - step, step);
    nums.unshift(...toRotateNums);
};
