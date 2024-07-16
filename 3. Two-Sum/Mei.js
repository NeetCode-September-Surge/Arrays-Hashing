class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
      for (let i = 0; i < nums.length; i++) { // iterate through each element in the nums array
          for (let j = i + 1; j < nums.length; j++) { // iterate through the elements after the current element i
              if (nums[i] + nums[j] === target) return [i, j]; // if the sum of nums[i] and nums[j] equals the target, return the indices [i, j]
          }
      }
      return []; // return an empty array if no such pair is found, num[i] + num[j] never equals the target 
  }
}
