/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = '';
    let long = 0;
    for (let i = 0, l = s.length; i < l; i++) {
        if (res.indexOf(s[i]) < 0) {
            res += s[i];
        } else {
            res = res.slice(res.indexOf(s[i]) + 1) + s[i];
        }
        long = long > res.length ? long : res.length;
    }
    return long;
};