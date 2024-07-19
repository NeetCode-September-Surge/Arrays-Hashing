// Time: O(n) linear, two loops with the same length traversal
// Space: O(n) only using the length of s and t array
var isAnagram = function(s, t) {
    const map = new Map();

    //edge case
    if(s.length !== t.length) return false

    //add all the letters of one string
    for(const char of s){
        const count = map.get(char) || 0
        map.set(char, count + 1)
    }
    //subtract a letter count if it exsist otherwise return false cuz it doesnt exsist
    for(const char of t){
        if(!map.has(char) || map.get(char) === 0){
            return false
        } else {
            map.set(char, map.get(char) - 1)
        }
    }
    return true
};

//alternative way, same thing looks different
var isAnagram = function(s, t) {

    if(s.length !== t.length) return false;

    const mapTracker = {};
    for(let i = 0; i < s.length; i ++){
        mapTracker[s[i]] = (mapTracker[s[i]] || 0) + 1;
        mapTracker[t[i]] = (mapTracker[t[i]] || 0) - 1;
    }

    for(letter in mapTracker){
        if(mapTracker[letter] !== 0) return false
    }
    return true
};