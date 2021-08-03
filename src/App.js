import './App.css';
import DataHandlerComponent from './DataHandlerComponent';
import React, {useState, useEffect} from "react"

const App = () => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    // Update the document title using the browser API
    const dataHandler = new DataHandlerComponent();
    dataHandler.getMovies().then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getMovie(1).then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getSearch("Birds").then((data) => setData(data)).then(() => setIsLoading(false))
    //dataHandler.getReviews(1).then((data) => setData(data)).then(() => setIsLoading(false))
    // const reviewData = {email:"test@test.com",movieId:1,reviewTitle:"test test",reviewText:"test test test"};
    // dataHandler.postReview(reviewData).then((data) => setData(data)).then(() => setIsLoading(false))
    // const registerData = {email:"test@test.com",password:"password"};
    // dataHandler.postRegister(registerData).then((data) => setData(data)).then(() => setIsLoading(false))

  }, []);

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const outputText = () => {
    return (<div>{data[0].title}</div>)
  }

  return (
    <div className="App">
      {isLoading ? loadingText() : outputText()}
    </div>
  );
}

export default App;
