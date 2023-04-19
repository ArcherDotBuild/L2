// ******************************
// Returning Promises from Functions ******************************
// Example 1
console.log('Returning Promises from Functions')
console.log('\n')

/*
Simulating making a request and having to wait for that request
to come back. It's eventually resolved or rejected
*/
// const willgetYouADog = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random()
//     if (rand < 0.5) {
//       resolve()
//     } else {
//       reject()
//     }
//   }, 5000)
// })
// willgetYouADog.then(() => {
//   console.log('YAY WE GOT A DOG!!!!')
// })
// willgetYouADog.catch(() => {
//   console.log(':( NO DOG')
// })

// Example 2
/*
return a promise from a function instead of just making one
*/
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random()
      if (rand < 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 5000)
  })
}
makeDogPromise()
  .then(() => {
    console.log('YAY WE GOT A DOG!!!!')
  })
  .catch(() => {
    console.log(':( NO DOG')
  })
