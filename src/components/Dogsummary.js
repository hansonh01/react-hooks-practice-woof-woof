import React, { useState } from 'react'

const Dogsummary = ({ dog, onUpdateDog }) => {
  const { id, name, image, isGoodDog} = dog;

  const handleIsGoodClick = () => {
    fetch(`http://localhost:3001/pups/${id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({isGoodDog:!isGoodDog})
    })
      .then(r=>r.json())
      .then((data)=>{
        onUpdateDog(data);
      })
  };

  return (
    <div id="dog-summary-container">
        <h1>DOGGO: </h1>
        <div id="dog-info">
          <img src={image} alt={name}/>
          <h2>{name}</h2>
          <button onClick={handleIsGoodClick}>
            {isGoodDog ? 'Good Dog!' : 'Bad Dog!'}
          </button>
        </div>
    </div>
  )
}

export default Dogsummary