class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 *
	 * Problem:
	 * Input: String & String
	 * Output: Boolean
	 * Simplify - check if the letters inside inside of the first string is the same as the seccond string, essentially if they are anagrams.
	 *
	 * Data Structures: Object
	 *
	 * Algorithms:
	 * - convert first string into array
	 * - convert second string ito array
	 * - compare each index from the first array to the second array
	 *  - if it is not true, return false
	 *  - else return true
	 */
	isAnagram(s, t) {
		const sArray = s.split("").sort(); // convert the string into array then sort it (alphabetical)
		const tArray = t.split("").sort(); // convert the string into array then sort it (alphabetical)
		// console.log(sArray)
		// console.log(tArray)
		if (sArray.length !== tArray.length) return false; // guard clause - can't be anagrams if lengths are diff
		for (let i = 0; i < sArray.length; i++) {
			// for loop for each letter
			if (sArray[i] !== tArray[i]) {
				// if the letter in the array is not the same
				return false; // return false
			}
		}
		return true; // return true
	}
}
