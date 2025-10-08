import React from "react";

function Button() {

    const style = {
       backgroundColor: "beige",
       padding: "10px", 
       fontSize: "20px",
       marginLeft: "39rem",
       marginBottom: "10px",
       border: "2px solid black",
       borderRadius: "10px",
       cursor: "pointer"

      } 


  // const handleClick = () =>  console.log("Button Clicked");

  // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  // let count = 0;
  // const handleClick3 = (name) => {
  //       if(count < 5){
  //            count++;
  //            console.log(`${name} you clicked me ${count} time's`)
  //          }
  //          else{
  //              console.log(`${name} stop clicking me`)
  //         }
  //       }
   
  
//   const handleClick = (e) => e.target.textContent = "Arshad";
  
  
  
  return (
    <button style={style} onClick={ (e)=> handleClick(URL('./addFood.jsx'))}>Click Me</button>);
 

}
export default Button;
