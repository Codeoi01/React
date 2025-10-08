import React, {useState} from "react";

function Car() {
    
const [car, setCar] = useState({Year: 2024,
                                Make: "Ford",
                                Model: "Mustang"});
    

    function handleYearChange(event){
        setCar(prevCar =>({...prevCar, Year: event.target.value }));
    }

    function handleMakeChange(event) {
        setCar(prevCar =>({...prevCar, Make: event.target.value}))
        
    }
    
    function handleModelChange(event) {
        setCar(prevCar =>({...prevCar, Model: event.target.value}))
        
    }

    return(
        <div>
         <p>Your favorite car {car.Year} {car.Make} {car.Model}</p>

         <input type="number" value={car.Year}  onChange={handleYearChange} /><br/>
         <input type="text"   value={car.Make}  onChange={handleMakeChange}  /><br/>
         <input type="text"   value={car.Model} onChange={handleModelChange} /><br/>
        </div>
    );
}
export default Car