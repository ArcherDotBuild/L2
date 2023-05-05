// ******************************
// The Await Keyword ******************************
// Example 1

console.log('The Await Keyword')

// function getPlanets() {
//   return axios.get('https://swapi.dev/api/planets/')
// }

// getPlanets().then((res) => {
//   console.log(res.data);
// })

// Example 2
// Easier way

// async function getPlanets() {
//   const res = axios.get('https://swapi.dev/api/planets/')
//   // We get undefined, There is no data property because
//   // this is a promise that has retuned and it's not yet resolved
//   console.log(res.data);
// }

// getPlanets()

// Example 3
// Easier way
async function getPlanets() {
  // Putting the await, JavaScript will wait. It will not move on until this promise is resolved
  // So the promise will be resolved that value is resolved with that's normally passed to .then
  const res = await axios.get('https://swapi.dev/api/planets/')
  console.log(res.data)
}

getPlanets()