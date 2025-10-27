import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <select onChange={onCategoryChange}>
      <option value="All">Filter by Category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
}

export default Filter;