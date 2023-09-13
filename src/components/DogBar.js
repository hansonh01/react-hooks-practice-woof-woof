import React from 'react'

const DogBar = ({ dogs, showDog }) => {
  return (
    <div id="dog-bar">
      {dogs.map((dog)=>(
        <span key={dog.id} onClick={()=>showDog(dog)}>{dog.name}</span>
      ))}
    </div>
  )
}

export default DogBar;