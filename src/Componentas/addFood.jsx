import { useState } from "react";


function Food() {
    
    const [food, setFood] = useState([])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
         document.getElementById("foodInput").value="";
        
         setFood(prevFood => [...prevFood, newFood]);
    }

    function handleRemoveFood(index){
           setFood(food.filter((_, i) => i !== index))
    }


    return(
        <div>
            <p>List Of Food</p>
            <ul style={{listStyle: "number"}} >
               {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"  />
            <button onClick={handleAddFood} >Add Food</button>
        </div>
    );
}
export default Food