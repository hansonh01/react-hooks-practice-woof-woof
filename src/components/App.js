import React, { useEffect, useState } from "react";
import DogBar from "./DogBar";
import Summary from "./Summary";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  
  useEffect(()=>{
    fetch('http://localhost:3001/pups')
      .then(r=>r.json())
      .then(setDogs);
  },[])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <DogBar dogs={dogs} showDog={setSelectedDog} />
      {selectedDog ? <Summary dog={selectedDog}/> : null}
    </div>
  );
}

export default App;