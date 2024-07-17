/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

/*
Problem:
Input - String, String
Output - Boolean 
Simplify - Return if the string of s can be a subsequence of t, which means if you remove letters from t without changing the order, can you get the s word.

Examples/Edgecases:

Data Structures:
String

Algorithms:
- set variable for s
- for loop on string t
- 

 */
var isSubsequence = function (s, t) {
	let sIndex = 0; // declare variable to store s word index
	let tWord = ""; // declare variable to store word made by t
	for (let i = 0; i < t.length; i++) {
		// for loop going through each letter of t.
		if (t[i] === s[sIndex]) {
			// if the letter in t is equal to the letter in s
			tWord += t[i]; // add the letter to the tWord string
			sIndex++; // add 1 to the sIndex
		}
	}
	return tWord === s; // compare tWord to s
};
