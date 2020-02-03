// 暴力法
function twoSum1(nums,target) {
  for (let index = 0; index < nums.length; index++) {
    for (let a= index+1; a < nums.length; a++) {      
      if(target-nums[index]===nums[a]){
        return [index,a]
      }
    }
  }
}
// 利用数组下标
function twoSum2(nums,target) {
  var temp = [];
  for(var i=0;i<nums.length;i++){
    var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }

}

 // 利用 array.indexOf
function twoSum3(nums,target) {
  for(var i=0;i<nums.length;i++){
    var dif = target - nums[i];
    var isIn = nums.indexOf(dif,i+1)
    if(isIn!==-1){
      return [i,isIn]
    }
  }
}

function twoSum4(nums,target) {
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
console.log(twoSum4([2,7,11,15],9))