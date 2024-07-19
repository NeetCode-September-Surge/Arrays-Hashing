/**
  Time: O(n) linear, only one loop, function runs n number of times

  Space: O(n) only using the length of nums array
   */

var twoSum = function(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {

        const diff = target - nums[i];

        if(map.has(diff)) {
            return [map.get(diff), i];
        } else {
            map.set(nums[i], i);
        }
    }
};

// Alternative solution same thing different look
  var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i ++) {

        const diff = target - nums[i];

        if(map[diff] !== undefined){
            return [map[diff], i]
        } else {
            map[nums[i]] = i;
        }
    }
};