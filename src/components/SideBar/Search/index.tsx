import React, { useContext } from 'react';
import { SearchChangeContext, SearchContext } from '../../../context/SearchContext';

const Search = () => {
  const text = useContext(SearchContext);
  const onChangeText = useContext(SearchChangeContext);
  
  return (
    <label htmlFor="search">
      <input 
        placeholder="Search..."
        type="text" 
        value={text} 
        name="search" 
        onChange={(e) => {onChangeText(e);}}/>
    </label>
  );
};

export default Search;