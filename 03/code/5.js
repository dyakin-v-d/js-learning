// Напиши функцию groupBy(array, key), которая принимает массив объектов и строку с названием свойства. Функция должна вернуть новый объект, где:

function groupBy(array, key) {
	return array.reduce((acc, obj) => {
		const keyVal = obj[key]
		if (!acc[keyVal]) {
			acc[keyVal] = []
		}
		acc[keyVal].push(obj)
		return acc
	}, {})
}

const data = [
	{ name: 'Oleg', age: 25 },
	{ name: 'Sanya', age: 30 },
	{ name: 'Vova', age: 25 },
]

const newData = groupBy(data, 'age')

console.log(newData)
