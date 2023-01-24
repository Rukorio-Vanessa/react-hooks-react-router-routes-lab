import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsDetails = directors.map(director => {
    return <div key={director.name} >
      <h3>{director.name}</h3>
        <ul>{director.movies.map(movie => {
          return <li key={movie}>
            {movie}
            </li>
        })}</ul>
      </div>
    })

  return <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    {directorsDetails}
  </div>;
}

export default Directors;
