// Helper function SEARCH
// const fetchData = async() => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: apikey,
//       s: 'avengers'
//     },
//   })

//   console.log(response.data);
// }

// Search the API automatically when our application first starts
// fetchData()

// Helper function ID
// const fetchData = async(searchTerm) => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: apikey,
//       i: 'tt0848228'
//     },
//   })

//   console.log(response.data);
// }

// fetchData()

// Helper function
const fetchData = async(searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      s: searchTerm,
    },
  })

  console.log(response.data);
}
const input = document.querySelector('input')
input.addEventListener('input', (event) => {
  // Whatever the user just typed into that input
  fetchData(event.target.value)
})



