class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		let result = []; //create variable to store the final values
		for (let i = 0; i < nums.length; i++) {
			// for loop
			let pair = target - nums[i]; // let value equal to target minus first index of num
			if (nums.includes(pair, i + 1)) {
				// if nums.includes(value, i + 1 (makes sure it is not the same element / in the remaining array)
				result.push(i); // push the index (i)
				result.push(nums.findLastIndex((num) => num === pair)); // push the last index with the value of the element that is needed.
				break; // break used to stop the for loop
			}
		}
		return result; // return result
	}
}
