/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const targetDiffIndex = hash[target - nums[i]];

        if (typeof targetDiffIndex === 'number') {
            return [targetDiffIndex, i];
        }

        hash[nums[i]] = i;
    }
};