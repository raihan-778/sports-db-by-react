import React from "react";
import "./Playres.css";

const Playres = ({ player }) => {
  console.log(player);

  return (
    <div>
      <h2>{player.strPlayer}</h2>
      <img src={player.strThumb} alt="" />
    </div>
  );
};

export default Playres;
