import React from "react";

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;