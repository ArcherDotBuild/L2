// ******************************
// Introducing Promises ******************************
// Example 1
console.log('Introducing Promises')
console.log('\n')

// When we create a Promise, we pass in a function
// And this function has two parameters
// This two parameters are functions
const willgetYouADog = new Promise((resolve, reject) => {
  // This Promise is pending [[PromiseState]]:"pending"
  // It has not been resolved or rejected
  // It has not been fulfilled or it has not been broken
})
console.log(willgetYouADog)
