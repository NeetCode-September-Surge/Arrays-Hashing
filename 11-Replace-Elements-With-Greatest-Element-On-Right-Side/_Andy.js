/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*
 Problem: 
 Input - Array of Intergers
 Output - Array of Intergers 
 Simplify - Return an array that contains the largest element on the right side of the array. End the array with a -1
 
 Example/Edgecases:
 Input - [100, 200]
 Output - [200, -1]

 Data Structures:
 Arrays

 Algorithms:
 - create an element to 
 */

// Timed-Out - passed 87/90
// var replaceElements = function(arr) {
//     const result = []
//     const len = arr.length
//     for (let i = 0; i < len; i++){
//         let largestValue = Math.max(...arr)
//         result.push(largestValue)
//         arr.shift()
//     }
//     result.shift()
//     result.push(-1)
//     return result
// };

// ChatGPT solution:
var replaceElements = function (arr) {
	const len = arr.length; // get the length of the array
	let max = -1; // set the max to -1, which is the last element in the result array
	for (let i = len - 1; i >= 0; i--) {
		// for let the loop run for len - 1 times, decrementing until we hit 0.
		const current = arr[i]; // create a variable and set it equal to the element.
		arr[i] = max; // make the array element equal to the max
		if (current > max) {
			// if the stored array element is greater than max
			max = current; // max is now equal to the element
		}
	}
	return arr; // return arr
};
