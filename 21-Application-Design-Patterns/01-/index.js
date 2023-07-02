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
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      s: searchTerm,
    },
  })

  // console.log(response.data);
  return response.data.Search
}
const input = document.querySelector('input')

let timeoutId
const onInput = async (event) => {
  const movies = await fetchData(event.target.value)
  // console.log(movies);
  
  for(let movie of movies) {
    const div = document.createElement('div')

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `

    document.querySelector('#target').appendChild(div)
  }
}
input.addEventListener('input', debounce(onInput, 1000))
