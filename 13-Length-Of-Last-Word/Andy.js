/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const split = s.split(" "); // split the word into an array off of the spaces
	const filtered = split.filter((e) => e !== ""); // filter out the elements that has ""
	return filtered[filtered.length - 1].length; // return the length of the last element in the filtered array.
};
