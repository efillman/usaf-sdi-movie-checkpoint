import React, {useState, useEffect} from "react";
import { Switch, Route} from "react-router-dom";
import MoviesComponent from './MoviesComponent'
import MovieComponent from "./MovieComponent";
import LoginComponent from './LoginComponent'

const RouterComponent = () => {
  return (
    <main>
        <Switch >
          <Route exact path="/" >
            <MoviesComponent />
          </Route>
          <Route exact path="/movie/:movieid">
            <MovieComponent />
          </Route>
          <Route exact path="/login">
            <LoginComponent />
          </Route>
        </Switch>
      </main>
  )
}

export default RouterComponent