function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hash = {};
    let result = false;

    for (let i = 0; i < nums.length; i++) {
        const integer = nums[i];

        if (hash[integer] === undefined) {
            hash[integer] = i;
        } else {
            hash[integer] = Math.abs(hash[integer] - i);
            
            if (hash[integer] <= k) {
                return true;
            } else {
                hash[integer] = i;
            }
        }
    }

    return false;
};