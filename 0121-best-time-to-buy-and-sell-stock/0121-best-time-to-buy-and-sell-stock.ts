function maxProfit(prices: number[]): number {
    // 최대이익 반환 (판매가 - 구매가)
    // 구매일은 항상 판매일 이전
    let minPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - minPrice)
        minPrice = Math.min(minPrice, prices[i]);
    }

    return profit;  
};