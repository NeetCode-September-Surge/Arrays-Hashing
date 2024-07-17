/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    if (arr.length === 0 || arr.length === 1) return [-1]
    
    const result = new Array(arr.length);
    result[arr.length - 1] = -1 // The last element is always -1
    
    let max = arr[arr.length - 1]; //greatest element
    
    for (let i = arr.length - 2; i >= 0; i--) { //start from the second to last number and move backwards
        result[i] = max; //replace num in result with the greatest element
        if (arr[i] > max) { //if num in arr is bigger than max, max is now arr num
            max = arr[i];
        }
    }
    
    return result;
};
