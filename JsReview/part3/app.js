const multiplesCount = function(nums, b) {
	if (!(nums instanceof Array) || b == NaN) {
		return 0;
	}
	const multiples = nums.filter(n => n % b == 0)
	return multiples.length
}

console.log(multiplesCount([1,2,3,4,5,6], 3))
console.log(multiplesCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 5))