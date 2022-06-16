import React from "react";
import { Link } from "react-router-dom";

export default function GameCard(props) {




  return (
    <>
      <div className="grid place-content-center">
      <Link className="card" to={`/games/${props.id}`}>
        <h4 className="text-center">{props.name}</h4>
      </Link>
        <img className="object-cover h-48 min-w-full" src={props.background_image} alt={props.name} />
        <div className="flex justify-between text-sm">
          <p>Rating:{props.rating}%</p>
          <p>Released:{props.released}</p>
        </div>
        <div className="flex">
          <button className="grow whitespace-nowrap font-medium tracking-wider py-3 px-10 hover:bg-trp bg-black text-white">👍</button>
          <button className="grow whitespace-nowrap font-medium tracking-wider py-3 px-10 hover:bg-trp bg-black text-white">👎</button>
        </div>
      </div>
      </>
  );
}
