// import axios from "axios";
import React, { useEffect } from "react";
import { getGames } from "../../Services/apiConfigGames";
import GameCard from "./GameCard";

export default function GamesContainer() {
  const [games, setGames] = useState("");

  useEffect(() => {
    // const data = getGames();

    async function fetchData() {
      const data = await getGames();
      setGames(data);
    }

    fetchData();
  }, [games]);

  const CARDS = games.reverse().map((game, index) =>
    index < 8 ? (
      <GameCard
        // id={game.id}
        name={game.name}
        imgURL={game.background_image}
        key={game.id}
      />
    ) : null
  );

  return (
    <div className="border border-black">
      <div className="game-cards">
        <div className="p-10 latest">Game List</div>
        <div className="cards">{CARDS}</div>
      </div>
    </div>
  );
}
