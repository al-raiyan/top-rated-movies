import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
          <h5>
            <span className="fields">Name: </span> {name}
          </h5>
          <p>
            <span className="fields">Director: </span>
            {director}
            <br />
            <span className="fields">Category: </span>
            {category}
            <br />
            <span className="fields">Runtime: </span>
            {runtime}
            <br />
            <span className="fields">Rating: </span>
            {rating}
            <br />
            <span className="fields">Budget: </span>${budget}
            <br />
            <p className="fs-2">
              <span className="fields">Earning: </span>${earning}
            </p>
          </p>
          <button
            onClick={() => props.handelAddToCart(props.movie)}
            className="regular-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
