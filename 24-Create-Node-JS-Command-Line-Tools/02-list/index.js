#!/usr/bin/env node
// Allow us to run it like an executable

const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
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
