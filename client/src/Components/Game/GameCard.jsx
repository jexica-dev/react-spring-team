import React from "react";
import { Link } from "react-router-dom";

export default function GameCard(props) {
  return (
    <>
      <Link className="card" to={`/games/${props._id}`}>
        <img className="game-card-image" src={props.imgURL} alt={props.name} />
        <div>View</div>
      </Link>
    </>
  );
}
