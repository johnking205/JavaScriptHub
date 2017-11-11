//twoSum code for LeetCode Challenge
var twoSum = function(nums, target) {
    //num1 + num2 = target or target - num1 = num2
    checked = [];
    numsLength = nums.length;
    for(i=0; i<numsLength; i++) {
        for(j=0; j<checked.length; j++) {
            if(target - nums[i] === checked[j]) {
                return [j,i];
            }
        }
        checked.push(nums[i]);
    }
};

console.log(twoSum([2,8,11,7], 9));
