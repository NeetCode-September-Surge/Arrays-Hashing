/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; //initialize a variable to keep track of num of elements not equal to val

    for (let i = 0; i < nums.length; i++) { //loop through
        if (nums[i] !== val) { //if cur num doesnt equal val
            nums[k] = nums[i] //set nums at k (basically going up) equal to nums at i
            k++ //see above line
        }
    }

    console.log(nums)

    return k;    //return k
};
