class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
		const map = new Map();
		for (const num of nums) {
			if (map.has(num)) map.set(num, map.get(num) + 1);
			else map.set(num, 1);
			//console.log(map)
		}
		const freqArray = Array.from(map.entries());
		//console.log(freqArray)
		freqArray.sort((a, b) => b[1] - a[1]);
		//console.log(freqArray)
		const result = freqArray.slice(0, k).map((pair) => pair[0]);
		return result;
	}
}
