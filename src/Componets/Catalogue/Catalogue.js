import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Movie from "../Movie/Movie";
import "./Catalogue.css";

const Catalogue = () => {
  const [movies, setMovies] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./movies.JSON")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  const handelAddToCart = (movie) => {
    const newCart = [...cart, movie];
    setCart(newCart);
  };
  return (
    <div className="catalogue-container">
      <div className="movies-container">
        {movies.map((movie) => (
          <Movie
            key={movie.key}
            movie={movie}
            handelAddToCart={handelAddToCart}
          ></Movie>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Catalogue;
