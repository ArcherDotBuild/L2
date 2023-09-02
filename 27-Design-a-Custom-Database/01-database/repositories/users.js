const fs = require('fs')
const crypto = require('crypto')

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
    attrs.id = this.randomId()
    // Object { email: 'elfgodd@elfgodd.com', password: '1234 }
    const records = await this.getAll()
    records.push(attrs)

    await this.writeAll(records)
  }

  async writeAll(records) {
    // write the updated 'records' array back to this.filename
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2))
  }

  randomId() {
    // return Math.random() * 9999999
    return crypto.randomBytes(4).toString('hex')
  }

  async getOne(id) {
    const records = await this.getAll()
    return records.find((record) => record.id === id)
  }

  async delete(id) {
    const records = await this.getAll()
    const filteredRecords = records.filter((record) => record.id !== id)
    await this.writeAll(filteredRecords)
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json')

  // await repo.create({ email: 'elfgodd@elfgodd.com', password: '12345' })

  // const users = await repo.getAll()

  // const user = await repo.getOne('918b2447')
  // const user = await repo.getOne('xxx') // undefined, user doesn't exists

  await repo.delete('5985b553')
  await repo.delete('918b2447')

  // console.log(users)
  // console.log(user)
}

test()
