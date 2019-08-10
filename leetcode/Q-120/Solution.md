# 三角形最小路径和

题目接收一个数字三角形（二维数组形式），然后输出一个数，代表三角形从最上方（0，0）到最下层的一个元素（m，n）的路径和最小的数，同时提示我们如果空间复杂度可以为O(n)。

初看该题，脑海中是回溯的想法，深度优先搜索，从起点开始，一直向下搜索，最终走到最下层，使得路径和最小。大致思路就是，以当前元素i为起点的最小路径和等于i下方的两个元素的路径和较小者加上i本身，

即`mini[i,j]=triangle[i][j]+Min(mini[i+1,j],mini[i+1,j+1])`，代码如下：

```javascript
function searchMin(triangle,i,j,sum){
        if(i>=triangle.length||j>=triangle[i].length) return 0;
        return sum+triangle[i][j]+Math.min(searchMin(triangle,i+1,j,sum),searchMin(triangle,i+1,j+1,sum));
}
```

中间可以加一个缓存数组来记录已经调用过的值来加速搜索，但是这样递归的算法并不是最好，即超过了空间要求，时间上也会超时。

**最优解**

最优解便是结合动态规划的思想并且采用递推的形式，我们定义的dp方程依然为

`mini[i,j]=triangle[i][j]+Min(mini[i+1,j],mini[i+1,j+1])`，代表的含义为以（i，j）为起点的路径和，递推方程也是不变，但是这次我们从最下层开始，依次向上迭代，这样时间复杂度只需要O(m*n)，空间复杂度也一样，用一个二维数组来保存结果，最终结果为`mini[0][0]`，但是我们注意到，题目提到了O(n)的空间复杂度，也就意味着，可以用一维数组来保存递推结果。

仔细想想，我们的输入是一个三角形，最下层的元素也是最多的，同时，我们递推的起点也是最下层的所有元素，接下来从倒数第二层开始，每个递推新元素便是下方和右下方的元素，那么，我们完全可以用一维数组来代替二维数组，同时为了避免被新值影响，我们从数组左边开始递推，这样右边的值永远是上一次的旧值，这样我们的空间复杂度也就降到了O(n)。

完整代码如下：

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let res=triangle.length>0?triangle.pop():[0];
  triangle.reduceRight((acc,item)=>item.forEach((s,i)=>res[i]=s+Math.min(res[i+1],res[i])),[]);
    return res[0];
};
```

