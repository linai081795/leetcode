# 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

## JavaScript
1. 暴力法

```javascript
function twoSum(nums,target) {
  for (let index = 0; index < nums.length; index++) {
    for (let a= index+1; a < nums.length; a++) {      
      if(target-nums[index]===nums[a]){
        return [index,a]
      }
    }
  }
}
```

2. 数组法

```javascript
function twoSum(nums,target) {
  var temp = [];
  for(var i=0;i<nums.length;i++){
    var dif = target - nums[i];
        if(temp[dif] != undefined){
            return [temp[dif],i];
        }
        temp[nums[i]] = i;
    }

}
```

3. 利用数组indexof方法 

此算法内存较低

```javascript
function twoSum(nums,target) {
  for(var i=0;i<nums.length;i++){
    var dif = target - nums[i];
    var isIn = nums.indexOf(dif,i+1)
    if(isIn!==-1){
      return [i,isIn]
    }
  }
}
```

4. 利用数组对象 //最优

此方法用时较少

```javascript
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
```

