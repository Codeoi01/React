import { useState, useEffect } from 'react';
import Navbar from './Componentas/Navbar.jsx'
import Footer from './Componentas/footer.jsx' 
import Card from './Componentas/card.jsx' 
function App() {

useEffect(() => {
  
  alert("Welcome to My Website")

  
}, [])


  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Arshad 1" dis="Learnig React"/>
        <Card title="Arshad 2" dis="Learnig React"/>
        <Card title="Arshad 3" dis="Learnig React"/>
        <Card title="Arshad 4" dis="Learnig React"/>
        <Card title="Arshad 5" dis="Learnig React"/>
      </div>
      <Footer />
    </>
  );
}

export default App
