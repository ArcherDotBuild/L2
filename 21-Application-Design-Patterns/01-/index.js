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

  if (response.data.Error) {
    return []
  }
  // console.log(response.data);
  return response.data.Search
}

const root = document.querySelector('.autocomplete')
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`

const input = document.querySelector('input')
const dropdown = document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

const onInput = async (event) => {
  const movies = await fetchData(event.target.value)

  if (!movies.length) {
    dropdown.classList.remove('is-active')
    return
  }

  resultsWrapper.innerHTML = ''
  dropdown.classList.add('is-active')
  for (let movie of movies) {
    const option = document.createElement('a')
    const imSrc = movie.Poster === 'N/A' ? '' : movie.Poster

    option.classList.add('dropdown-item')
    option.innerHTML = `
      <img src="${imSrc}" />
      ${movie.Title}
    `

    resultsWrapper.appendChild(option)
  }
}
input.addEventListener('input', debounce(onInput, 1000))

document.addEventListener('click', (event) => {
  console.log(event.target)
  if (!root.contains(event.target)) {
    dropdown.classList.remove('is-active')
  }
})
