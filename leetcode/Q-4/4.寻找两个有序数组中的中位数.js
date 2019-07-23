/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length;
    let n=nums2.length;
    if(m>n) return findMedianSortedArrays(nums2,nums1);
    /* 设置临界条件 */
    nums1[-1]=nums2[-1]=-Infinity;
    nums1[m]=nums2[n]=Infinity;
    /* ～～可以对正数进行取整，对负数会进一 */
    let low=0,high=m,half=~~((m+n+1)/2);
    while(low<=high){
        let i = ~~(low - (low-high)/2);
        let j = half - i;
        if(i<high && nums2[j-1]>nums1[i]){  //j太大，通过增大i来减小j
            low = i+1;
        } else if(i>low && nums1[i-1] > nums2[j]){  //i太大，减小i
            high = i-1;
        } else {    //i、j满足条件，判断m+n奇偶性
            if((m+n)%2==1){
                return Math.max(nums1[i-1],nums2[j-1]);
            } else {
                return (Math.max(nums1[i-1],nums2[j-1])+Math.min(nums1[i],nums2[j]))/2;
            }
        }
    }
    return 0;
};