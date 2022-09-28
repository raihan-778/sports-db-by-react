import React from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = ({ players, cart, setCart }) => {
  console.log(players)

  return (
    <div>
      <div className="single-player-container">
         {!players?"No data found":players.map((player)=>(
         <SinglePlayer player={player} key={player.idPlayer} setCart={setCart} cart={cart} ></SinglePlayer>
         ))}
        </div>  
      
    </div>
  );
};

export default Players;
