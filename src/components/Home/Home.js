import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Players from "../Players/Players";

import Search from "../Search/Search";
import "./Home.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  const [cart,setCart]=useState([])
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data.player));
  }, [search]);
  // console.log(search);
  // console.log(players)
  console.log(cart)

  return (
    <div>
      <div className="home-container">
        <div className="players-container">
          <Search setSearch={setSearch}></Search>
          
            <Players key={cart.idPlayer} cart={cart} setCart={setCart} players={players}></Players>
         
        </div>
        <div className="cart-container">
          <Cart key={cart.idPlayer} cart ={cart} setCart={setCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
