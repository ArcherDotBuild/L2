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

// fetchData()

// Helper function ID
const fetchData = async() => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      i: 'tt0848228'
    },
  })

  console.log(response.data);
}

fetchData()

