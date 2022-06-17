import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL, config } from "../../Services/apiConfigGames";
import GameCard from "./GameCard";

export default function GamesContainer(props) {
  const [games, setGames] = useState("");
  const [loading, setLoading] = useState(true);
  // let gameCards = [];

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

  if (!loading) {
    return (
        <div className="m-auto grid gap-10 grid-cols-3 max-w-screen-lg pb-12">
        {games.results.map((game, key) => {
              return (
                <GameCard
                  gameId={game.id}
                  userId={props.id}
                  name={game.name}
                  background_image={game.background_image}
                  rating={game.metacritic}
                  released={game.released}
                  key={key}
                />
                )
            })}
        </div>
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
