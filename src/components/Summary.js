import React from 'react'

const Summary = ({ dog }) => {
  const { id, name, isGoodDog, image } = dog;

  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={image} alt={name}/>
          <h2>{name}</h2>
          <button>
            {isGoodDog ? 'Good Dog!':'Bad Dog!'}
          </button>
        </div>
      </div>
  )
}

export default Summary