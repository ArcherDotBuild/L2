// ******************************
// The Async Keyword ******************************
// Example 1

console.log('The Async Keyword')

// Run the functions in the Browser console
// function greet() {
//   return 'HELLO!!!'
// }
// greet()

// Whatever the value that i'm returning is, the promise that will
// be returned from greetAsync() will be resolved with that value
// async function greetAsync() {
//   return 'HELLO async!!!'
// }

// greetAsync().then((val) => {
//   console.log('PROMISE RESOLVED WITH: ', val);
// })

// Example 2
// Run the functions in the Browser console
// async function add(x, y) {
//   return x + y
// }
// add()

/*
How do we return a promise that is not resolved?

- If we want to return a rejected promise, all that we do is 
raise an exeption. So if we throw an exception, we throw an error,
that promise will be rejected
*/
async function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw ' X and Y must be numbers!'
  }
  return x + y
}
add(3, 2)
add(3, 'a')
add('e', 'r')
  .then((val) => {
    console.log('PROMISE RESOLVED WITH: ', val)
  })
  .catch((err) => {
    console.log('PROMISE REJECTED WITH: ', err)
  })

console.log('\n')
add(2, 3)
  .then((val) => {
    console.log('PROMISE RESOLVED WITH: ', val)
  })
  .catch((err) => {
    console.log('PROMISE REJECTED WITH: ', err)
  })

// Example 3
// Manual Promise creation
// function add(x, y) {
//   return new Promise((resolve, rejected) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       rejected(' X and Y must be numbers!')
//     }
//     resolve(x + y)
//   })
// }

// add(6, 7).then((val) => {
//     console.log('PROMISE RESOLVED WITH: ', val)
// }).catch((err) => {
//       console.log('PROMISE REJECTED WITH: ', err)
// })
// add('r', 7)
//   .then((val) => {
//     console.log('PROMISE RESOLVED WITH: ', val)
//   })
//   .catch((err) => {
//     console.log('PROMISE REJECTED WITH: ', err)
//   })
