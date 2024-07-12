//leetcode | valid anagram by eileen
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//first try: exceeds time limit- ignore
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const countS = {}; //creating an obj/hashmap: a data structure that allows you to store key-value pairs
    const countT = {};
    Array.from(s).forEach((char) => { //spread operator not supported so converted given str into an arr to use forEach over a for loop for readability - also just use for..of loop instead
        if (!countS[char]) { //best practice to first check if var is truthy/exists before performing operations on it
            countS[char] = 1; //setting a key/value pair
        } else countS[char]++; //else (if already existing), incrementing obj key value by 1
        console.log(countS); //visualizing the obj after each iteration
    })
    Array.from(t).forEach((char) => {
        if (!countT[char]) {
            countT[char] = 1;
        } else countT[char]++
        console.log(countT);
    });
    for (let char in countS) {
        if (countS[char] !== countT[char]) return false;
    }
    return true;
};

//refactored first try
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const countS = {};
    const countT = {};

    for (let char of s) {
        countS[char] ? countS[char]++ : countS[char] = 1;
    }
    
    for (let char in countS) {
        if (countS[char] !== countT[char]) return false;
    }

    return true;
};

//solution with comments
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; //guard clause- cant be anagrams if lengths are diff
    return s.split('').sort().join('') === t.split('').sort().join('');
    //converting each str to an arr to be able to sort each strings chars in alpahbetical order
    //then comparing the result string against eachother --> would be equal if a true anagram
};

//solution without comments | 68ms
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};