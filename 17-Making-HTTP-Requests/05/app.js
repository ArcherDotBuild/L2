// ******************************
// A Better Way Fetch ******************************
// Example 1

console.log('A Better Way Fetch')

// fetch('https://swapi.dev/api/planets/').then((response) => {
// fetch('https://swapi.dev/api/planets9999/')
//   .then((response) => {
//     console.log(response)

//     // This response takes time
//     // console.log(response.json())
//     if (!response.ok) {
//       console.log('ERROR NOT STATUS: 200', response.status)
//     } else {
//       response.json().then((data) => {
//         // console.log(data);
//         for (let planet of data.results) {
//           console.log(planet.name)
//         }
//       })
//     }
//   })
//   .catch((err) => {
//     console.log('SOMETHING WHEN WRONG WIT FETCH!')
//     console.log(err)
//   })

// Example 2
// Throwing error to the .catch
fetch('https://swapi.dev/api/planets9999/')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Status Code Error: ${response.status}`)
    } else {
      response.json().then((data) => {
        // console.log(data);
        for (let planet of data.results) {
          console.log(planet.name)
        }
      })
    }
  })
  .catch((err) => {
    console.log('SOMETHING WHEN WRONG WIT FETCH!')
    console.log(err)
  })

// Compare FETCH with XMLHttpRequest()
// const firstReq = new XMLHttpRequest()

// firstReq.addEventListener('load', function () {
//   console.log('First Request WORKED!!!')

//   const data = JSON.parse(this.responseText)
//   const filmURL = data.results[0].films[0]
//   const filmReq = new XMLHttpRequest()
//   filmReq.addEventListener('load', function() {
//     console.log('Second Request WORKED!!!')
//     console.log(this);
//     const filmData = JSON.parse(this.responseText)
//     console.log('filmData: ', filmData)
//   })
//   filmReq.addEventListener('error', function(e) {
//     console.log('ERROR!!', e);
//   })
//   filmReq.open('GET', filmURL)
//   filmReq.send()

// })
// firstReq.addEventListener('error', function () {
//   console.log('ERROR!!!')
// })
// firstReq.open('GET', 'https://swapi.dev/api/planets/')
// firstReq.send()
// console.log('Request Sent!')
