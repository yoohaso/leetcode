function longestConsecutive(nums: number[]): number {
    const numsSet = new Set(nums);
    
    // 하나 작거나 하나 큰 수가 있으면 두고, 없으면 제거
    for (const num of numsSet) {
        if (numsSet.size === 1) {
            return 1;
        }

        if (numsSet.has(num + 1) || numsSet.has(num - 1)) {
            continue;
        } else {
            numsSet.delete(num);
        }
    }

    return numsSet.size;
};