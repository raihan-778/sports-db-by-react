import React from "react";
import { toast } from 'react-toastify';
import "./Cart.css";

const Cart = ({cart,setCart,key}) => {
  console.log(cart)
  const handleDelete=(id)=>{
        
    console.log(id)
    const restPlayers = cart.filter(player=>player.idPlayer!==id)
    console.log(restPlayers)
    setCart(restPlayers)
    const notify = () => toast("Wow so easy!");
    <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

  }
  return (
    <div>
      <h2>Total Selected Players</h2>
      
      
      {cart?.map(info=>
      <div className="cart-info">  
        <li>{info.idPlayer}</li>
        <button onClick={()=>handleDelete(info.idPlayer)} className="delete-btn">X</button> 
      </div>
      )}
        
      </div>
     
   
  );
};

export default Cart;
