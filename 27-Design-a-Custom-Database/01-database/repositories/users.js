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
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8',
      })
    )
  }

  async create(attrs) {
    // Object { email: 'elfgodd@elfgodd.com', password: '1234 }
    const records = await this.getAll()
    records.push(attrs)

    await this.writeAll(records)
  }

  async writeAll(records) {
    // write the updated 'records' array back to this.filename
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2))
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json')

  await repo.create({ email: 'elfgodd@elfgodd.com', password: '12345' })

  const users = await repo.getAll()

  console.log(users)
}

test()
