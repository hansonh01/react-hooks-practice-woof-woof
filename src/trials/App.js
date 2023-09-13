import React, { useEffect, useState } from "react";
import Dogbar from "./Dogbar";
import Dogsummary from "./Dogsummary";
import Dogfilter from "./Dogfilter";

function App() {
  const [dogs, setDogs] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedDog, setSelectedDog] = useState("");
  const [filterOn, setFilterOn] = useState(false);

  useEffect(()=>{
    fetch('http://localhost:3001/pups')
      .then(r=>r.json())
      .then(setDogs)
  },[])

  const updateDogs = (updateDog) => {
    const updatedDogs = dogs.map((dog)=> dog.id === updateDog.id ? updateDog : dog);
    setDogs(updatedDogs); 
  };

  const selectDog = dogs.find((dog)=> dog.id === selectedDog)

  const handleFilterToggle = () => setFilterOn(!filterOn);

  let filterGoodDogs = dogs;
  if(filterOn){
    filterGoodDogs = filterGoodDogs.filter((dog)=>dog.isGoodDog)
  }

  return (
    <div className="App">
      <Dogfilter setFilter={filterOn} onIfFilterOn={handleFilterToggle}/>
      <Dogbar dogs={filterGoodDogs} onClickToSelect={setSelectedDog} onShowInfo={setShowInfo}/>
      {showInfo ? <Dogsummary dog={selectDog} onUpdateDog={updateDogs}/> : null}
      
    </div>
  );
}

export default App;
