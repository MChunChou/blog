# 3 Sums 

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. 

**Example 1:**

> **Input:** nums = [-1,0,1,2,-1,-4]
> **Output:** [[-1,-1,2],[-1,0,1]]
> **Explanation:**
>   ```text
>	nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
>	nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
>	nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
>	```
>	The distinct triplets are [-1,0,1] and [-1,-1,2].
>	Notice that the order of the output and the order of the triplets does not matter.
>	

**Example 2:**

> **Input:** nums = [0,1,1]
> **Output:** []
> **Explanation:** The only possible triplet does not sum up to 0.

**Example 3:**

> **Input:**  nums = [0,0,0]
> **Output:** [[0,0,0]]
> **Explanation:** The only possible triplet sums up to 0.

**Constraints:**

1. `3 <= nums.length <= 3000`
2. `-105 <= nums[i] <= 105`

## Solutions

### 解法 1. 暴力解法 (不建議)

```js

var threeSum = function(nums) {
	let result = [];
	let isExist =[];
	let length = nums.length;

	for(let i = 0; i < length-2; i++) {
		for(let j =i+1; j < length - 1; j++) {
			for(let k=j+1; k < length; k++) {
				if(nums[i] + nums[j] + nums[k] == 0) {
					const res = [nums[i] + nums[j] + nums[k]].sort().join('');
						// 有重複 result 問題, 檢查是否重複
					if(!isExist.find(r => r === res)) {
						result.push([nums[i], nums[j],nums[k]]);
						isExist.push(res);
					}
				}
			}
		}
	}
	return result;
};

```
### 解法 2. Two Points

先排列陣列

Example:
[-1, 0, 1, 2, -1, -4] → [-4, -1, -1, 0, 1, 2]


(target value) - array[i] → (new target value)

loop L < R
	if array[left] + array[right] > (new target value)
		right--
	else 
		left++

```js
var threeSum = function(nums, target, v) {
	nums.sort((a,b) => a-b);
	const result = [];
	for(let i = 0; i < nums.length ; i++){
		let left = i + 1;
		let right = nums.length - 1;
		const t = target - nums[i];

		while(left < right) {
			if(nums[left] + nums[right] === t) {
 		  		if(v){
					result.push([v, nums[i],nums[left], nums[right]]);
				} else {
					result.push([nums[i],nums[left],nums[right]]);
				}		
			
				left++;
				right--;		
			}

			if(t > nums[left] + right[right]) {
				left++;
			}
			else {
				right--;
			}
		}
	}

	return result
}
```
