
//Runs the requsted API and returns a promise with the data
class DataHandlerComponent {

  //dataHandler.getMovies().then((data) => setData(data)).then(() => setIsLoading(false))
  // GET http://localhost:3001/movies - returns a list of all movies
  getMovies = async () => {
    const response = await fetch('http://localhost:3001/movies')
    return await response.json()
  }

  //dataHandler.getMovie(1).then((data) => setData(data)).then(() => setIsLoading(false))
  // GET http://localhost:3001/movies/:id - returns details of a specific movie
  getMovie = async (id) => {
    const response = await fetch(`http://localhost:3001/movies/${id}`)
    return await response.json()
  }

  //dataHandler.getSearch("Birds").then((data) => setData(data)).then(() => setIsLoading(false))
  // GET http://localhost:3001/search?query=Birds - returns a list of movies filtered on titles matching the given query
  getSearch = async (query) => {
    const response = await fetch(`http://localhost:3001/search?query=${query}`)
    return await response.json()
  }

  //dataHandler.getReviews(1).then((data) => setData(data)).then(() => setIsLoading(false))
  // GET http://localhost:3001/reviews/:movieId - returns all reviews for a given movie
  getReviews = async (id) => {
    const response = await fetch(`http://localhost:3001/reviews/${id}`)
    return await response.json()
  }

  // const reviewData = {email:"test@test.com",movieId:1,reviewTitle:"test test",reviewText:"test test test"};
  // dataHandler.postReview(reviewData).then((data) => setData(data)).then(() => setIsLoading(false))
  // POST http://localhost:3001/reviews - creates a new review, returns success status in JSON response
  //data {"email":"test@test.com","movieId":1,"reviewTitle":"test test","reviewText":"test test test"}
  postReview = async (data) => {
    if (data.email && data.movieId && data.reviewTitle && data.reviewText) {
      try {
        const response = await fetch('http://localhost:3001/reviews', {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        return await response.json()
      } catch (error) {
        console.log('Request failed', error)
      }
    }
  }

  // const registerData = {email:"test@test.com",password:"password"};
  // dataHandler.postRegister(registerData).then((data) => setData(data)).then(() => setIsLoading(false))
  // POST http://localhost:3001/register - creates a new user, returns success status in JSON response
  //data = {"email": "test@test.com", "password": "password"}
  postRegister = async (data) => {
    if (data.email && data.password) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'post',
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(data)
        })
        return await response.json()
      } catch (error) {
        console.log('Request failed', error)
      }
    }
  }
}

export default DataHandlerComponent