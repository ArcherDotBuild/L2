const { forEach, map } = require('./index')

const test = (desc, fn) => {
  console.log('----', desc)
  try {
    fn()
  } catch (err) {
    console.log(err.message)
  }
}

test('The forEach function', () => {
  let sum = 0
  forEach([1, 2, 3], (value) => {
    sum += value
  })

  // if (sum !== 7) { // This throws an error
  if (sum !== 6) {
    throw new Error('Expected summing array to equal 6')
  }
})

test('The map funciton', () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2
  })
  //  result === [2, 4, 6]

  if (result[0] !== 2) {
    throw new Error(`Expected to find 2, but found ${result[0]}`)
  }

  if (result[1] !== 4) {
    throw new Error(`Expected to find 4, but found ${result[1]}`)
  }

  if (result[2] !== 6) {
    throw new Error(`Expected to find 6, but found ${result[2]}`)
  }
})
