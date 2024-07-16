class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(); // initialize a set to hold unique numbers
        for (const num of nums) { // iterate through each num in the nums array
            if (set.has(num)) return true; // if the set already contains the num, return true (num appears more than once)
            set.add(num); // otherwise, add the num to the set
        }
        return false; // if no duplicates are found, return false
    }
  }
  
  class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}; // initialize an object to store seen numbers
        for (const num of nums) { // iterate through each num in the nums array
            if (obj[num]) return true; // if the num is already in the object (num key exists), return true (num appears more than once)
            obj[num] = true; // otherwise, add the num to the object (set a key to the num with the value true)
        }
        return false; // if no duplicates are found, return false
    }
  }
  
  