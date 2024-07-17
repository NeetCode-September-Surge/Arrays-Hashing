/**
 * @param {string[]} strs
 * @return {string}

 Problem:
 Input - Array of Strings
 Output - String
 Simplify - Return the longest common prefix of all of the elements.

 Examples/Edgecases:

 Data Structures:

 Algorithms:
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return "";
	// const map = strs.map((e) => e.split(""))
	let result = "";
	for (let i = 0; i < strs.length; i++) {
		console.log(strs.every((e) => e.charAt(i)));
	}
};
