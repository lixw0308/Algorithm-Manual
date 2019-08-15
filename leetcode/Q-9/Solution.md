# 回文数

这道题让判断一个数字是不是回文数。

首先可以排除所有负数；其次可以排除末尾是0的且自身不为0的数。

剩下的就是可以将其转为字符串，然后用判断回文数的方式来判断。

代码如下：

```javascript
var isPalindrome = function(x) {
    if(x<0) return false;
    let s = x+'';
    let i=0,j=s.length-1;
    while(i<j){
        if(s[i]!=s[j]) return false;
        i++;
        j--;
    }
    return true;
};
```

同时，在进阶中，让我们直接用数字来判断，而不是转为字符串。

思路就是将一个数字截取一半，然后判断跟另一半是否相等。我们可以通过模10来取最后一位，然后加到新数上。同时，我们可以判断当原数小于新数时，就截取一半了。

但是对于js来说，除10会有小数，所以还有个取整的过程，整个速率反而可能会下降。

代码如下：

```javascript
var isPalindrome = function(x) {
    if(x<0 || x!=0 && x%10 == 0) return false;
    let r=0;
    while(x>r){
        r=r*10+x%10;
        x= (x/10)|0;
    }
    return x === r || x === (r/10 | 0);
};
```

