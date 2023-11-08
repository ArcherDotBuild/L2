const { forEach } = require('./index')

let sum = 0
forEach([1, 2, 3], (value) => {
  //  sum = sum + value
  sum += value
})

console.log(sum)

if(sum !== 6) {
  throw new Error('Expected summing array to equal 6')
}

// This will throw an error
// if (sum !== 7) {
//   throw new Error('Expected summing array to equal 6')
// }
