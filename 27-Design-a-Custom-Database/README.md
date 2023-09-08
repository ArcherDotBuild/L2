## 27-Design-a-Custom-Database

**folder 01**

## 1. 03 Implementing the Users Repository

## 2. 04 Opening the Repo Data File

## 3. 05 Small Refactor

From this:

```javascript
async getAll() {
    // Open the file called this.filename
    const contents = await fs.promises.readFile(this.filename, {
      encoding: 'utf8',
    })

    // Read its contents
    // console.log(contents)

    // Parse the contents
    const data = JSON.parse(contents)

    // Return the parsed data
    return data
  }
```

To this:

```javascript
async getAll() {
    // Open the file called this.filename
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8',
      })
    )
  }
```

## 4. 06 Saving Records

```javascript
async create(attrs) {
  // Object { email: 'elfgodd@elfgodd.com', password: '1234 }
  const records = await this.getAll()
  records.push(attrs)

  // write the updated 'records' array back to this.filename
  await fs.promises.writeFile(this.filename, JSON.stringify(records))
}
```

## 5. 07 Better JSON Formatting

`JSON.stringify(records, null, 2)` 2nd arg is a custom formatter, 3rd arg designates the level of indentation to use inside of our string that we create

## 6. 08 Random ID Generation

```bash
node
Welcome to Node.js v16.13.0.
Type ".help" for more information.
> const crypto = require('crypto')
undefined
> crypto.randomBytes(4)
<Buffer 3d d2 80 9c>
> crypto.randomBytes(4).toString('hex')
'7f979e27'
```

```javascript
randomId() {
  // return Math.random() * 9999999
  return crypto.randomBytes(4).toString('hex')
}
```

## 7. 09 Finding By Id

```javascript
async getOne(id) {
  const records = await this.getAll()
  return records.find(record => record.id === id)
}
```

## 8. 10 Deleting Records

```javascript
async delete(id) {
  const records = await this.getAll()
  const filteredRecords = records.filter((record) => record.id !== id)
  await this.writeAll(filteredRecords)
}
```

## 9. 11 Updating Records

```javascript
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
```

## 10. 12 Adding Filtering Logic

## 11. 13 Exporting an Instance

```javascript

const test = async () => {
  const repo = new UsersRepository('users.json')

  // await repo.create({ email: 'elfgodd@elfgodd.com', password: '12345' })

  // const users = await repo.getAll()

  // const user = await repo.getOne('918b2447')
  // const user = await repo.getOne('xxx') // undefined, user doesn't exists

  // await repo.delete('5985b553')
  // await repo.delete('918b2447')

  // await repo.update('a89fa519', { password: '54321' })
  // await repo.update('1235gg633', { password: '54321' })

  // const user = await repo.getOneBy({
  //   email: 'elfgodd@elfgodd.com',
  //   // password: '54321',
  //   "password": "11111"
  // })

  const user = await repo.getOneBy({
    // id: 'a89fa519',
    id: '111111111',
  })

  // const user = await repo.getOneBy({
  //   userDontExist: 'userDontExist',
  // })

  // console.log(users)
  console.log(user)
}

test()
```

```javascript
// Rather than exporting the entire class of users repository,
const UsersRepository = require('./users')
const repo = new UsersRepository('users.json')

// we're going to instead export an instance of the class
module.exports = UsersRepository('users.json')
```

## 12. 14 Signup Validation Logic