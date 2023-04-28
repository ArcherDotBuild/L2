// ******************************
// XMLHttpRequest ******************************
// Example 1

console.log('XMLHttpRequest')

// const firstReq = new XMLHttpRequest()
// firstReq.addEventListener('load', () => {
//   console.log('IT WORKED!!!');
// })
// firstReq.addEventListener('error', () => {
//   console.log('ERROR!!!');
// })
// firstReq.open('GET', 'https://swapi.dev/api/planets/')
// firstReq.send()
// console.log('Request Sent!');

// console.log('\n');
// console.log(firstReq);

// Check the respnse text data in the Google browser console
// firstReq.responseText

// ********************
// Manipulating data
const firstReq = new XMLHttpRequest()

firstReq.addEventListener('load', function () {
  console.log('IT WORKED!!!')
  // console.log(firstReq.responseText)

  // Converting JSON to JavaScript
  const data = JSON.parse(this.responseText)
  console.log(data)

  for(let planet of data.results) {
    console.log(planet.name);
  }
})
firstReq.addEventListener('error', function () {
  console.log('ERROR!!!')
})
firstReq.open('GET', 'https://swapi.dev/api/planets/')
firstReq.send()
console.log('Request Sent!')
