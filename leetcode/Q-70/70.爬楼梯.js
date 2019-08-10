/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<4) return n;
    let f1=2,f2=3;
    for(let i=4;i<=n;i++){
        [f2,f1]=[f1+f2,f2];
    }
    return f2;
};