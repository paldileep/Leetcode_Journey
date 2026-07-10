/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max = 0
    let minPrice = Infinity
    
    for( let price of prices){
        if(price < minPrice){
            minPrice = price
        }else{ 
            let profit = price - minPrice
            max = Math.max(profit, max)
        }
    }

    return max
};