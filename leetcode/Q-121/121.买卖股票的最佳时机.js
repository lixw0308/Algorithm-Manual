/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length<=0) return 0;
    let res=0,min=prices[0];
    for(let i=1;i<prices.length;i++){
        if(min>prices[i]){
            min=prices[i];
        } else if(prices[i]-min > res){
            res=prices[i]-min;
        }
        
    }
    return res;
};