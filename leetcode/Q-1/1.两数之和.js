/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let exist = {};
    for (let i = 0; i < nums.length; i++) {
        if (exist[target - nums[i]] !== undefined) {
            return [exist[target - nums[i]], i];
        }
        exist[nums[i]] = i;
    }
};

