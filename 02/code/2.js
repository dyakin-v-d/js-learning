function createMultiplier(multiplier) {
	const num = multiplier
	return a => a * multiplier
}

const nnn = createMultiplier(3)

console.log(nnn(2))
