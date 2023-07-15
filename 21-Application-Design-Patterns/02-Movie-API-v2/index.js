const autoCompleteConfig = {
  renderOption(movie) {
    const imSrc = movie.Poster === 'N/A' ? '' : movie.Poster
    return `
      <img src="${imSrc}" />
      ${movie.Title} ${movie.Year}
    `
  },
  inputValue(movie) {
    return movie.Title
  },
  async fetchData(searchTerm) {
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
  },
}

createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#left-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden')
    onMovieSelect(movie, document.querySelector('#left-summary'), 'left')
  },
})
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#right-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden')
    onMovieSelect(movie, document.querySelector('#right-summary'), 'right')
  },
})

let leftMovie
let rightMovie
const onMovieSelect = async (movie, summaryElement, side) => {
  console.log(movie)
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      i: movie.imdbID,
    },
  })

  // console.log(response.data)
  summaryElement.innerHTML = movieTemplate(response.data)

  if(side === 'left') {
    leftMovie = response.data
  } else {
    rightMovie = response.data
  }

  if(leftMovie && rightMovie) {
    runComparison()
  }
}

const runComparison = () => {
  console.log('Time for comparison');
}

const movieTemplate = (movieDetail) => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieDetail.Poster}" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieDetail.Title}</h1>
          <h4>${movieDetail.Genre}</h4>
          <p>${movieDetail.Plot}</p>
        </div>
      </div>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>
    <article class="notification is-primary">
      <p class="title">${movieDetail.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>
        <article class="notification is-primary">
      <p class="title">${movieDetail.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `
}
