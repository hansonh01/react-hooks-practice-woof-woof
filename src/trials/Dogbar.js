import React from 'react'

const Dogbar = ({ dogs, onClickToSelect, onShowInfo }) => {
  const handleClick = (dog) => {
    onClickToSelect(dog)
    onShowInfo(true)
  }
  return (
    <div id="dog-bar">
      {dogs.map((dog)=>(
        <span 
        key={dog.id}
        onClick={()=>handleClick(dog.id)}
        >{dog.name}
        </span>
      ))}
    </div>
  )
}

export default Dogbar