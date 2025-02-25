/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let leftPointerIndex = 0;
    let rightPointerIndex = nums.length -1;

    while (leftPointerIndex <= rightPointerIndex) {
        if (nums[leftPointerIndex] === 0) {
            nums.splice(leftPointerIndex, 1);
            nums.push(0);
        } else {
            leftPointerIndex++;
        }

        if (nums[rightPointerIndex] === 0) {
            nums.splice(rightPointerIndex, 1);
            nums.push(0);
            rightPointerIndex--;
        }
    }
};