# Z字形变换

这道题让把输入的字符串排列成给定行高的侧立的Z字形，其实，应该是N形。

乍一看，感觉无所头绪，在那里找规律，试图突破自己的能力去用一种规律来便利字符串找到答案，但是显然高估了自己，规律是有的，没太看出来。

退而其次，想用朴素模拟的方式，就是一个字符一个字符的把N摆出来，然后再按行链接起来即可。

建一个数组，初始值都为空串，每个元素便代表对应行，我们遍历给定串，用一个row变量标记当前行，拼接对应行的字符串，宏观上来看，我们遍历顺序便是走一个N字，最后将数组组合成字符串就是所求解了。
代码如下：

```javascript
var convert = function(s, numRows) {
    if(numRows <2 || s.length <2) return s;
    let res=new Array(numRows).fill('');
    let row=0,
        down=false;	//再第一行和最后一行，要变向
    for(let i of s){
        res[row]+=i;
        if(row === 0 || row === numRows-1) down=!down;
        row+=down?1:-1;
    }
    return res.join('');
};
```