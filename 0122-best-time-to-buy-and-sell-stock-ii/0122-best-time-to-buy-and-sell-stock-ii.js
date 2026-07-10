/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If the price went up from yesterday, grab the profit immediately!
        if (prices[i] > prices[i - 1]) {
            totalProfit += prices[i] - prices[i - 1];
        }
    }
    return totalProfit;
};