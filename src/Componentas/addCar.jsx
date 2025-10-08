import React, {useState} from "react";

function addCar() {
    
  const [cars,         setCars]    =  useState([]);
  const [carYear,   setCarYear]    =  useState(new Date().getFullYear());
  const [carMake,   setCarMake]    =  useState("");
  const [carModel, setCarModel]    =  useState("");


  function handleAddCar(){
    setCars([...cars, {Year: carYear, Make: carMake, Model: carModel}]);
  }

  function handleRemoveCar(index){

  }

  function handleYearChange(event){
     setCarYear(event.target.value);
  }

  function handleMakeChange(event){
     setCarMake(event.target.value)

  }

  function handleModelChange(event){
        setCarModel(event.target.value)
  }


    return(
        <div>
            <h1>List Of Car</h1>
            
            <ul>
                {cars.map((cars, index) =><li key={index}>{cars}</li>)}
            </ul>

            <input type="number" value={carYear}   onChange={handleYearChange}  /><br/>
            <input type="text"   value={carMake}   onChange={handleMakeChange}  /><br/>
            <input type="text"   value={carModel}  onChange={handleModelChange} /><br/>
            <button onClick={handleAddCar} >Add Car</button>
        </div>
    );
}
export default addCar