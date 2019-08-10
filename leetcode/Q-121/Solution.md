# 买卖股票的最佳时机

这道题目有很多后续题目，所有题目汇总起来可以用一个范型的动态规划来解决，但是这道题目是所有该系列中最简单的，所以可以直接用技巧来解答。

最大利润=后续股价-最低股价 || 0 ； 

我们可以用一个变量来不断获取最小值，如果当前值比最小值大，那我们就更新最大利润。

这个解法的依据就是画图，将输入的情况绘制在坐标系中，会看到一个最小点和最大点，最大利润就是两者的差值。代码如下：

```javascript
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
```

