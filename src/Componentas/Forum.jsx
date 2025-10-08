import React, {useState} from "react";
import './Forum.css';


function Forum() {
    
    const [name, setName] = useState("Guset");
    const [Quantity, setQuantity] = useState(1);
    const [comment, setComment]  = useState();      
    const [payment, setPayment] = useState("");
    const [shiping, setShiping] = useState("Delivery");
    
    function handleNameChange(event){
        setName(event.target.value)
    }
    
    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    
    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShipingChange(event) {
        setShiping(event.target.value)
    }

    return(
       <>
       <div className="forum">
        <h1>Delivery Forum</h1>
        <input className="in-put" value={name} onChange={handleNameChange} />
        <p className="in-put">Name:{name}</p>

        <input className="in-put" type="number" value={Quantity} onChange={handleQuantityChange} />
        <p className="in-put">Quantity:{Quantity}</p>

        <textarea className="in-put"  value={comment} onChange={handleCommentChange} placeholder="Enter dlivery Instruction"/>
        <p className="in-put">Instruction:{comment}</p>
        
        <select className="in-put"  value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
        </select>  
        <p className="in-put">Payment:{payment}</p>
  
        <div className="shiping">
        <label  >
        <input className="mar"  
               type="radio"
               value="Pick Up"
               checked={shiping === "Pick Up"}
               onChange={handleShipingChange} />
            Pick Up
        </label><br/>
        <label >
        <input className="mar" 
               type="radio" 
               value="Delivery"
               checked={shiping === "Pick Up"}
               onChange={handleShipingChange} />
         Delivery
        </label>
        <p className="mar">Shiping: {shiping}</p>
        </div>
       </div>
       </>
    );
}

export default Forum;