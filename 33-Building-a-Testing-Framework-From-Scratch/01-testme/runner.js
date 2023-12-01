const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const render = require('./render.js')

const forbiddenDirs = ['node_modules']

class Runner {
  constructor() {
    this.testFiles = []
  }

  async runTests() {
    for (let file of this.testFiles) {
      console.log(chalk.gray(`---- ${file.shortName}`))
      const beforeEaches = []
      global.render = render

      global.beforeEach = (fn) => {
        beforeEaches.push(fn)
      }

      global.it = async (desc, fn) => {
        // console.log(desc);
        beforeEaches.forEach((func) => func())
        try {
          await fn()
          console.log(chalk.green('\t', `OK - ${desc}`))
        } catch (err) {
          const message = err.message.replace(/\n/g, '\n\t\t')
          console.log(chalk.red('\t', `X - ${desc}`))
          console.log(chalk.red('\t', message))
        }
      }

      try {
        require(file.name)
      } catch (err) {
        console.log(chalk.red(err.message))
      }
    }
  }

  async collectFiles(targetPath) {
    const files = await fs.promises.readdir(targetPath)

    for (let file of files) {
      const filepath = path.join(targetPath, file)
      const stats = await fs.promises.lstat(filepath)

      if (stats.isFile() && file.includes('.test.js')) {
        this.testFiles.push({ name: filepath, shortName: file })
      } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
        const childFiles = await fs.promises.readdir(filepath)

        files.push(...childFiles.map((f) => path.join(file, f)))
      }
    }
  }
}

module.exports = Runner
