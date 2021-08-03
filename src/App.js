import './App.css';
import DataHandlerComponent from './DataHandlerComponent';
import React, {useState, useEffect} from "react"
import HeaderComponent from './HeaderComponent';
import RouterComponent from './RouterComponent';
import { Switch, Route} from "react-router-dom";
import MoviesComponent from './MoviesComponent'
import MovieComponent from "./MovieComponent";
import LoginComponent from './LoginComponent'

const App = () => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ searchQuery, setSearchQuery ] = useState('')

  useEffect(() => {
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

  }, []);

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const outputText = () => {
    return (<div>Output</div>)
  }

  return (
    <div className="container-fluid p-0">
      <HeaderComponent searchCallback={(query) => setSearchQuery(query)}/>
      <main className="container-fluid p-0">
        <Switch >
          <Route exact path="/" >
            <MoviesComponent searchQuery={searchQuery} clearSearchCallback={() => setSearchQuery('')}/>
          </Route>
          <Route exact path="/movie/:movieid">
            <MovieComponent />
          </Route>
          <Route exact path="/login">
            <LoginComponent />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
