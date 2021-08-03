import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import DataHandlerComponent from "./DataHandlerComponent";
import { useHistory } from "react-router-dom";

const MovieComponent = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewPostData, setReviewPostData] = useState({});
  const [reviewPostResponse, setReviewPostResponse] = useState([]);
  const [updateReviews, setUpdateReviews] = useState(true);
  const [reviewFrom, setReviewFrom] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [searchQuery, setSearchQuery] = useState(false);

  useEffect(() => {
    if (props.searchQuery) {
      setSearchQuery(true);
    }
  }, [props.searchQuery]);

  //post review use effect
  useEffect(() => {
    if (reviewPostData) {
      const dataHandler = new DataHandlerComponent();
      dataHandler
        .postReview(reviewPostData)
        .then((data) => setReviewPostResponse(data))
        .then(() => setUpdateReviews(true))
        .then(() => setIsLoading(false));
    }
  }, [reviewPostData]);

  //get reviews use effect
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    const movieId = props.match.params.movieid;
    dataHandler
      .getReviews(movieId)
      .then((data) => setReviews(data))
      .then(() => setIsLoading(false));
  }, [reviewPostResponse, props.match.params.movieid]);

  //get movie data use effect
  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    const movieId = props.match.params.movieid;
    if (movieId) {
      dataHandler
        .getMovie(movieId)
        .then((data) => setData(data))
        .then(() => setIsLoading(false));
    }
  }, [props.match.params.movieid]);

  //loading screen
  const loadingText = () => {
    return <div>Loading</div>;
  };

  const outputReviews = () => {
    if (!reviews) {
      return (
        <div className="row">
          <div className="col">No Reviews Found</div>
        </div>
      );
    }
    return reviews.map((review) => {
      return (
        <article className="card col-xs-12 m-1 p-1">
          <h6>{`Title: ${review.reviewTitle}`}</h6>
          <p>{`From: ${review.email}`}</p>
          <p>{`Review: ${review.reviewText}`}</p>
        </article>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewData = {
      email: reviewFrom,
      movieId: parseInt(props.match.params.movieid),
      reviewTitle: reviewTitle,
      reviewText: reviewText,
    };
    setReviewPostData(reviewData);
    setReviewFrom("");
    setReviewTitle("");
    setReviewText("");
  };

  const outputReviewResponse = () => {
    if (reviewPostResponse) {
      const response = reviewPostResponse;
      // setReviewPostResponse([])
      return (
        <div className="row">
          <div className="card text-white bg-success mb-3">{response.message}</div>
        </div>
      );
    }
  };

  const outputReviewForm = () => {
    return (
      <form className="row" onSubmit={handleSubmit}>
        <div className="col">
          <div className="row">
            <div className="col">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="from"
                placeholder="name@example.com"
                aria-label="From"
                onChange={(event) => setReviewFrom(event.target.value)}
                value={reviewFrom}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Review Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Review Title"
                  onChange={(event) => setReviewTitle(event.target.value)}
                  value={reviewTitle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Review Text</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Review Text"
                  onChange={(event) => setReviewText(event.target.value)}
                  value={reviewText}
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type="submit">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const handleSearchClearClick = (event) => {
    props.clearSearchCallback();
    setSearchQuery(false);
    history.push(`/`);
  };

  const handleSearchResultsClick = (event) => {
    history.push(`/`);
  };

  const displayClearButton = () => {
    return (
      <div>
        <button type="button" className="btn btn-primary m-2 p-2" onClick={handleSearchResultsClick}>
          Search Results
        </button>
        <button type="button" className="btn btn-primary m-2 p-2" onClick={handleSearchClearClick}>
          Clear Search
        </button>
      </div>
    );
  };

  const outputText = () => {
    return (
      <article className="col">
        <div className="row justify-conent-center text-center">
          <div className="col">{searchQuery ? displayClearButton() : <div></div>}</div>
        </div>
        <div className="row">
          <div className="card col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <img src={data.poster} className="card-img-top" alt={data.title}></img>
          </div>
          <div className="col mx-3">
            <div className="row">
              <div className="col">
                <h2>{data.title}</h2>
                <h5>Released {data.released}</h5>
                <p>
                  {data.genre} | {data.actors}
                </p>
                <p>{data.plot}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Reviews</h3>
                <div className="row">{outputReviews()}</div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Submit Review</h3>
                {outputReviewResponse()}
                {outputReviewForm()}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  };

  return <section className="row mt-3 mx-2">{isLoading ? loadingText() : outputText()}</section>;
};

export default withRouter(MovieComponent);
