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
          { id: 5, username: 'Josue' },
        ],
        '/users/1': {
          id: 1,
          username: 'ElfGodd',
          upvotes: 360,
          city: 'Barranquilla',
          topPostId: 454321,
        },
        '/users/5': {
          id: 5,
          username: 'Josue',
          upvotes: 571,
          city: 'Bogota',
        },
        '/posts/454321': {
          id: 454321,
          title: 'Ladies & Gentlemen, may I introduce my pet pig, Piggy',
        },
        '/about': 'This is the about page',
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

// trigguer the error with this BAD URL
// fakeRequest('/user').then((res) => {

// fakeRequest('/users').then((res) => {
//   const id = res.data[0].id
//   // console.log(id);
//   fakeRequest(`/users/${id}`)
//     .then((res) => {
//       const postId = res.data.topPostId
//       console.log(res)
//       console.log(res.data.username)
//       // fakeRequest(`/posts/${res.data.topPostId}`).then((res) => {
//       fakeRequest(`/posts/${postId}`).then((res) => {
//         console.log(res)
//         console.log(res.data.title)
//       })
//     })
//     // This catch only works for the first request
//     .catch((err) => {
//       console.log('OH NO!', err)
//     })
// })

// Example 2
// Putting all the .then on the same level
// Using single .catch to catch all the errors, clear syntax

fakeRequest('/users')
  .then((res) => {
    console.log(res);
    const id = res.data[0].id
    return fakeRequest(`/users/${id}`)
  })
  .then((res) => {
    console.log(res)
    const postId = res.data.topPostId
    return fakeRequest(`/posts/${postId}`)
  })
  .then((res) => {
    console.log(res)
    console.log(res.data.title);
  })
  .catch((err) => {
    console.log('OH NO!', err);
  })

/*
fakeRequest('/users').then((res) => {
  console.log(res)
  console.log('\n')
  console.log(res.data)
  console.log('\n')
  console.log(res.status)

  console.log('\n')
  console.log(res.data[0])
  console.log(res.data[1])

  console.log('\n')
  console.log(res.data[0].id)
  console.log(res.data[0].username)
  console.log(res.data[1].id)
  console.log(res.data[1].username)

  console.log('\n')
  console.log(`id: ${res.data[0].id}, username: ${res.data[0].username}`)
  console.log(`id: ${res.data[1].id}, username: ${res.data[1].username}`)
})
*/
