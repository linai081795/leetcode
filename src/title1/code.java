class Solution {
  public int[] twoSum(final int[] nums, final int target) {
     for (int i = 0; i < nums.length; i++) {
          for (int j = i + 1; j < nums.length; j++) {
              if (nums[j] == target - nums[i]) {
                  return new int[] { i, j };
              }
          }
      }
    throw new IllegalArgumentException("No two sum solution");
  }
}