# 寻找两个有序数组中的中位数

题目要求时间复杂度为log(m+n)，m和n分别为两个数组的长度。一般来说，看到log，那么应该就会想到分治法，尤其是二分法。

题目需要寻找中位数，先来看看中位数是什么：

> 中位数将一个集合划分为两个长度相等的子集，且其中一个子集中的元素总是大于另一个子集中的元素。

找中位数，首先得得让数组有序，一般是升序。

这段文字的意思是，一个数组A[0…m]的中位数midA=A[i]，可以将数组划分为两个子数组，并且:

```javascript
left[0…i-1].length === right[i…m-1].length

left[i-1] <= right[i]
```

因为数组升序，所以左边划分的数组最大元素是`left[i-1]`，右边数组最小元素是`right[i]`。

同理，我们对于数组B[0…n]，设其中位数midB=B[j]，也有：

```javascript
left[0…j-1].length === right[j…n-1].length

left[j-1] <= right[j]
```

我们将，两个数组合并（虽然此时中位数的下标为i、j，但是我们划分的位置是i和i+1的中间），有：

```javascript
			left_part			|			right_part			
A[0],A[1],...,A[i-1]|A[i],A[i+1],...,A[m-1]
B[0],B[1],...,B[j-1]|B[j],B[j+1],...,B[n-1]
```

因为A、B都为升序排列，一定有`A[i-1]<A[i] && B[j-1]<B[j]`；若有：

```javascript
left_part.length === right_part.length
Max(A[i-1],B[j-1]) <= Min(A[i],B[j])
```

则此时的i、j便是我们想要的A、B数组的各自中位数的下标，且：

```javascript
n <= m
i+j == m-j+n-j+1  => j = (m+n+1)/2-j
A[i-1] < B[j] && B[j-1] < A[i] 
```

此时就能确定所求解：

- m+n 为奇数，`midNum = Max(A[i-1],B[j-1])`
- m+n 为偶数，`midNum = (Max(A[i-1],B[j-1])+Min(A[i],B[j]))/2`

这时，也存在有两种临界条件：

- `i == 0 `或者`j == 0`，说明A/B太小了，到了另一个数组的最左边，方便比较，我们可以认为是最小数
- `i == m`或者`j == n`，说明A/B太大了，到了另一个数组的最右边，方便比较，我们可以认为是最大数

此时我们直接求解便成了对数组的越界处理，但是对于`javascript`语言来说，我们可以做一个小小的改变就可以不用考虑临界条件：

- 设置`A[-1]=-Infinity`,因为在JS里，数组也是个对象，可以给其添加属性。我们单独设置一个-1的key，它的值为最小数，这样就可以避免`A[0-1]`时值为`undefined`
- 由于我们二分中，不会再需要数组的长度，所以我们大可以在取得m、n之后，设置`A[m]=Infinity`

当不满足时，有以下情况：

- `A[i-1]>B[j]`，说明我们的`i`找大了，需要减小`i`
- `B[j-1]>A[i]`，说明我们的`j`找大了，需要减小`j`

之后，我们便可以确定基本的求解思路：

S1：设置low=0,high=m，进入循环low<high，每次都设i=(low+high)/2,j=(m+n+1)/2-i

S2：若`A[i-1]<B[j]&&B[j-1]<A[i]`，判断m+n奇偶情况取得解，跳出。

S3：若`i>low && A[i-1]>B[j]`，i大了，执行`high=i-1`来在下次循环中缩小i，继续下一次循环

S4：若`i<high && B[j-1]<A[i]`，j大了，执行`low=i+1`来在下次循环中增大i，以便缩小j，继续下一次循环

**以下是最终代码**

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    if(m>n) return findMedianSortedArrays(nums2,nums1);
    nums1[-1]=nums2[-1]=-Infinity;
    nums1[m]=nums2[n]=Infinity;
    let low=0,high=m,half=~~((m+n+1)/2);
    while(low<=high){
        let i = ~~(low - (low-high)/2);
        let j = half - i;
        if(i<high && nums2[j-1]>nums1[i]){
            low = i+1;
        } else if(i>low && nums1[i-1] > nums2[j]){
            high = i-1;
        } else {
            if((m+n)%2==1){
                return Math.max(nums1[i-1],nums2[j-1]);
            } else {
                return (Math.max(nums1[i-1],nums2[j-1])+Math.min(nums1[i],nums2[j]))/2;
            }
        }
    }
    return 0;
};
```

