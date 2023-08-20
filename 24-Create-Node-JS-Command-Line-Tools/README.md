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

## 7. 10 The Callback Pattern in Node

```javascript
const fs = require('fs')

fs.readdir('.', (err, filenames) => {
  // EITHER
  // err === an error object, which means something went wrong
  // OR
  // err === null, which means everything is OK

  if (err) {
    // error handling code here

    console.log(err)
    // return
  }

  console.log(filenames)
})
```

## 8. 11 The Process.cwd Function

`node index.js`
`node 02-list/index.js`

## 9. 12 Running a Node Program as an Executable

`npm init -y`

## 9. 13 Linking a Project

Change index.js file permissions
`chmod +x index.js`

Allow us to run it like an executable
`#!/usr/bin/env node`

Takes our current project and makes it available to everywhere or every directory on our machine
`npm link`

Run our program
`nls`

## 10. 14 Is it a File or a Folder

`which node`

## 11. 15 A Buggy Initial Implementation

```javascript
// BAD CODE HERE!!!!
for (let filename of filenames) {
  fs.lstat(filename, (err, stats) => {
    if (err) {
      console.log(err)
    }

    console.log(filename, stats.isFile())
  })
}
```

## 12. 17 A Callback-Based Solution

```javascript
const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err)
  }
  // console.log(filenames)

  // Creates an array with a length equal to the filenames array
  // and every value or index will be filled with the value of null
  const allStats = Array(filenames.length).fill(null)

  for (let filename of filenames) {
    const index = filenames.indexOf(filename)

    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err)
      }

      allStats[index] = stats

      // every() func is built into every single array
      const ready = allStats.every((stats) => {
        return stats
      })

      if (ready) {
        allStats.forEach((stats, index) => {
          // console.log(filename);
          console.log(filenames[index], stats.isFile())
        })
      }
    })
  }
})
```

## 13. 18 Callback-Based Functions Using Promises

```javascript
const fs = require('fs')
const util = require('util')

// Method #2
// const lstat = util.promisify(fs.lstat)

// Method #3
const { lstat } = fs.promises

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err)
  }
})

// Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if(err) {
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }
```

## 14. 19 Issues with Sequential Reads

```javascript
fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err)
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename)

      console.log(filename, stats.isFile())
    } catch (err) {
      console.log(err)
    }
  }
})
```

## 15. 20 Promise.all-Based Solution

## 16. 21 Console Logs with Colors

## 17. 22 Accepting Command Line Arguments

## 18. 23 Joining Paths

## 19. 24 App Wrapup
