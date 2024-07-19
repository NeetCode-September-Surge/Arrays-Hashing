/**
 Time: O(n) linear, only one loop, function runs n number of times

 Space: O(n) only using the length of nums array
  */
 var containsDuplicate = function(nums) {
    //set only allow unqiue values to be added
    const noDups = new Set();

    //loop to iterate through nums
    for(const num of nums){
        //check if num is already in the set meaning there is a dup
        if(noDups.has(num)){
            return true
        } else {
            //otherwise add the num to the set
            noDups.add(num)
        }
    }
    //if the first condition is never hit, that means no dups
    return false;
};