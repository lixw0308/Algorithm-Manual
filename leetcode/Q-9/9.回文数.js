/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0 || x!=0 && x%10 == 0) return false;
    let r=0;
    while(x>r){
        r=r*10+x%10;
        x= (x/10)|0;
    }
    return x === r || x === (r/10 | 0);
};