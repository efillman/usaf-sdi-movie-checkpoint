import React, {useState, useEffect} from "react";
import DataHandlerComponent from './DataHandlerComponent';
import MoviesComponentCard from './MoviesComponentCard'

const MoviesComponent = (props) => {
  const [ data, setData ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true)
  const [ searchQuery, setSearchQuery ] = useState(false)

  useEffect(() => {
    const dataHandler = new DataHandlerComponent();
    if (props.searchQuery) {
      dataHandler.getSearch(props.searchQuery).then((data) => setData(data)).then(() => setIsLoading(false))
      setSearchQuery(true)
    } else {
      dataHandler.getMovies().then((data) => setData(data)).then(() => setIsLoading(false))
    }

  }, [props.searchQuery]);

  const loadingText = () => {
    return (<div>Loading</div>)
  }

  const handleSearchClick = (event) => {
    props.clearSearchCallback()
    setSearchQuery(false)
  };

  const displayClearButton = () => {
    return (
    <button type="button" className="btn btn-primary m-2 p-2" onClick={handleSearchClick}>
    Clear Search
  </button>)
  }

  const outputText = () => {
    let output = data.map((movie, each) => {
      return <MoviesComponentCard key={`movieid-${movie.movieId}`} id={movie.movieId} data={movie} />
    })

    return (output)
  }

  return (
    <section className="row p-0">
      <div className="col p-0">
        <div className="row justify-conent-center text-center p-0">
          <div className="col p-0">
            {searchQuery ? displayClearButton() : <div></div>}
          </div>
        </div>
        <div className="row p-0">{isLoading ? loadingText() : outputText()}</div>
      </div>
    </section>
  )
}

export default MoviesComponent