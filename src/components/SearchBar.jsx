// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search by description..."
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded mt-4 w-full"
    />
  );
}

export default SearchBar;

