import React from "react";
import { Link } from "react-router-dom";

export default function GameDetail(props) {
  return (
    <>
      <Link className="game" to={`/games/${props._id}`}>
        <img className="game-image" src={props.imgURL} alt={props.name} />
        <div className="game-name">{props.name}</div>
        <div className="game-info">{`$${props.info}`}</div>
      </Link>
    </>
  );
}
