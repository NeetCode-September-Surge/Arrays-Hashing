//leetcode | contains duplicates by eileen
/**
 * @param {number[]} nums
 * @return {boolean}
 */

//first try: thought process
var containsDuplicate = function(nums) {
    const unique = [...new Set(nums)];
    // console.log(nums, nums.length)
    // console.log(unique, unique.length)
    // console.log(unique, unique.size)
    // sets will take out any duplicate values
    // set size will be smaller than orig
    // console.log(4 !== 4)
    // console.log(nums.length !== 4)
    // console.log(nums.length !== unique.size)
    return nums.length !== unique.length;
    // return nums.length !== new Set(nums).size
    // if true, means that the lengths are diff meaning there is a duplicate
    // if false means the lengths are the same aka there are no duplicates
}

//alt solution: thought process
var containsDuplicate = function(nums) {
    // console.log('orig:', nums);
    const numsSet = new Set(nums);
    // console.log('set', numsSet)
    // console.log(numsSet.size)
    return numsSet.size !== nums.length;
};


//code without comments | 79ms runtime
var containsDuplicate = function(nums) {
    return nums.length !== new Set(nums).size;
}