import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const { name, director, category, img, rating, runtime, budget, earning } =
    props.movie;
  return (
    <div className="card">
      <div className="card-items">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h5>Name: {name}</h5>
          <p>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
