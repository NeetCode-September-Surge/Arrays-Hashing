/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let objS={}, objT={} //create freq objs for each string
    for(let i = 0;i < s.length; i++){ //loop through
        const curS = s[i], curT = t[i] //define current letters for each string
        if(objS[curS] && (objS[curS]!== curT)) return false //if objS doesnt contain current letter of s AND that current letter in objS isnt equal to the curT return false
        objS[curS] = curT //set curS in objS to curT
        if(objT[curT] && (objT[curT]!== curS)) return false //same logic as above but for objT
        objT[curT] = curS //set curT in objT to curS
    }
    return true //if all these checks pass, return true
