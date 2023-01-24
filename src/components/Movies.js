import React from "react";
import { movies } from "../data";

function Movies() {
  // movie's title, time and a list of its genres
  const movieDetails = movies.map(movie => {
    return <div key={movie.title} >
      <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <ul>{movie.genres.map(genre => {
          return <li key={genre}>
            {genre}
            </li>
        })}</ul>
      </div>
    })

  return <div>
    {/*{code here}*/}
    <h1>Movies page</h1>
    {movieDetails}
    </div>;
  
  
}

export default Movies;
