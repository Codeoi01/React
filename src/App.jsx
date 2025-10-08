import { useState, useEffect } from 'react';
import Navbar from './Componentas/Navbar.jsx'
import Footer from './Componentas/footer.jsx' 
import Card from './Componentas/card.jsx' 
import List from './Componentas/List.jsx';
import Button from './Componentas/button.jsx'
import Picture from './Componentas/Picture.jsx';
import MyComponent from './Componentas/MyComponent.jsx';
import Counter from './Componentas/Counter.jsx';
import Forum from './Componentas/Forum.jsx';
import ColorPicker from './Componentas/ColorPicker.jsx';
import Food from './Componentas/addFood.jsx';
import Car from './Componentas/addCar.jsx';

function App() {


// useEffect(() => {
  
//   alert("Welcome to My Website")
 
//   return ()=>{
//     alert("Thanks for Visiting My Website")  
//   }
  
// }, [])
   
   const frute = [{id: 1, name: "apple",   caloris: 95 }, 
                  {id: 2, name: "orange",  caloris: 45}, 
                  {id: 3, name: "banana",  caloris: 105}, 
                  {id: 4, name: "coconut", caloris: 159 }]; 
   
  
   const Vegetables = [ {id: 1, name: "potato",   caloris: 77 },
                        {id: 2, name: "tomato",   caloris: 18 },
                        {id: 3, name: "onion",    caloris: 40 },
                        {id: 4, name: "carrot",   caloris: 41 },
                        {id: 5, name: "broccoli", caloris: 55 }]; 
   
  
  
  
 return (
    <>
      {/* <Navbar/> */}
      
      {/* <Picture />    */}

      {/* <div className="cards">
        <Card title="Arshad 1" dis="Learnig React"/>
        <Card title="Arshad 2" dis="Learnig React"/>
        <Card title="Arshad 3" dis="Learnig React"/>
        <Card title="Arshad 4" dis="Learnig React"/>
        <Card title="Arshad 5" dis="Learnig React"/>
      </div> */}
     {/* < Button/> */}
      {/* <h1 className='had' >Rendering List</h1> */}
      {/* <div className='li-st'>
      { frute.length > 0 ?  <List items={frute} Category="Fruits"/> : null}
      { frute.length > 0 ?  <List items={Vegetables} Category="Vegetables"/> : null}
      </div>
       <div style={{display: "flex", marginBottom: "40px",}}>
      <MyComponent/> 
      <Counter/>
      <Forum/>
      <ColorPicker/>
       </div> */}
       <Car/>
      {/* <Food/> */}
      {/* <Footer /> */}
    </>
  );
};

export default App
