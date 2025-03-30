import React from "react";

const Rating = ({ onChange, name }) => {
  return (
    <select
      className="rounded border accent-black"
      name={name}
      onChange={onChange}
    >
      <option value="all">All</option>
      <option value="0 - 49">0 - 49</option>
      <option value="50 - 69">50 - 69</option>
      <option value="70 - 100">70 - 100</option>
    </select>
  );
};

export default Rating;
