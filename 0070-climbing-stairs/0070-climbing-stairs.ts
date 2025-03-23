function climbStairs(n: number): number {
    const climbWays = [1, 1];

    for (let i = 2; i <= n; i++) {
        climbWays[i] = climbWays[i - 2] + climbWays[i - 1];
    }

    return climbWays[n];
};
