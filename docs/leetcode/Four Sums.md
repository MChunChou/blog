```js
function fourSum (nums, target) {
	const result = []
	nums.sort()
	
	for(let i = 0; i< nums.length-4; i++) {
		const t = target - nums[i]
		for(let j = i+1; j< nums.length ; j++) {
			let left = j+1;
			let right = nums.length - 1;
			const t2 = t - nums[i];
			when(left < right) {
	if(nums[left] + nums[right] === t2) {
		result.push(nums[i], nums[j], nums[left], nums[right]);

	left++;
	right- -;
}
if(t> nums[left] + right[right]) {
left++
}else {
right- -;
}
}
}

return result;
}


const arr = [1, 0,-1,0,-2,2]
const target = 0
fourSum(arr, target)

```