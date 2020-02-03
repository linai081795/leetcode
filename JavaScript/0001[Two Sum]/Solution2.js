// 利用 array.indexOf
function twoSum(nums,target) {
  for(var i=0;i<nums.length;i++){
    var dif = target - nums[i];
    var isIn = nums.indexOf(dif,i+1)
    if(isIn!==-1){
      return [i,isIn]
    }
  }
}