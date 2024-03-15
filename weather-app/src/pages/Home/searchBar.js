import React, { useState } from 'react';

const SearchBar = ({ onCityChange }) => {
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

    const enterKeyPressed = (event) => {
        if (event.key === 'Enter') {
        onCityChange(event.currentTarget.value);
        setInputValue('');
        event.currentTarget.blur();
        }
    };

  return (
    <div className='search-bar'>
 
        <input type="text"
                placeholder="Enter city name"
                value={inputValue}
                onKeyDown={enterKeyPressed}
                onChange={handleInputChange} />


    </div>
  );
};

export default SearchBar;
