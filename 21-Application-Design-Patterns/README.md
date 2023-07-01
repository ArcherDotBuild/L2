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
  if(timeoutId) {
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
    if(timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      func.apply(null, arg)
    }, delay)
  }
}

let timeoutId
const onInput = (event) => {
  fetchData(event.target.value)
}
input.addEventListener('input', debounce(onInput, 1000))
```

## 7. 11 Extracting Utility Functions