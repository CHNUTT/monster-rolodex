import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ handleOnChange, placeholder = 'search monster' }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={handleOnChange}
    />
  );
};

export default SearchBox;
