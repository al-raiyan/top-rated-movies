import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  for (const movie of cart) {
    total = total + movie.earning;
  }
  let name = [];
  for (const movie of cart) {
    name = name + movie.name;
  }
  return (
    <div className="movie-cart">
      <h1>Movie Cart</h1>
      <h5>Movies Added: {props.cart.length}</h5>
      <h5>
        Total Earnings: <br />
        {total}
      </h5>
      <h3 className="text">{name}</h3>
    </div>
  );
};

export default Cart;
