function twoSum(nums,target) {
  let temp = {}
  for (let index = 0; index < nums.length; index++) {
    let dif = target-nums[index]

    if(temp[dif]===undefined){
      temp[nums[index]]=index
    }else{
      return [temp[dif],index]
    }
  }
}