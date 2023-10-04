const fs = reqire('fs')
const crypto = require('crypto')

module.exports = class Repository {
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

  async update(id, attrs) {
    const records = await this.getAll()
    const record = records.find((record) => record.id === id)
    if (!record) {
      throw new Error(`Record with id: ${id} not found`)
    }

    // Takes all the different properties and key value pairs inside
    // the attrs object and copy them on by on onto the record object
    // Example:
    // record === { email: elfgodd@elfgodd.com }
    // attrs === { password: '12345' }
    Object.assign(record, attrs)
    // new record === { email: elfgodd@elfgodd.com, password: '12345' }

    await this.writeAll(records)
  }

  async getOneBy(filters) {
    const records = await this.getAll()

    // Iterating through an array
    for (let record of records) {
      let found = true

      // Iterating through an object
      for (let key in filters) {
        if (record[key] !== filters[key]) found = false
      }
      if (found) {
        return record
      }
    }
  }
}