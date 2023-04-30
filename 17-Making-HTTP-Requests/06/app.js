// ******************************
// Chaining Fetch Requests ******************************
// Example 1

console.log('Chaining Fetch Requests')

// Throwing error to the .catch
fetch('https://swapi.dev/api/planets/')
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`)

    return response.json()
  })
  .then((data) => {
    // console.log(data);
    // console.log(data.results[0].films[0])

    console.log('FETCHED ALL PLANETS (first 10)')
    const filmURL = data.results[0].films[0]
    return fetch(filmURL)
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error ${response.status}`)

    return response.json()
  })
  .then((data) => {
    console.log('FETCHED FIRST FILM, based off of first planet')
    // console.log(data);
    console.log(data.title)
  })
  .catch((err) => {
    console.log('SOMETHING WHEN WRONG WIT FETCH!')
    console.log(err)
  })
