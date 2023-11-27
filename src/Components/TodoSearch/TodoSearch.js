import './TodoSearch.css'
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input placeholder="Search" className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        // console.log('Escribiste en el TodoSearch')
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        setSearchValue(event.target.value);
      }} />
  );
}

export { TodoSearch };