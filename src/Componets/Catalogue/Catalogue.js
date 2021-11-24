import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./Catalogue.css";

const Catalogue = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("./movies.JSON")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div className="catalogue-container">
      <div className="movies-container">
        {movies.map((movie) => (
          <Movie movie={movie}></Movie>
        ))}
      </div>
      <div className="cart-container">
        <h3>Movies Added: </h3>
        <h3>Total Earnings: </h3>
      </div>
    </div>
  );
};

export default Catalogue;
