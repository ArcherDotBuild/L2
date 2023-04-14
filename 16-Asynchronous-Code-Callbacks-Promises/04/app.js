// ******************************
// How Asynchronous Callbacks Actually Work ******************************
// Example 1
console.log('How Asynchronous Callbacks Actually Work')
console.log('\n')

console.log('I print first!')
setTimeout(() => {
  console.log('I print after 3 seconds')
}, 3000)
console.log('I print second!')
