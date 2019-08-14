# 最长回文子串

这道题可以采用二分法的思路来解决。

以长度进行二分，如果当前长度检测到回文串，则试探更大长度的回文串，否则便减小长度，寻找长度更小的回文串。同时在检测当前长度时，应该把当前长度+1的长度也检测一下，不然会出现覆盖不到的情况。

```javascript
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
```

