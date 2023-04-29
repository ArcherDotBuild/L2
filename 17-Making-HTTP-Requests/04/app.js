// ******************************
// XMLHttpRequests Chaining Requests ******************************
// Example 1

console.log('XMLHttpRequests Chaining Requests')

// Nested callbacks

const firstReq = new XMLHttpRequest()

firstReq.addEventListener('load', function () {
  console.log('First Request WORKED!!!')

  const data = JSON.parse(this.responseText)
  // console.log(data)
  // console.log(data.results[0]);
  // console.log(data.results[0].films[0])
  const filmURL = data.results[0].films[0]
  const filmReq = new XMLHttpRequest()
  filmReq.addEventListener('load', function() {
    console.log('Second Request WORKED!!!')
    console.log(this);
    const filmData = JSON.parse(this.responseText)
    console.log('filmData: ', filmData)
  })
  filmReq.addEventListener('error', function(e) {
    console.log('ERROR!!', e);
  })
  filmReq.open('GET', filmURL)
  filmReq.send()

  // for(let planet of data.results) {
  //   console.log(planet.name);
  // }
})
firstReq.addEventListener('error', function () {
  console.log('ERROR!!!')
})
firstReq.open('GET', 'https://swapi.dev/api/planets/')
firstReq.send()
console.log('Request Sent!')
