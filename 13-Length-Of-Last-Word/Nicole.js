/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // //split string 
    // const parts = s.split(' ')
    // console.log(parts)
    // //return length lol
    // return parts[parts.length-1].length
    const parts = s.split(' ').filter(part => part.length > 0) //get rid of empty spaces at the end
    //console.log(parts);
    return parts.length > 0 ? parts[parts.length - 1].length : 0;
    //is parts is not empty
    //return the length of the last element(if it is empty return 0)
}
