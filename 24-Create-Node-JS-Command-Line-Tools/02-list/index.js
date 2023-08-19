#!/usr/bin/env node
// Allow us to run it like an executable

const fs = require('fs')
const util = require('util')

// Method #2
// const lstat = util.promisify(fs.lstat)

// Method #3
// const { lstat } = fs.promises

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
