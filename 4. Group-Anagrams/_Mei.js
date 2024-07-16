// time: O(n * m)
//          iterating through string -> O(n)
//          instead of sorting, we count occurrences of each character in string 
//              which is O(m) time, where m is length of string
//          converting to a key is O(1) -> fixed size 
// space: O(n * m)
//          in the worst case, need to store all n strings separately
//              each string cna have up to m characters
//          n * m 
//              note: count is O(26) -> O(1) 
//                    since fixed size array 

// A: iniitalize an object to store grouped anagrams
//    iterate though each string in array 
//      initalize variable count to create array of size 26 (letters) initalized to 0
//      iterate through each character in string 
//          increment the count for each character in string
//      initalize a variable key to convert count array to string to use as key in object
//      if key is in anagrams 
//          push string to they key 
//      else 
//          set key as the string 
//    return object 

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
      const anagrams = {}; // initialize an object to store grouped anagrams
      for (const str of strs) { // iterate through each string in the array
          const count = new Array(26).fill(0); // create an array to count occurrences of each letter (26 letters of the alphabet)

          // count occurrence of each character in the string
          for (const char of str) { // iterate through each character of the string
              const index = char.charCodeAt(0) - "a".charCodeAt(0); // calculate the index of the character in the count array
              count[index]++; // increment the count for that character
          }

          // convert the count array to a unique string key
          const key = count.join("#");

          if (anagrams[key]) { // if the key already exists in the anagrams object
              anagrams[key].push(str); // push the string to the array associated with that key
          } else {
              anagrams[key] = [str]; // otherwise, create a new array with the string as the first element for that key
          }
      }
      return Object.values(anagrams); // return the arrays of strings grouped by anagrams from the values of the anagrams object
  }
}



// time: O(n * m log m)
//          iterating through string -> O(n)
//              iterating through each string in strs
//                  n is number of strings in array 
//          splitting and joining takes as manys steps as there are characters in string
//              so the max number of characters in any string is O(m)
//                  sorting the characters take (m log m) steps 
//                      think of merge sort
//                          divide array into two halves -> O(log m)
//                          sort each half
//                          merge sorted halves -> O(m) 
//              splitting: O(m)
//              sorting: O(m log m)
//              joining O(m)
//                  -> O(m log m)
//          since we do this for every string with n strings 
//              the total time for sorting all strings is O(n * m log m)
// space: O(n * m)
//          in the worst case, need to store all n strings separately
//              each string cna have up to m characters
//          n * m 

// P: given an array of strings, group the anagrams together into sublists
//    an anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// E: strs = ["ate", "eat", "rat", "tar", "tea"] 
//           [["ate", "eat", "tea"], ["rat", "tar"]];
// D: object to store grouped anagrams
// A: initalize an object to store grouped anagrams
//    iterate though each string in array 
//      initalze a sorted string to split each word to characters, sort it, and join it back to a string
//      if key already exists in object
//          push string to array at that key
//      if key does not exist
//          create new array with string as first element 
//    return object;

class MeiSolution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
      const anagrams = {}; // initialize an object to store grouped anagrams
      for (const str of strs) { // iterate through each string in the array
          const sortedStr = str.split('').sort().join(''); // split each string into an array of characters, sort them, and join them back into a string

          if (anagrams[sortedStr]) { // if the sorted string is already a key in the object
              anagrams[sortedStr].push(str); // push the string to the array associated with that key
          } else {
              anagrams[sortedStr] = [str]; // create a new array with the string as its first element for that key
          }
      }
      return Object.values(anagrams); // return the arrays of strings grouped by anagrams from the values of the anagrams object
  }
}


