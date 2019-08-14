/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows <2 || s.length <2) return s;
    let res=new Array(numRows).fill('');
    let row=0,
        down=false;
    for(let i of s){
        res[row]+=i;
        if(row === 0 || row === numRows-1) down=!down;
        row+=down?1:-1;
    }
    return res.join('');
};