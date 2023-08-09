## 24-Create-Node-JS-Command-Line-Tools

**folder 01**

## 1. 03 Working with Modules

## 2. 04 Invisible Node Functions

```javascript
// in index.js
console.log(arguments)
```

This prints out the arguments huge object to the console

```json
[Arguments] {
  ...
}
```

```javascript
// in index.js
console.log(arguments)
console.log(require)
console.log(module)
console.log(__filename)
console.log(__dirname)
```

## 3. 05 The Require Cache

```javascript
// in index.js
require('./myscript.js')
console.log(require.cache)

// in myscript.js
const message = 'hello world'

module.exports = message
```

## 4. 06 Files Get Required Once

```javascript
// in index.js
const counterObject = require('./myscript.js')

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.table(counterObject.getCounter())

const newCounterObject = require('./myscript.js')
console.log(newCounterObject.getCounter())

// in myscript.js
let counter = 0

module.exports = {
  incrementCounter() {
    counter = counter + 1
  },
  getCounter() {
    return counter
  },
}
```

## 5. 07 Debugging with Node

`node inspect index.js`

#### CLI Debugger Commands

- c => Continue execution until program ends or next debugger statement
- n => Run the next line of code
- s => Step in to a function
- o => Step out of the current function

**After entering the debu> we can open the repl console by typing repl in the debugger**

`node inspect index.js` => Start up a debugger **CLI** and pause execution whenever a 'debugger' statement is hit

`node --inspect index.js` => Start up a debugger instance and pause execution whenever a 'debugger' statement is hit. Access the debugger at '**chrome://inspect'**

`node --inspect-brk index.js` => Start up a debugger instance and wait to execute until a debugger is connected. Access the debugger at '**chrome://inspect'**

## 6. 09 Accessing Standard Library Modules

**folder 01**

NodeJS documentation https://nodejs.org/

https://nodejs.org/dist/latest-v18.x/docs/api/fs.html
