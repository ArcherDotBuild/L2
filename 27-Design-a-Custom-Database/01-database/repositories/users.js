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
    } catch (err) {
      // File does not exist
      fs.writeFileSync(this.filename, '[]')
    }
  }

  async getAll() {
    // Open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8',
    })

    // Read its contents
    console.log(contents)

    // Parse the contents

    // Return the parsed data
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json')

  await repo.getAll()
}

test()