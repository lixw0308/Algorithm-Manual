/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let res=triangle.length>0?triangle.pop():[0];
  triangle.reduceRight((acc,item)=>item.forEach((s,i)=>res[i]=s+Math.min(res[i+1],res[i])),[]);
    return res[0];
};