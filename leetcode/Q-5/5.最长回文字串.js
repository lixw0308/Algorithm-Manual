/**
 * @param {string} s
 * @return {string}
 */
function checkPalindrome(str){
    let l = str.length-1;
    let i=0;
    while(i<l){
        if(str[i++]!=str[l--]){
            return false;
        }
    }
    return true;
}
var longestPalindrome = function(s) {
    let len = s.length;
    if(len<2) return s;
    let l=0;
    let h = len;
    let res='';
    while(l<=h){
        let mid = (l+h)>>1;
        let find=false;
        for(let i=0;i<len-mid+1;i++){
            if(checkPalindrome(s.slice(i,i+mid))){
                find=true;
                ans=s.slice(i,i+mid);
                break;
            }
        }
        for(let i=0;i<len-mid;i++){
            if(checkPalindrome(s.slice(i,i+mid+1))){
                find=true;
                ans=s.slice(i,i+mid+1);
                break;
            }
        }
        if(find){
            l=mid+1;
        }else {
            h=mid-1;
        }
    }
    return ans;
};