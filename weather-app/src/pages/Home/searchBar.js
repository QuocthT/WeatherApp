import React, { useState } from "react";

const SearchBar = ({ onCityChange }) => {
  // State variable to hold input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle Enter key press
  const enterKeyPressed = (event) => {
    if (event.key === "Enter") {
      onCityChange(event.currentTarget.value);
      setInputValue("");
      event.currentTarget.blur();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={inputValue}            //controlled input: value linked to state
        onKeyDown={enterKeyPressed}   //Triggers on Enter key press
        onChange={handleInputChange}  //Triggers on input change
      />
    </div>
  );
};

export default SearchBar;
