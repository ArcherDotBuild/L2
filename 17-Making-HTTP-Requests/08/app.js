// ******************************
// An Even Better Way Axios ******************************
// Example 1

console.log('An Even Better Way Axios')

// Run in the Chrome browser
// const res = axios.get('https://swapi.dev/api/planets/')
// res

axios.get('https://swapi.dev/api/planets11/').then((response) => {
  console.log(response.data)
}).catch((err) => {
  console.log('IN CATCH CALLBACK!!!');
  console.log(err);
})