const assert = require('assert')
const { forEach, map } = require('./index')

it('The forEach function', () => {
  let sum = 0
  forEach([1, 2, 3], (value) => {
    sum += value
  })

  // Optionally we can pass a third argument of an error message
  assert.strictEqual(sum, 6)
  // assert.strictEqual(sum, 7, 'Expected forEach to sum the array')
})

it('The map funciton', () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2
  })

  // assert.deepStrictEqual(result, [2, 4, 7]) // this throws an error
  assert.deepStrictEqual(result, [2, 4, 6])
})