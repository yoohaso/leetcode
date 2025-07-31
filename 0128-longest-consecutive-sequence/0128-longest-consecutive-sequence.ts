function longestConsecutive(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const numsSet = new Set(nums);
    let count = 1;
    let result = 0;

    if (numsSet.size === 1) {
        return 1;
    }
    
    for (const num of numsSet) {
        if (!numsSet.has(num + 1)) {
            result = Math.max(count, result);
            count = 1;
        } else {
            count++;
        }
    }

    return result;
};