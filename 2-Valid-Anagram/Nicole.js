class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		if (s.length !== t.length) return false; //if not the same length they cant be anagrams
		return s.split("").sort().join("") === t.split("").sort().join(""); //split s at each letter, sort and join them back into a string
		//do the same for t
		//if they match, theyre anagrams
	}
}
