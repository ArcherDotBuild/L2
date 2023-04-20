// ******************************
// Resolving Rejecting with Values ******************************
// Example 1
console.log('Resolving Rejecting with Values')
console.log('\n')

/*
Fake request function

How we can reject and resolve with a value we can pass information
into the resolve or reject calls
*/

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random()
//       if(rand < 0.3) {
//         reject()
//       } else {
//       resolve()
//       }
//     }, 3000)
//   })
// }

// fakeRequest().then(() => {
//   console.log('REQUEST WORKED!');
// })
// .catch(() => {
//   console.log('REQUEST FAILED!');
// })

// **********
// Example 2
// Let's start with reject

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random()
//       if (rand < 0.3) {
//         reject({ status: 404 })
//       } else {
//         resolve()
//       }
//     }, 3000)
//   })
// }

// fakeRequest()
//   .then(() => {
//     console.log('REQUEST WORKED!')
//   })
//   .catch((err) => {
//     console.log('REQUEST FAILED!')
//     console.log(err.status)
//   })

// **********
// Example 3
// Pretending to be an HTTP request
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          {
            id: 1,
            username: 'ElfGodd',
          },
          { id: 2, username: 'Josue' },
        ],
        '/about': ' This is the about page',
      }
      const data = pages[url]
      if (data) {
        resolve({ status: 200, data })
      } else {
        reject({ status: 404 })
      }
    }, 1000)
  })
}

fakeRequest('/about')
  .then((res) => {
    console.log('Status Code:', res.status)
    console.log('Data:', res.data)
    console.log('REQUEST WORKED!')
  })
  .catch((err) => {
    console.log('REQUEST FAILED!')
    console.log(err.status)
  })

console.log('\n');
fakeRequest('/users')
  .then((res) => {
    console.log('Status Code:', res.status)
    console.log('Data:', res.data)
    console.log('REQUEST WORKED!')
  })
  .catch((err) => {
    console.log('REQUEST FAILED!')
    console.log(err.status)
  })

console.log('\n')
fakeRequest('/doggs')
  .then((res) => {
    console.log('Status Code:', res.status)
    console.log('Data:', res.data)
    console.log('REQUEST WORKED!')
  })
  .catch((err) => {
    console.log('REQUEST FAILED!')
    console.log(err.status)
  })
