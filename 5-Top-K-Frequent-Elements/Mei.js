// P: given array of nums, return k most frequent elements
//      k -> 2 -> two most frequent elements
// E:
// D:
// A: intialize a frequency object
//    iterate through the array
//      if object contains nums[i]
//          increment nums[i]
//      if object does not contain nums[i]
//          add it to the object and set it to 1
//    sort the frequency object
//    return k elements from sorted object

class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
		let freqObj = {}; // initialize an object to store frequencies of numbers
		for (let num of nums) {
			// iterate through each num in the nums array
			if (freqObj[num]) {
				// if the num is in the object
				freqObj[num]++; // increment count of num in the object
			} else {
				freqObj[num] = 1; // set initial count of the num in object
			}
		}
		// freqObj[b] - freqObj[a] compares the values (counts of occurrences)
		// if freqObj[b] (count of occurrences of b) is greater than freqObj[a] (count of occurrences of a), b should come before a in the sorted array
		//      -> descending order
		let sortedKeys = Object.keys(freqObj).sort(
			(a, b) => freqObj[b] - freqObj[a]
		); // sort in descending -> higher frequencies come first
		return sortedKeys.slice(0, k); // return the top k frequent numbers
	}
}
// for(let i = 0; i < nums.length; i++) {
//     if (freqObj[nums[i]]) {
//         freqObj[nums[i]]++;
//     } else {
//         freqObj[nums[i]] = 1;
//     }
// }

// same thing, but turned if/else into ternary
class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
		let freqObj = {};
		for (const num of nums) {
			freqObj[num] ? freqObj[num]++ : (freqObj[num] = 1);
		}
		let sorted = Object.keys(freqObj).sort((a, b) => freqObj[b] - freqObj[a]);
		return sorted.splice(0, k);
	}
}
