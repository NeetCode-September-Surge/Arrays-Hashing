/**
 * have a variable to keep track of the max
 * change the last element to -1
 * 
 * loop through the array backwards
 * have a curr el
 * change curr to max because it is the greatest num of all all elements up to that point
 * check if curr > max, if so, update the max pointer to curr
 * 
 * at then end, return the array
 * 
 * 
 * time: O(n) linear, only looping through array once
 * space: O(1) constant  did not create any new data structures that grow in size with the input array.
 */

var replaceElements = function(arr) {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1

    for(let i = arr.length - 2; i >= 0; i --){
        let curr = arr[i]
        arr[i] = max
        if(curr > max) max = curr
    }
    return arr
};