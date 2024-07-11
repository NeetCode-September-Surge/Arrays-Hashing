class Solution {
	/**
	 * @param {number[]} nums
	 * @return {boolean}
	 *
	 * Data Structures: Set
	 *
	 * Algorithms:
	 * - Create a set of the nums array
	 * - retrun the length of Set is not equal to the length of nums. What's the length of Set (set.size)
	 *
	 *
	 */

	hasDuplicate(nums) {
		return nums.length !== new Set(nums).size; // if the nums.length does not equal to the new Set of nums. Use .size to get the number of elements inside the Set.
	}

	hasDuplicate(nums) {
		const set = new Set(nums); // create a new Set of the nums array -- 0(n)
		if (set.size != nums.length) {
			// if the set.size(length) does not equal to nums.length --
			return true; // return true
		} else return false; // else return false
	}

	hasDuplicate(nums) {
		const set = new Set(nums); // create a new Set of the nums array -- 0(n)
		return set.size !== nums.length; // return if the set.size does not equal to nums.length -- 0(1) & 0(1)
	}
}
