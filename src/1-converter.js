function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

let fahrenheit

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/

function convertFahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) / 1.8
}

console.log(convertFahrenheitToCelsius(87))
console.log(convertFahrenheitToCelsius(90))

function formatCelsius(temp) {
	let wholeTemp = Math.round(temp);
	return `${wholeTemp}°C`
}
console.log(formatCelsius(30.6))
console.log(formatCelsius(30.3))

function hottestTemperatue(tempArray) {
	return Math.max(...tempArray)
}
console.log(hottestTemperatue([30, 29, 20, 50]))
