#!/usr/bin/env node

const debounce = require('lodash.debounce')
const chokidar = require('chokidar')
const program = require('caporal')
const fs = require('fs')

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to execute')
  .action(async ({ filename }) => {
    // console.log(args)
    
    const name = filename || 'filename.js'
    try {
      await fs.promises.access(name)
    } catch (err) {
      throw new Error(`Could not find the file ${name}`)
    }

    const start = debounce(() => {
      console.log('STARTING USERS PROGRAM')
    }, 100)

    chokidar.watch('.').on('add', start).on('change', start).on('unlink', start)
  })

program.parse(process.argv)
