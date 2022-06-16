import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL, config } from "../../Services/apiConfigGames";
// import GameCard from "./GameCard";

export default function GamesContainer() {
  const [games, setGames] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //GET request
    async function fetchData() {
      const res = await axios.get(baseURL, config);

      // console.log(res);

      const { data } = res;
      // console.log(data);

      setGames(data);
      setLoading(false);
      // console.log(games);
    }
    fetchData();
  }, []);

  console.log(games);

  if (!loading) {
    return (
      <>
        <div className="border border-black">
          <div className="game-cards">
            <div className="p-10 latest">Game List</div>
            {games.map((game, index) => (index < 5 ? console.log(game) : null))}
            {/* <div className="cards">{CARDS}</div> */}
          </div>
        </div>
      </>
    );
  } else return <h3>...</h3>;
}

// const CARDS = data.reverse().map((game, index) =>
//   index < 5 ? (
//     <GameCard
//       id={game.id}
//       name={game.name}
//       // imgURL={game.image_background}
//       // imgURL={game.imgURL}
//     />
//   ) : null
// );
