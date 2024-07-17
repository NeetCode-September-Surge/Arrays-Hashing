/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if (strs.length === 0) return "" //empty array return empty string
    let prefix = strs[0]; // start with the first string as the initial prefix

    for (let i = 1; i < strs.length; i++) { //start at the next value (after initial prefix) -> the longest common prefix cant be longer than the first string
        while (strs[i].indexOf(prefix) !== 0) { // checks if the current string strs[i] contains the prefix at the beginning (index 0) -> if prefix is not found at the start of strs[i], the loop continues
            prefix = prefix.substring(0, prefix.length - 1) //shorten the prefix
            // if (prefix === "") return "" // no common prefix
        }
    }
    return prefix;
};
