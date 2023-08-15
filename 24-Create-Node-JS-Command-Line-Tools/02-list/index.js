#!/usr/bin/env node
// Allow us to run it like an executable

const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err)
  }
  // console.log(filenames)

  // Creates an array with a length equal to the filenames array
  // and every value or index will be filled with the value of null
  const allStats = Array(filenames.length).fill(null)

  for(let filename of filenames) {
    const index = filenames.indexOf(filename)

    fs.lstat(filename, (err, stats) => {
      if(err) {
        console.log(err);
      }

      allStats[index] = stats

      // every() func is built into every single array
      const ready = allStats.every((stats) => {
        return stats
      })

      if(ready) {
        allStats.forEach((stats, index) => {
          // console.log(filename);
          console.log(filenames[index], stats.isFile());
        })
      }
    })
  }
})
