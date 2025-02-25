function removeElement(nums: number[], val: number): number {
    const mark = 1000;
    let leftPointerIndex = 0;
    let rightPointerIndex = nums.length -1;

    while (leftPointerIndex <= rightPointerIndex) {
        if (nums[leftPointerIndex] === val) {
            nums.splice(leftPointerIndex, 1, mark);
        }

        if (nums[rightPointerIndex] === val) {
            nums.splice(rightPointerIndex, 1, mark);
        }

        leftPointerIndex++;
        rightPointerIndex--;
    }

    return nums.sort((a, b) => a - b).filter(num => num !== mark).length;
};