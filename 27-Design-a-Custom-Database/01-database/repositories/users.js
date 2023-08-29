const fs = require('fs')

class UsersRepository {
  // Constructor functions get called instantly whenever we create
  // a new instance of a class
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename')
    }

    this.filename = filename
    try {
      // To check to see if that file exist
      fs.accessSync(this.filename)
    } catch {
      // File does not exist
      fs.writeFileSync(this.filename, '[]')
    }
  }

  async checkForFile() {}
}

const repo = new UsersRepository('users.json')
repo.checkForFile()
