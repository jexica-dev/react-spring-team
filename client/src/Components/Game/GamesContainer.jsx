import React from "react";
import GameCard from "./GameCard";

export default function GamesContainer(props) {
  return (
    <div className="m-auto grid gap-10 max-w-[1250px] md:w-30 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:px-10 lg:grid-cols-3 pb-12">
      {props.games.map((game) => {
        return (
          <GameCard
            gameId={game.id}
            userId={props.id}
            name={game.name}
            background_image={game.background_image}
            rating={game.metacritic}
            released={game.released}
            key={game.id}
          />
        );
      })}
    </div>
  );
}
