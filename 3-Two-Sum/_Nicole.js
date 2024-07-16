class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		const map = new Map(); //create a new map

		for (let i = 0; i < nums.length; i++) { //loop
			const rest = target - nums[i]; //calculate the remaining from target

			if (map.has(rest)) { //if the map has the remaining value
				return [map.get(rest), i]; //return an array with the value associated with 'rest' in 'map' and the current index 'i'
			}
			map.set(nums[i], i); //otherwise add the current element 'nums[i]' and its index 'i' to the 'map'
		}
		return []; //if none of that happens return an empty array
	}
}

//map -> basically just an object
//map.has -> checks if map contains this key
//map.set -> if the value we checked for is NOT in the map, put
//current num and its index in the map
