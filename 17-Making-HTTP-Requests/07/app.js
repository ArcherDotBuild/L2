// ******************************
// Refactoring Fetch Chains ******************************
// Example 1

console.log('Refactoring Fetch Chains')

const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

  return response.json()
}

const printPlanets = (data) => {
  console.log('Loaded 10 more planets')
  for (let planet of data.results) {
    console.log(planet.name)
  }

  // Long way
  // const p = new Promise((resolve, reject) =>{
  //   resolve(data)
  // })
  // return p

  // Easier way
  return Promise.resolve(data.next)
}

// const fetchNextPlanets = (url) => {
//   return fetch(url)
// }
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
  return fetch(url)
}

// fetch('https://swapi.dev/api/planets/')
fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log('SOMETHING WENT WRONG WITH FETCH!')
    console.log(err)
  })
