```js
function threeSum (nums) {
	nums.sort((a,b) => a-b);
	const result = [];
	for(let i = 0; i < nums.length ; i++){
		let leftIdx = i + 1;
		let rightIdx = nums.length - 1;
		const t = target - nums[i];
		while(left < right) {
	if(nums[left] + nums[right] === t) {
 		  if(v) 	
 	    result.push([v, nums[i],nums[left], nums[right]]);
	  else 
	    result.push([nums[i],nums[left],nums[right]]);

	  left++;
	  right- -;
}

if(t > nums[left] + right[right]) left ++
else right --
}
}

return result
 }


```