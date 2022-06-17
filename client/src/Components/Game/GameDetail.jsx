import React from "react";
// import { Link } from "react-router-dom";

export default function GameDetail(props) {
  let game = props.games.find((e) => {
    return e.id == props.id;
  });

  console.log(props.games);

  return (
    <>
      <p>
        <img
          className="game-image"
          src={game.background_image}
          alt={game ? game.name : null}
        />
        <div className="game-name">{game ? game.name : null}</div>
        <div className="game-info">{game ? game.info : null}</div>
      </p>
    </>
  );
}
