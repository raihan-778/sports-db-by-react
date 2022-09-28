import React from "react";
import "./Search.css";

const Search = ({ setSearch }) => {
  return (
    <div>
      <label htmlFor="search">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          id="search"
          type="text"
        />
        <button className="search-btn">Search</button>
      </label>
    </div>
  );
};

export default Search;
