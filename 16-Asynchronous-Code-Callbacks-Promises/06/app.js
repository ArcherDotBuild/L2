// ******************************
// Introducing Promises ******************************
// Example 1
console.log('Introducing Promises')
console.log('\n')

// // When we create a Promise, we pass in a function
// // And this function has two parameters
// // This two parameters are functions
// const willgetYouADog = new Promise((resolve, reject) => {
//   // This Promise is pending [[PromiseState]]:"pending"
//   // It has not been resolved or rejected
//   // It has not been fulfilled or it has not been broken
// })
// console.log(willgetYouADog)

// Example 2
// const willgetYouADog = new Promise((resolve, reject) => {
//   // This Promise is rejected, [[PromiseState]]:"rejected"
//   // reject()
// })
// console.log(willgetYouADog)

// Example 3
// const willgetYouADog = new Promise((resolve, reject) => {
//   // This Promise is resolved, [[PromiseState]]:"fulfilled"
//   resolve()
// })
// console.log(willgetYouADog)

// Example 4
// const willgetYouADog = new Promise((resolve, reject) => {
//   const rand = Math.random()
//   if(rand < 0.5) {
//     resolve()
//   } else {
//     reject()
//   }
// })

// Run willgetYouADog variable in the browser console
// to test this functionality and refresh the window ctrl + r

// Example 5
const willgetYouADog = new Promise((resolve, reject) => {
  const rand = Math.random()
  if (rand < 0.5) {
    resolve()
  } else {
    reject()
  }
})
willgetYouADog.then(() => {
  console.log('resolved promise')
})
willgetYouADog.catch(() => {
  console.log('rejected promise')
})
