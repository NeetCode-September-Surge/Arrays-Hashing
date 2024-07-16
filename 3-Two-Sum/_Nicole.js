class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		const map = new Map();

		for (let i = 0; i < nums.length; i++) {
			const rest = target - nums[i];

			if (map.has(rest)) {
				return [map.get(rest), i];
			}
			map.set(nums[i], i);
		}
		return [];
	}
}

//map -> basically just an object
//map.has -> checks if map contains this key
//map.set -> if the value we checked for is NOT in the map, put
//current num and its index in the map
