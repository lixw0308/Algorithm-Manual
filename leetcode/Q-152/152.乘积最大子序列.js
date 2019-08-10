/**
 * @param {number[]} nums
 * @return {number}
 */
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