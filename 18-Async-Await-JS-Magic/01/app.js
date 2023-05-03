// ******************************
// A Quick Overview of Async Functions ******************************
// Example 1

console.log('A Quick Overview of Async Functions')

// function getData() {
//   const data = axios.get('https://swapi.dev/api/planets/')
//   console.log(data)
// }
// getData()

// Example 2
function getData() {
  const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
    console.log(data)
  })
  console.log(data)
}
getData()
