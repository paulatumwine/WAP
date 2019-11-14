const calculateAverage = function (...numbers) {
	if (numbers.length <= 0) return 0;
	if (numbers.length == 1) return numbers[0]
	const sum = numbers.reduce((n1, n2) => n1 + n2, 0)
	return sum / numbers.length
}

console.log(calculateAverage(1, 2, 3))
console.log(calculateAverage(1, 2, 3, 4))
console.log(calculateAverage(1, 2, 3, 4, 5, 16.6))
