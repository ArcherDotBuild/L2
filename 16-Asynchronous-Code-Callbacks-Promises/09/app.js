// ******************************
// The Delights of Promise Chaining ******************************
// Example 1
console.log('The Delights of Promise Chaining')
console.log('\n')

/*
Fake request function

How we can reject and resolve with a value we can pass information
into the resolve or reject calls
*/

// **********
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
        '/users/1': {
          id: 1,
          username: 'Goku',
          upvotes: 360,
          city: 'Barranquilla',
          topPostId: 454321
        },
        'users/5' : {
          id: 5,
          username: 'Vegeta',
          upvotes: 360,
          city: 'Bogota',
          
        }
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
