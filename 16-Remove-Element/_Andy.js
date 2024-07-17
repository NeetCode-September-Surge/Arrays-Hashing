var removeElement = function (nums, val) {
	let k = 0; // create a variable to store both count and can be reference for index
	for (let i = 0; i < nums.length; i++) {
		// for loop
		if (nums[i] !== val) {
			// if the element does not equal to the value
			nums[k] = nums[i]; // set the array element at k index equal to the array of element at i index, this let's us skip anytime the array element is equal to the value.
			k++; // increment k
		}
	}
	return k;
};
