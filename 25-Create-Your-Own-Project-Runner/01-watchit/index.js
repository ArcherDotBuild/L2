#!/usr/bin/env node

const chokidar = require('chokidar')

chokidar
  .watch('.')
  .on('add', () => console.log('FILE ADDED'))
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE UNLINKED'))
