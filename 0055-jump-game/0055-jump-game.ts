function canJump(nums: number[]): boolean {
    // 지금 나의 위치가 최대 점프 길이와 동일하거나 작다면, 다음 프로세스를 실행할 수 있습니다.
    // 지금 나의 위치가 최대 점프 길이보다 크다면 모든 프로세스를 무시합니다.
    let maxJumpLength = 0;
    const lastIndex = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (i > maxJumpLength) {
            return false;
        }

        if (i + nums[i] >= lastIndex) {
            return true;
        }

        maxJumpLength = Math.max(maxJumpLength, i + nums[i]);
    }
};
