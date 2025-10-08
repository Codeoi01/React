function Picture() {
   const style = {
       padding: "10px", 
       fontSize: "20px",
       marginLeft: "40rem",
      } 


    const imageUrl = "./src/assets/react.svg"
    
    const handleClick = (e) =>{ 
               e.target.style.display ="none";
    }
    
    return (
        <img style={style} onClick={(e)=> handleClick(e) } src={imageUrl} alt="image" />
    );
}
export default Picture;