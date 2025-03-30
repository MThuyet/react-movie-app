import React from "react";

const MediaType = ({ name, value, onChange }) => {
  return (
    <div className="accent-black">
      <input
        id="movie"
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
        className="mr-1"
      />
      <label htmlFor="movie">Movie</label> <br />
      <input
        id="tv"
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
        className="mr-1"
      />
      <label htmlFor="tv">TVshow</label> <br />
    </div>
  );
};

export default MediaType;
