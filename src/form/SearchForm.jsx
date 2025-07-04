import React from "react";

const SearchForm = () => {
  return (
    <form>
      <input type="text" />
      <button onClick={(e) => {
        e.preventDefault(); // Prevents the default form submission
        alert("Search button clicked!"); // Action to perform on click
      }}>Search</button>
    </form>
  )
}

export default SearchForm;