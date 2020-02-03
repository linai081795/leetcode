// 暴力法
function twoSum(nums,target) {
  for (let index = 0; index < nums.length; index++) {
    for (let a= index+1; a < nums.length; a++) {
      if(target-nums[index]===nums[a]){
        return [index,a]
      }
    }
  }
}