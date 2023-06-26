// Helper function
const fetchData = async() => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: apikey,
      s: 'avengers'
    },
  })

  console.log(response.data);
}

fetchData()

