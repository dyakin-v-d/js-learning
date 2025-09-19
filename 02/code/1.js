function makeCounter() {
	let count = 0
	function inner() {
		count++
		return count
	}
	return inner
}

const counter = makeCounter()