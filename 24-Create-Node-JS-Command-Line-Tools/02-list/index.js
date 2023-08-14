#!/usr/bin/env node
// Allow us to run it like an executable

const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err)
  }
  // console.log(filenames)

  // BAD CODE HERE!!!!
  for(let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if(err) {
        console.log(err);
      }

      console.log(filename, stats.isFile());
    })
  }
})
