function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums);
    let result = 0;

    for (const num of numsSet) {
        if (!numsSet.has(num - 1)) {
            let currentNum = num;
            let count = 0;

            while (numsSet.has(currentNum)) {
                currentNum++;
                count++;
            }

            result = Math.max(result, count);
        }
    }

    return result;
};