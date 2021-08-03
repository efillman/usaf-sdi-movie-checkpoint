import React, {useState, useEffect} from "react";
import { withRouter } from "react-router-dom";
import DataHandlerComponent from './DataHandlerComponent';

const MovieComponent = (props) => {
  const [ data, setData ] = useState([])
  const [ reviews, setReviews ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ reviewPostData, setreviewPostData ] = useState({})
  const [ reviewPostResponse, setReviewPostResponse ] = useState([])

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    dataHandler.postReview(reviewPostData).then((data) => setReviewPostResponse(data)).then(() => setIsLoading(false))
  }, [reviewPostData]);

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    const movieId = props.match.params.movieid;
    if (movieId) {
      dataHandler.getMovie(movieId)
      .then((data) => setData(data))
      .then(() => setIsLoading(false))
      dataHandler.getReviews(movieId)
      .then((data) => setReviews(data))
      .then(() => setIsLoading(false))
    }
    // Update the document title using the browser API
    // const dataHandler = new DataHandlerComponent();
    // dataHandler.getMovies().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getMovie(1).then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getSearch("Birds").then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getReviews(1).then((data) => setData(data)).then(() => setIsLoading(false))
    // const reviewData = {email:"test@test.com",movieId:1,reviewTitle:"test test",reviewText:"test test test"};
    // dataHandler.postReview(reviewData).then((data) => setData(data)).then(() => setIsLoading(false))
    // const registerData = {email:"test@test.com",password:"password"};
    // dataHandler.postRegister(registerData).then((data) => setData(data)).then(() => setIsLoading(false))

  }, [props.match.params.movieid]);

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const outputText = () => {
    return (
      <article className="col">
        <div className="row">
          <div className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img src={data.poster} className="card-img-top" alt={data.title}></img>
          </div>
          <div className="col ms-3">
            <div className="row">
              <div className="col">
                <h2>{data.title}</h2>
                <h5>Released {data.released}</h5>
                <p>{data.genre} | {data.actors}</p>
                <p>{data.plot}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Reviews</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Submit Review</h3>
              </div>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <section className="row mt-3">
    {isLoading ? loadingText() : outputText()}
  </section>
  )
}

export default withRouter(MovieComponent)