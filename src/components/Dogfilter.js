import React from 'react';

const Dogfilter = ({ setFilter, onIfFilterOn }) => {
  
  return (
    <div id="filter-div">
        <button id="good-dog-filter" onClick={onIfFilterOn}>
          {setFilter ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'}
        </button>
    </div>
  )
}

export default Dogfilter