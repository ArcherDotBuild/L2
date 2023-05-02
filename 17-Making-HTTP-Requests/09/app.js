// ******************************
// Sequential Axios Requests ******************************
// Example 1

console.log('Sequential Axios Requests')

// axios
//   .get('https://swapi.dev/api/planets/')
//   // If i just want the data i can use the destructuring her to grab the data out
//   .then(({ data }) => {
//     console.log(data)
//     for (let planet of data.results) {
//       console.log(planet.name)
//     }
//     // I could make a second request this way
//     axios.get(data.next).then(({ data }) => {
//       console.log(data)
//       for (let planet of data.results) {
//         console.log(planet.name)
//       }
//     })
//   })

// ********************
// Example 2
/*
As we've seen, we can change .then by returning a promise so i don't have to
nest the .then like before
*/

// axios.get('https://swapi.dev/api/planets/').then(({ data }) => {
//   console.log(data)
//   for (let planet of data.results) {
//     console.log(planet.name)
//   }
//   return axios.get(data.next)
// })
// .then(({ data }) => {
//   console.log(data)
//   for (let planet of data.results) {
//     console.log(planet.name)
//   }
// }).catch((err) => {
//   console.log('ERROR!!', err);
// })

// ********************
// Example 3
/*
Refactor this in the same way that we created this nice chain of promises
where we just call a function each time and pass in a function name each
time to .then instead of having to use these inlie anonymous functions
*/

// fetchNextPlanets is just returning axios.get of the URL it returns
// the entire promise and that promise is resolved with the entire response

const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return axios.get(url)
}

// We need to manually resolve our promise, return a resolved promise
// which then calls the .then that is the ensuing .then

const printPlanets = ({ data }) => {
  console.log(data)
  for (let planet of data.results) {
    console.log(planet.name)
  }
  return Promise.resolve(data.next)
}

fetchNextPlanets()
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log('ERR: ', err);
  })