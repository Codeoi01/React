import React, { useState} from 'react';

function MyComponent () {

    const [isHover, setHover] = useState(false);

    const style = {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f0f0f0",
        width: "13vw",
        height: "45vh",
        marginLeft: "20px",
        marginBottom: "100px",
        padding: "7px", 
        fontSize: "1.2em",
        border: "2px solid black",
        borderRadius: "10px",
    }
    
    const style2 = {
        backgroundColor: "beige",
        color: isHover ? "cadetblue" : "black",
        padding: "4px", 
        border: "2px solid black",
        borderRadius: "5px",
        margin: "10px 0 ", 
        fontWeight: "bold",
        cursor: "pointer",
    }
    
    const style3 = {
        padding: "4px", 
        borderRadius: "5px",
        border: "1px solid black", 
    }
     const style4 = {
        fontSize: "1.3em",
        textAlign: "center",
        marginBottom: "5px",
        color: "grey", 
    }

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false); 

    const updateName = () =>{
         setName("Arshad" );
    }
    
    const incrementAge = () =>{
        setAge(age+1);
    }
    
    const toggleEmployeStatus = () =>{
          setIsEmployed(!isEmployed);
    }
        
    return (
      <div style={style}>
        <h1 style={style4} >Employe Status</h1>
        <p style={style3}>Name: {name}</p>
        <button
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}
        style={style2} onClick={updateName}>Set Name</button>
        
        <p style={style3}>Age: {age}</p>
        <button
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}
        style={style2} onClick={incrementAge}>Increment Age</button>
        
        <p style={style3}>  is employe: {isEmployed ? "Yes" : "No"}</p>
        <button
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}
        style={style2} onClick={toggleEmployeStatus}>Toggel Status</button>
      
      </div>
    );

}    

export default MyComponent