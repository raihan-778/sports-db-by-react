import React from "react";
import Swal from 'sweetalert2';
import "./Cart.css";

const Cart = ({cart,setCart,key}) => {
  console.log(cart)
  const handleDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    const restPlayers = cart.filter(player=>player.idPlayer!==id)
    console.log(restPlayers)
    setCart(restPlayers)
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
