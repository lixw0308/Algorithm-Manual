# 乘积最大子序列

这道题需要返回一个子序列最大的乘积，子序列必须连续。对于乘积，有两个情况，正数x正数，肯定大，负数*负数，也会变成正数。所以我们不能只考虑正数相乘的情况，还要考虑当前为负数，如果再乘以一个负数之后，是最大乘积的情况。

这道题同样也可以应用动态规划，定义状态dp[i]为当前包含nums[i]在内的最大乘积，由于要区分正负两种情况，我们需要定义两个维度来表示，每次先判断nums[i]的正负，如果为负，我们交换所保存的最大和最小的两个数（因为，正负相乘肯定更小），之后我们取`Max(dp[i-1].max*nums[i],nums[i])`和`Min(dp[i-1].min*nums[i],nums[i])`，同时用一个变量标示当前最大的值，最后的结果就是dp[n].max和res的较大者。

由于我们每次只需要迭代上一次的结果，我们可以把数组变成两个变量来存储结果(分别表示正负两个数)。代码如下：

```javascript
var maxProduct = function(nums) {
    let res=-Infinity;
    let cmax=cmin=1;
    nums.forEach(num=>{
       if(num<0){
           [cmax,cmin]=[cmin,cmax];
       } 
        cmax = Math.max(cmax*num,num);
        cmin = Math.min(cmin*num,num);
        res=Math.max(res,cmax);
    });
    return res;
};
```

