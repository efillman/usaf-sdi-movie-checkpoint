import React, {} from "react";
import { useHistory } from "react-router-dom";

const MovieComponentCard = (props) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/movie/${props.id}`);
  }

  return (
    <article className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" onClick={handleOnClick}>
      <img src={props.data.poster} className="card-img-top" alt={props.data.title}></img>
    </article>
  )
}

export default MovieComponentCard