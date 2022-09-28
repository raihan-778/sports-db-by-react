import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Playres from "../Players/Playres";
import Search from "../Search/Search";
import "./Home.css";
const Home = () => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p={search}`
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data.player));
  }, [search]);
  console.log(players);
  console.log(search);

  return (
    <div>
      <div className="home-container">
        <Search setSearch={setSearch}></Search>
        <div className="playres-container">
          {players.map((player) => (
            <Playres player={player}></Playres>
          ))}
        </div>
        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
