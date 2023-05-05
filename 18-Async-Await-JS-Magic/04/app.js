// ******************************
// Error Handling in Async Functions ******************************
// Example 1

console.log('Error Handling in Async Functions')

// async function getPlanets() {
//   const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
//   console.log(res.data)
// }

// .catch is more of a backup to catch multiple potential errors
// getPlanets().catch((err) => {
//   console.log('IN CATCH!!!');
//   console.log(err);
// })

// ********************
// Example 2
// We have another option, with the same behavior
// if you don't want to have to use a .catch and pass a callback

async function getPlanets() {
  // Try Catch, it's more specific to what we're trying to do
  // and we can be more detailed in how we handle it
  try {
    const res = await axios.get('https://swapi.dev/api/planetklsajdalksts/')
    console.log(res.data)
  } catch (e) {
    console.log('IN CATCH!!!')
    console.log(e)
  }
}

getPlanets()
