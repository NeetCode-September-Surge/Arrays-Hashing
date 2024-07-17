/**
 * @param {number} numRows
 * @return {number[][]}
 */

/*
 Problem:
 Input - Intergers
 Output - Matrix
 Simplify - Return the pascal's triange, where depending on the integer, it is the sum of two indexes.

 Examples/Edgecases: 

 Data Structures:
 Array

 Algorithms:

 */
var generate = function (numRows) {
	const result = []; // create a variable to store the result
	for (let i = 0; i < numRows; i++) {
		// for loop on the numRows
		const inside = Array(i + 1).fill(1); // create an array, (i+1) because the for loop starts at 0, fill all elements inside Array with 1.
		if (inside.length >= 3) {
			// if the length of the array is greater than or equal to 3 (because the first 2 iterations are just 1's)
			const latest = result[result.length - 1]; // lateset inside of the result array - ex. for inside.length of 3, the latest is [1,1]
			for (let i = 0; i < inside.length - 2; i++) {
				// for loop on the inside array, stop at i < inside.length -2 (because 0 index AND last element is always 1)
				inside[i + 1] = latest[i] + latest[i + 1]; // starting on the 1st index (because the 0 index is always 1), get the sum of the values in the two indexs in the previous array
			}
		}
		result.push(inside); // push the inside array into the result array
	}
	return result; // return result
};
