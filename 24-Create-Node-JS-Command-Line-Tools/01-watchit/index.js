const counterObject = require('./myscript.js')

console.log(counterObject.getCounter());
counterObject.incrementCounter()
console.table(counterObject.getCounter());

const newCounterObject = require('./myscript.js')
console.log(newCounterObject.getCounter())