 /**
 given two strings s and t
 return TRUE if you can make s in t and FALSE otherwise

 2 pointers
 keep count of both s and t at the same time
 s moves when there is a match
 t moves every iteration to go through the whole string

 at then end check if sCount === s.length, it will return a boolean for our answer

 Time: O(n) liner, only one loop iterates through the string
 Space: O(1) constant no extra space being used
  */
 var isSubsequence = function(s, t) {
    let sCount = 0;
    let tCount = 0;

    while(sCount < s.length && tCount < t.length){
        if(s[sCount] === t[tCount]){
            sCount++
        }
        tCount++
    }

    return sCount === s.length
};