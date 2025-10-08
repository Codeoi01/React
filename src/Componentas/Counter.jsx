import react, { useState} from 'react';

function Counter() {

    const [isHover, setHover] = useState(false);
    
    const style1 = {
        display: "flex",
        flexDirection: "column",
        backgroundColor:  "#f0f0f0",
        width: "13vw",
        height: "30vh",
        marginLeft: "20px",
        marginBottom: "100px",
        padding: "7px", 
        fontSize: "1.2em",
        border: "2px solid black",
        borderRadius: "10px",
    }
    
    const style2 = {
        backgroundColor: "beige" ,
        color: isHover ? "cadetblue" : "black",  
        padding: "4px", 
        border: "2px solid black",
        borderRadius: "5px",
        margin: "5px", 
        fontWeight: "bold",
        cursor: "pointer",
    }
    
    const style3 = {
        textAlign: "center",
        marginBottom: "10px",
        padding: "1px", 
        borderRadius: "5px",
        border: "1px solid black", 
    }
     const style4 = {
        fontSize: "1.3em",
        textAlign: "center",
        marginBottom: "5px",
        color: "grey", 
        overflow: "hidden",
    }
    
    const [count, setCount] = useState(0);
    
    const increment = () =>{
        setCount(prevCount => prevCount + 1) // usimg
    } 
    
    const decrement = () =>{
        setCount (prevCount => prevCount - 1)
    } 
    
    const reset = () =>{
        setCount(0)
    } 
    

    return(
      <div style={style1}>
        <h1 style={style4}>Counter</h1>
        <p style={style3}>{count}</p>
        <button 
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}

        style={style2} onClick={increment}>Icrement</button>
        
        <button
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}

        style={style2} onClick={reset}>Reset</button>
        <button
        
        onMouseEnter={ () =>setHover(true)}
        onMouseLeave={ () =>setHover(false)}
        
        style={style2} onClick={decrement}>Decrement</button>
      </div>
    );
}

export default Counter;