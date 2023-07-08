## 21-Application-Design-Patterns

**folder 01**

## 1. 02 Starter Kit Setup

## 2. 03 Big Challenges

#### OMDb API

The Open Movie Database
http://omdbapi.com/

## 3. 04 Fetching Movie Data

```javascript
const fetchData = async () => {
  // The first arg to the Axios.get func is going to be the URL
  // we want to retrieve whenever we make a network request that is
  // an asynchronous operation and we essentially have to wait before
  // we get some kind of response to continue running the lines of code
  // directly underneath and that's why we have the (await) keyword

  // We're going to eventually get back a response object that is an
  // object that represents all the information related to this request
  // in response we just made. And inside of that response object is
  // the data that we should be getting back from our API
  const response = await axios.get('http://www.omdbapi.com/', {
    // Automated functionality inside of Axios second argument object
    // inside of this, we're going to list out all the different
    // query string paramenters that we want to pass along with the
    // request and appended to the end of that URL
    params: {
      apikey: apikey,
      s: 'avengers',
    },
  })

  console.log(response.data)
}

fetchData()
```

**XHR** request will show only the requests that my JavaScript code have issued

## 4. 05 Fetching a Single Movie

```javascript
// Helper function ID
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      i: 'tt0848228',
    },
  })

  console.log(response.data)
}

fetchData()
```

## 5. 07 Searching the API on Input Change

```javascript
const input = document.querySelector('input')
input.addEventListener('input', (event) => {
  // Whatever the user just typed into that input
  fetchData(event.target.value)
})
```

## 5. 08 Delaying Search Input

**Debouncing an input**: Waiting for some time to pass after the last event to actually do something.

Any time we call a **setTimeout** we get back an intenger value, these numbers are essentially identifiers and they identify the timer that we just created. If we want to, we can call the **clearTimeout** function to stop that pending timer and prevent that function from being called.

```javascript
setTimeout(() => {
  console.log('hi there')
}, 10000)

clearTimeout(1)
```

```javascript
const input = document.querySelector('input')

let timeoutId
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(() => {
    // Whatever the user just typed into that input
    fetchData(event.target.value)
  }, 1000)
}
input.addEventListener('input', onInput)
```

clearTimeout(1), means look at the timer that was created with the id of 1. Stop that running timer and don't call that function ever even after ten seconds has pass.

## 6. 10 Implementing a Reusable Debounce

```javascript
const input = document.querySelector('input')

const debounce = (func, delay = 1000) => {
  let timeoutId
  return (...arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, arg)
    }, delay)
  }
}

const onInput = (event) => {
  fetchData(event.target.value)
}
input.addEventListener('input', debounce(onInput, 1000))
```

## 7. 11 Extracting Utility Functions

## 8. 12 Awaiting Async Functions

```javascript
const onInput = async (event) => {
  const movies = await fetchData(event.target.value)
  console.log(movies);
  }
}
```

## 9. 13 Rendering Movies

```javascript
const onInput = async (event) => {
  const movies = await fetchData(event.target.value)

  for (let movie of movies) {
    const div = document.createElement('div')

    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `

    document.querySelector('#target').appendChild(div)
  }
}
```

## 10. 14 Handling Errored Responses

```javascript
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      s: searchTerm,
    },
  })
  // If there is an error, let's just return an empty array and essentially say
  // we didn't get any movies whatsoever to show to the user
  if (response.data.Error) {
    return []
  }

  return response.data.Search
}
```

## 11. 15 Opening a Menu

```html
<div class="container">
  <div class="dropdown is-active">
    <input />
    <div class="dropdown-menu">
      <div class="dropdown-content">
        <a class="dropdown-item">Movie #1</a>
        <a class="dropdown-item">Movie #2</a>
        <a class="dropdown-item">Movie #3</a>
      </div>
    </div>
  </div>
  <div id="target"></div>
</div>
```

## 12. 17 Moving HTML Generation

```javascript
root.innerHTML = `
  <label><b>Search For a Movie</b></label>
  <input class="input" />
  <div class="dropdown is-active">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`
```

## 13. 19 Repairing References

```javascript
const onInput = async (event) => {
  const movies = await fetchData(event.target.value)

  dropdown.classList.add('is-active')
  for (let movie of movies) {
    const option = document.createElement('a')

    option.classList.add('dropdown-item')
    option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `

    resultsWrapper.appendChild(option)
  }
}
```

## 14. 20 Handling Broken Images

```javascript
const imSrc = movie.Poster === 'N/A' ? '' : movie.Poster
```

## 15. 21 Automatically Closing the Dropdown

This will tell us what gets clicked in the page

```javascript
document.addEventListener('click', (event) => {
  console.log(event.target)
  // Removes the dropdown when we click outside the dropdown
  if (!root.contains(event.target)) {
    dropdown.classList.remove('is-active')
  }
})
```

## 16. 22 Handling Empty Responses

```javascript
if (!movies.length) {
  dropdown.classList.remove('is-active')
  return
}
```

## 17. 23 Handling Movie Selection

```javascript
option.addEventListener('click', () => {
  dropdown.classList.remove('is-active')
  input.value = movie.Title
})
```

## 18. 24 Making a Followup Request

```javascript
const onMovieSelect = async (movie) => {
  console.log(movie)

  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      i: movie.imdbID,
    },
  })

  console.log(response.data)
}
```

## 19. 25 Rendering an Expanded Summary

```javascript
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
  `
}
```

# Phase 2 of our Movie APP Api

## 20. 28 Making the Autocomplete Reusable
