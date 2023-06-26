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
      s: 'avengers'
    },
  })

  console.log(response.data);
}

fetchData()
```

**XHR** request will show only the requests that my JavaScript code have issued
