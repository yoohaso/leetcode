function majorityElement(nums: number[]): number {
    const numTable = {};
    const majorityNumber = nums.length / 2;

    for (const num of nums) {
        if (!numTable[num]) {
            numTable[num] = 1;
        } else {
            numTable[num]++;
        }

        if (numTable[num] > majorityNumber) {
            return num;
        }
    }
};