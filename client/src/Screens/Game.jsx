import React from "react";
import { useParams } from "react-router-dom";
import GameDetail from "../Components/Game/GameDetail";

import Layout from "../Components/Layout/Layout";

export default function Game(props) {
  let params = useParams();

  console.log(props.game);
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        GAME PAGE
        <GameDetail id={params.id} games={props.games} />
      </Layout>
    </div>
  );
}
