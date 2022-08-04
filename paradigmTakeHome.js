//Given an array of integers nums and an integer target,
//create a function that returns the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [2,7]
// Explanation: Because 2 + 7 == 9, we return [2, 7]

function twoSum(nums, target) {
  //empty object to keep track of values in the array
  const previousValues = {};
  for (let i = 0; i < nums.length; i++) {
    //saving each value in the array into a variable
    const currentValue = nums[i];
    // console.log("currenVal:", currentValue);
    //getting the first value to compare to other value that sums up to the target
    const neededValue = target - currentValue;
    console.log("needed:", neededValue);

    if (previousValues[neededValue] != null) {
      console.log("prevVal:", previousValues);
      return [neededValue, currentValue];
    } else {
      previousValues[currentValue] = currentValue;
    }
  }

  return [];
}
console.log(twoSum([7, 11, 15, 2], 9));



