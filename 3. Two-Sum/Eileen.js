//leetcode | two sum by eileen
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//first try: not great | 448ms runtime
var twoSum = function (nums, target) {
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        // console.log(`int at idx ${i}:`, nums[i]);
        let y = nums.findIndex((int, idx) => idx !== i && int + nums[i] === target);
        if (y !== -1) {
            indices.push(i, y);
            break;
        }
    }
    return indices;
};

//alt solution
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let y = nums.findIndex((int, idx) => idx !== i && int + nums[i] === target);
        if (y !== -1) {
            return [i, y] //slightly less memory to store
        }
    }
};