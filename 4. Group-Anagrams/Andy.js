class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
		const anagramObj = {};
		const sortStrs = strs.map((e) => e.split("").sort().join(""));
		// console.log(sortStrs)
		for (let i = 0; i < strs.length; i++) {
			if (anagramObj[sortStrs[i]]) {
				anagramObj[sortStrs[i]].push(strs[i]);
			} else {
				anagramObj[sortStrs[i]] = [strs[i]];
			}
		}
		return Object.values(anagramObj);
	}
}
