/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
   return [...nums, ...nums] //spread elements of the array into a new array. do it twice
};
