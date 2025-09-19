const data = [
	{ name: 'Oleg', age: 19 },
	{ name: 'Artem', age: 17 },
	{ name: 'Stas', age: 18 },
]

const zoomersList = data.filter(man => man.age > 18)
const zoomers = zoomersList.map(man => man.name)

console.log(zoomers)
