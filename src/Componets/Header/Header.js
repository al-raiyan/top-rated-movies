import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        Top Rated Movies <span className="orange">Of All Time</span>
      </h1>
      <p>
        Here you can see the top rated movies of all time.List by the rating of
        each movies you can see in this page.
      </p>
      <h5>
        The Budget Of the Movies are <span className="orange">1 Billion</span>
      </h5>
    </div>
  );
};

export default Header;
