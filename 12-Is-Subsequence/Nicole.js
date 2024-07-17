/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(s.length > t.length) return false //s cant be longer than t
    let subseq = 0 //keep track of cur character position in s
    for(let i = 0; i < t.length; i++) {
        if(s[subseq] === t[i]) subseq++ //if char in s = char in t, move forward in s
    }
    return subseq === s.length // after the loop check if we have matched all chars in s
};
