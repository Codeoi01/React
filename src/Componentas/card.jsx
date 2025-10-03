import pp from "./assets/react.svg"

function Card(){
    return(
       <div className="card">
        <img src={pp} alt="Profile Picter"/>       
        <h2>Arshad</h2>
        <p> i am learning react</p>
       </div>
    );
}

export default Card