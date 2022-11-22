import React from "react";
import './App.css';

import data from "./data.json";

import Header from "./header/header";
import MovieList from "./movieList/movieList";

function App() {
  const state = {
    movieData: data,
    headerMessage: "영화 소개 프로젝트"
  };
  return (
    <div className="App">
      <Header headerMessage={state.headerMessage}/>
      <MovieList movieData={state.movieData} />
    </div>
  );
}

export default App;
