class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		if (s.length !== t.length) return false; // guard clause, if lengths of the two strings are not equal, they can't be anagrams
		const sStr = s.split("").sort().join(""); // split the string, sort the characters, and join them back into a sorted string
		const tStr = t.split("").sort().join(""); // split the string, sort the characters, and join them back into a sorted string
		if (sStr !== tStr) return false; // if the sorted strings are not the same, return false
		return true; // otherwise, return true, the strings are anagrams
	}
}

// P: given two strings, return true if strings are anagrams of each other otherwise false
//      input: strings
//      output: boolean
// E: s = "eat", t = "ate" -> true
//    s = "eat", t = "eating" -> false;
// D:
// A: if string 1 length is not equal to string 2 length
//      return false
//    split, sort, and join each string
//    if the new created strings are not equal to each other
//      return false
//    return true
