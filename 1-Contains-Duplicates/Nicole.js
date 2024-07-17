class Solution {
	/**
	 * @param {number[]} nums
	 * @return {boolean}
	 */
	hasDuplicate(nums) {
		const set = new Set(); //create a new set

		for (const num of nums) { //loop through the array
			if (set.has(num)) return true; //if the set contains the num return true 
			set.add(num); //add num to the set 
		}
		return false; //if not, return false
	}
}
